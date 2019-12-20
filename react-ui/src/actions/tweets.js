  
export const RECEIVE_GIGS = 'RECEIVE_TWEETS'
export function receivePosts(searchTerms) {
    return async (dispatch) => {
        var total=[];
        for( let i = 0; i<searchTerms.length; i++){
         const response = await fetch(`https://gig-compare-backend.herokuapp.com/api/v1/gigs`)
         const json = await response.json()
         console.log(json)
         total.push(json);
        }
         dispatch({
           type:RECEIVE_GIGS,
           payload: json
         })
       }
     }