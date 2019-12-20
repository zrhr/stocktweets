  
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export function receivePosts(searchTerms) {
    return async (dispatch) => {
        var total=[];
        console.log(searchTerms)
        for( let i = 0; i<searchTerms.length; i++){
         const response = await fetch(`http://localhost:5000/api/twits/${searchTerms[i]}.json`)
         const json = await response.json()
         console.log(json)
         total.push(json);
        }
         dispatch({
           type:RECEIVE_TWEETS,
           payload: total
         })
       }
     }