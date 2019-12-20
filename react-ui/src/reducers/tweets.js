import {RECEIVE_tweets,ADD_RATING, ADD_COMPARE} from '../actions/tweets' 

const intialState=[]
const tweets = (state = intialState, action) => {
    switch (action.type) {
        case RECEIVE_TWEETS:
            return action.payload
        
      
            
    
        default:
            return state
    }
  }
  
  export default tweets