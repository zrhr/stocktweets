import React, { Component,useState } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
 MDBIcon,Container } from "mdbreact";


function Header (props) {
const [isOpen,setState]=useState(false)

const toggleCollapse = () => {
  setState( !isOpen );
}


  return (
   
      <MDBNavbar color="default-color" dark expand="md">
        <Container>
         <MDBNavbarBrand >
         <strong className="white-text">Stock Tip Hack</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={()=>toggleCollapse()} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
        
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
             
            </MDBNavItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
        </Container>
      </MDBNavbar>
    
    );
  }


export default Header