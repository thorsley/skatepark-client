import React from 'react';
import {
    Container, Row, Col, Button
}from 'reactstrap';

import Signin from './Signin';
import Enlist from './Enlist';


const Signup = (props) => {
    return(
        <Container>
            <Row>
                <Col  xs="6" sm="4">
                    <Enlist updateToken={props.updateToken}/> 
                  
                </Col>
                
                <Col xs="6" sm="4">
                    <Signin updateToken={props.updateToken}/>
                </Col>
            </Row>
           
        </Container>
    )
}

export default Signup;