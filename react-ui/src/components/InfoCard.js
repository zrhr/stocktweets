
import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Moment from 'react-moment'
const InfoCard = (props) => {
    const calendarStrings = {
        lastDay : '[Yesterday at] LT',
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        lastWeek : '[last] dddd [at] LT',
        nextWeek : 'dddd [at] LT',
        sameElse : 'L'
    };
    
  return (
    
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle><Moment fromNow={true} calendar={calendarStrings} date={props.item.created_at}/></MDBCardTitle>
          <MDBCardText>
          {props.item.body}
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
   
  )
}

export default InfoCard;