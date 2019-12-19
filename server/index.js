if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const PORT = process.env.PORT || 5000;
const getBearerToken = require('get-twitter-bearer-token')
const Twitter = require('twitter');

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  app.get('/api/:stock', function (req, res) {
    var key = process.env.TWITTER_CONSUMER_KEY;
    var secret = process.env.TWITTER_SECRET_KEY;
    var allTweets={a:0};
    var query= '$'+req.params.stock;
    getBearerToken(key, secret, (err, res) => {
      if (err) {
        // handle error
      } else {
        var client = new Twitter({
          bearer_token: res.body.access_token,
        });
        client.get('search/tweets', {q: query}, function(error, tweets, response) {
          console.log(tweets);
          allTweets=tweets;
         
        });
      }
    })
    setTimeout(()=>{
    res.set('Content-Type', 'application/json');
          res.send(allTweets);},500)
   
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}