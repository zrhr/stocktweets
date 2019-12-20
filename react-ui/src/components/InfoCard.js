
import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Moment from 'react-moment'
const InfoCard = ({twit}) => {
    const calendarStrings = {
        lastDay : '[Yesterday at] LT',
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        lastWeek : '[last] dddd [at] LT',
        nextWeek : 'dddd [at] LT',
        sameElse : 'L'
    };
    
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle><Moment fromNow={true} calendar={calendarStrings} date={twit.created_at}/></MDBCardTitle>
          <MDBCardText>
          {twit.body}
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;