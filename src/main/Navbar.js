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
                <br/>
                <NavItem>
              <Button href="all/allparks">Park list</Button>
            </NavItem>
            </Nav>

        </Navbar>
    )
}

export default Navigate;