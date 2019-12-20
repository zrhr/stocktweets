import React from 'react';
import {useEffect, useState} from 'react';
import {receivePosts, addRatings, addToCompare} from '../actions/tweets.js';
import {connect} from 'react-redux';
import InfoCard from '.components/InfoCard'
import Header from '.components/Header'
import Sidebar from '.components/Sidebar'
import {MDBCol, MDBRow, MDBCard, MDBCardImage, MDBContainer} from 'mdbreact';
function App({tweets, receivePosts, ownProps}) {
  const [loaded,
      setLoaded] = useState(false)
  const [update,
      setUpdate] = useState(false)
 
  const [searchTerm,
      setSearchTerm] = useState([]);
  const [searchType,
      setSearchType] = useState("");
  useEffect(() => {
      console.log(ownProps)
      receivePosts();
      return setLoaded(true);
  }, searchTerm)
  useEffect(() => {
      if (loaded) {
          console.log("hello")
          
          setLoaded(false)
          setUpdate(true)
      }
  }, [tweets]);
  const handleSearchType = (e)=>{
    setSearchType(e.target.value)
  }
  const handleSearch = (e) => {
      setSearchTerm(prevstate=>[...prevstate, e.target.value);
  }

  if (update) {
      let gigCount = 0;
      for (let i = 0; i < tweets.length; i++) {
          if (tweets[i].compare) 
              gigCount++;
          }
     
 
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
                                  <h1>BRowse Stock Tips
                                  </h1>
                              </MDBRow>
                              <MDBRow>
                                  <MDBCol md="2" sm="5">{tweets.length} results</MDBCol>
                                  <MDBCol auto></MDBCol>
                                  <MDBCol md="2" sm="2">
                                      <select name="type" onChange={(e)=>handleCategory(e)}>
                                          <option selected value="">Best Match</option>
                                          <option value="Courier">Courier</option>
                                          <option value="Chauffeur">Chauffeur</option>
                                      </select>
                                  </MDBCol>
                                  
                              </MDBRow>
                              <MDBRow>
                                  <MDBCol>
                                      <hr></hr>
                                  </MDBCol>
                              </MDBRow>

                              <MDBRow>

                                  {!update
                                      ? <Spinner
                                              style={{
                                              width: '3rem',
                                              height: '3rem'
                                          }}
                                              type="gMDBRow"/>
                                      : filtered.length > 0 && filtered.map(twit => {
                                          return (
                                              <MDBCol md="4" xs="12" sm="6"><InfoCard item={twit}  key={gig.id}/></MDBCol>
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
function mapStatetoProps(state, ownProps) {
  return {tweets: state.tweets, ownProps: ownProps}
}
function mapDispatchToProps(dispatch) {
  return {
      
      receivePosts: (symbols) => dispatch(receivePosts())
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(App);