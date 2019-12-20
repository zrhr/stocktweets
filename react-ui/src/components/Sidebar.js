  
import React,{useEffect} from 'react'
import { MDBBtn,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

function Sidebar(props) {
   
    return (
        <div>
           
            <MDBRow>
                
                <MDBCard style={{width:100+ "%", margin:"1em"}}>

                    <input
                        
                        type="text"
                        onChange={(e) => {
                        props.handleSearchTerm(e)
                    }}
                        value={props.searchTerm}
                        placeholder="Search by name"></input>
                        <MDBBtn onClick={props.handleClick} >Add Stock Symbol</MDBBtn>
                </MDBCard>
            </MDBRow>
           
            <MDBRow>
               
            </MDBRow>
        </div>
    )
}

export default Sidebar