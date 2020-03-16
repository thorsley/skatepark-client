import React, {useState, useEffect} from 'react';
import {
    Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Table,Col
  } from 'reactstrap';
  import APIURL from '../helpers/environment'
  const CreatedParkTable = (props) =>{

    //creates the delete function for the parks 
      const deleteskatePark=(skatepark) =>{
          fetch(`$(APIURL)/created/parks/${skatepark.id}`,{
              method:'DELETE',
              headers: new Headers({
                  'Content-Type': 'application/json',
                  'Authorization' :props.token
              })
          })
          .then(() => props.fetchSkatepark())
        
      }
      //maps over the parks table in pg admin and displays in a table. 
      const skateparkMapper = ()=>{
          return props.userParks.map(( skatepark, index) =>{
              return(
                
                <Card key={index} className="text-center" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <Col sm="12" md={{ size: 6, offset: 3 }}> 
                  <CardBody sm="12" md={{ size: 6, offset: 3 }}>
                  <h4>Spot Name</h4>
                  <hr/>
                  <CardText>{skatepark.nameOfPark}</CardText>
                  <h4>Address</h4>
                  <CardText>{skatepark.locationOfPark}</CardText>
                  <h4>Hours</h4>
                  <CardText>{skatepark.hoursOfPark}</CardText>
                  <h4>Rating</h4>
                  <CardText>{skatepark.ratingOfPark}</CardText>
                  <h4>Comments</h4>
                  <CardText>{skatepark.commentsOfPark}</CardText>
                  
                  <CardText>
                  <Button color="warning" onClick={()=>{props.editUpdateSkatepark(skatepark); props.updateOn()}}>Update</Button>
                                        
                  <Button color="danger" onClick={() => {deleteskatePark(skatepark)}}>Delete </Button>
                  </CardText>
            </CardBody>
            </Col>
            </Card>
           
              )
          })
      }
            return(
                <Col sm="12" md={{ size: 6, offset: 3 }}> 
           <Card className="text-center" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
           <CardBody>
                    {skateparkMapper()}
                </CardBody>
                </Card>
                </Col> 
      )
            }

  export default CreatedParkTable;