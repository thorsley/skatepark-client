import React, { useState, useEffect } from 'react';
import {
    Card, CardText, CardBody, CardTitle, CardSubtitle,Button,Input,Col,Row,Form,Label
}from 'reactstrap';
import APIURL from '../helpers/environment'
const UserParks = (props) =>{
    const [name,setName]=useState('');
    const [location,setLocation]=useState('');
    const [hours,setHours]=useState('');
    const [rating,setRating]=useState('');
    const [comments,setComments]=useState('');

    const handleSubmit = (e) => { 
        e.preventDefault();
        fetch(`${APIURL}/created/parks`,{
            method: 'POST',
            body: JSON.stringify({nameOfPark:name, locationOfPark:location,hoursOfPark:hours,ratingOfPark:rating,commentsOfPark:comments}),
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logData)=>{
             console.log(logData);
            setName('');
            setLocation('');
            setHours('');
            setRating('');
            setComments('');
            props.fetchuserParks();
        })
        
    }
    return(
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}> 
            <Form onSubmit={handleSubmit}>
            <Card className="text-center" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardBody>
                    <CardTitle>Add A Skate Spot</CardTitle>
                    <br/>
                    <CardSubtitle>Name</CardSubtitle>
                    <Label htmlFor="nameOfPark"/>
                    <Input name="nameOfPark" value={name} onChange={(e) => setName(e.target.value)}/>
                    
                    <CardSubtitle>Location</CardSubtitle>
                    <Label htmlFor="locationOfPark"/>
                    <Input name="locationOfPark" value={location} onChange={(e) => setLocation(e.target.value)}/>
                    
                    <CardSubtitle>Hours</CardSubtitle>
                    <Label htmlFor="hoursOfPark"/>
                    <Input name="hoursOfPark" value={hours} onChange={(e) => setHours(e.target.value)}/>
                    <CardSubtitle>Rating</CardSubtitle>
                    <Label htmlFor="ratingOfPark"/>
                    <Input name="ratingOfPark" value={rating} onChange={(e) => setRating(e.target.value)}/>
                    <CardSubtitle>Comments</CardSubtitle>
                    <Label htmlFor="commentsOfPark"/>
                    <Input name="commentsOfPark" value={comments} onChange={(e) => setComments(e.target.value)}/>
                    <br/>
                    <Button style={{backgroundColor: '#ffd500'}} type="submit" >Add</Button>
                </CardBody>
            </Card>
            </Form>
            </Col>
        </Row>
    )
}

export default UserParks;