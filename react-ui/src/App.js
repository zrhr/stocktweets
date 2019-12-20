import React from 'react';
import {useEffect, useState} from 'react';

import moment from 'moment'
import InfoCard from './components/InfoCard'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import {MDBCol, MDBBtn, MDBRow, MDBCard, MDBCardImage, MDBContainer, MDBSpinner} from 'mdbreact';
function App() {
  const [loaded,
      setLoaded] = useState(false)
  const [update,
      setUpdate] = useState(false)
 const [tweets, setTweets]=useState([]);
  const [searchTerm,
      setSearchTerm] = useState([]);
  const [searchType,
      setSearchType] = useState("");
  useEffect(() => {
    async function getTweets(){
    var total=[];
    console.log(searchTerm)
    for( let i = 0; i<searchTerm.length; i++){
     let response = await fetch(`http://localhost:4000/api/twits/${searchTerm[i]}`)
     let json = await response.json()
     console.log(json)
     json.messages.forEach(element => {
       element["ticker"]=searchTerm[i];
       total.push(element);
     });

    }
  setTweets([...total])
  }
    getTweets();
    
  },[searchTerm, update])

  useEffect(() => {
    let updateInterval = setTimeout(() => {
        setLoaded(prestate=>!prestate)
        setUpdate(state=>!state)
    }, 1000)


}, [loaded])
  const handleDelete=(e)=>{
    console.log(e.target.value);
    setSearchTerm(prevstate=>prevstate.filter(el=>el!==e.target.value))
    
    setUpdate(prevstate=>!prevstate)
  
  }
  
  const handleSearchType = (e)=>{
    setSearchType(e.target.value)
  }
  const handleSearch = (e) => {
      setSearchTerm(prevstate=>[...prevstate, searchType.toUpperCase()]);
      setSearchType("");
      setUpdate(prevstate=>!prevstate)
  }
const filtered=tweets.sort(function(a, b){
  return moment(b.created_at).format('X')-moment(a.created_at).format('X')
});
     console.log("f",filtered)
 
  return (
      <div>
          <Header></Header>          
          <MDBContainer >
              <MDBRow>
                  <MDBCol md="12" sm="12" xs="12">
                      <MDBRow>
                      <hr></hr> 
                      </MDBRow>
                  </MDBCol>

              </MDBRow>
              <MDBRow>

                  <MDBCol md="12" sm="12" xs="12">
                      <MDBRow>

                          <MDBCol md="3" sm="12">
                              < Sidebar handleSearchTerm={handleSearchType} handleClick={handleSearch} searchTerm={searchType}/>
                          </MDBCol>
                          <MDBCol md="9" sm="12">
                              <MDBRow>
                                  <h1>Browse Stock Tweet Tips
                                  </h1>
                              </MDBRow>
                              <MDBRow>
                                {searchTerm.length==0 ? "Tickers show here": searchTerm.map(ticker=>{
                                  return <MDBCol md="2" sm="5">{tweets.filter(el=>el.ticker==ticker).length} {ticker}<MDBBtn value={ticker} onClick={handleDelete}>X</MDBBtn></MDBCol>
                                })}
                                  
                                  <MDBCol auto></MDBCol>
                                  
                                  
                              </MDBRow>
                              <MDBRow>
                                  <MDBCol>
                                      <hr></hr>
                                  </MDBCol>
                              </MDBRow>

                              <MDBRow>

                                  {filtered.length == 0
                                      ? "Search for a ticker symbol to see Tweets"
                                      :  filtered.map(twit => {console.log(twit)
                                          return (
                                              <MDBCol md="6" xs="12" sm="6"><InfoCard item={twit}  key={twit.id}/></MDBCol>
                                              
                                          )
                                      })}
                              </MDBRow>
                          </MDBCol>
                      </MDBRow>
                  </MDBCol>

              </MDBRow>
          </MDBContainer>
      </div>
  );
}

export default App;