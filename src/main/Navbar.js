import React from 'react';
import {
Navbar,
NavbarBrand,
Badge,
Nav,
NavItem,Button
}from 'reactstrap';

const Navigate = (props) =>{
    return(
        <Navbar color="faded" light expand="md">
            <NavbarBrand>
            <h1><Badge color="secondary">Skatepark</Badge></h1>
            </NavbarBrand>
            <Nav>
                <NavItem>
                    <Button onClick={props.clickLogout}>Logout</Button>
                </NavItem>
            </Nav>

        </Navbar>
    )
}

export default Navigate;