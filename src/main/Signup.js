import React, {useState} from 'react';
import {
    Container, Row, Col, Button, Modal, ModalHeader, ModalBody, 
}from 'reactstrap';

import Signin from './Signin';
import Enlist from './Enlist';


const Signup = (props) => {
    const {
        buttonLabel,
        className
      } = props;
      const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    return(
        
        <Container>
            <Row>
                <Col  xs="6" sm="4">
                   
                  
                </Col>
                
                <Col xs="6" sm="4">
                    <Signin updateToken={props.updateToken}/>
                    <br/>
                    <div>
      <Button style={{backgroundColor: '#0000FF'}} onClick={toggle}>Sign up</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Sign Up to get started</ModalHeader>
        <ModalBody>
        <Enlist updateToken={props.updateToken}/>
        </ModalBody>
    
      </Modal>
    </div>
                </Col>

            </Row>
           
        </Container>
       
    )
}

export default Signup;