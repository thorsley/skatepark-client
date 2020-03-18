import React from 'react';
import {
Navbar,
NavbarBrand,
Badge,
Nav,
NavItem,Button,NavLink
}from 'reactstrap';


const Navigate = (props) =>{
    

    return(
        <Navbar  style={{backgroundColor: '#393939'}} light expand="md">
            <NavbarBrand>
            <h1><Badge color="secondary">Skatepark</Badge></h1>
            </NavbarBrand>
            <Nav>
                <NavItem>
                    <Button onClick={props.clickLogout}>Logout</Button>
                </NavItem>
               <NavItem></NavItem>
               <NavItem></NavItem>
               
                <NavItem>
              <NavLink href="all/allparks">Park list</NavLink>
            </NavItem>
            </Nav>

        </Navbar>
    )
}

export default Navigate;