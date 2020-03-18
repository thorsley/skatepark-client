import React, { useState,  } from 'react';
import {
    Card, CardBody, CardTitle, CardSubtitle,Button,Input,Col,Row,Form,Label
}from 'reactstrap';
import APIURL from '../helpers/environment'
import styles from './css files/userParks.css'
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
                    <CardSubtitle className="names">Name</CardSubtitle>
                    <Label htmlFor="nameOfPark"/>
                    <Input autoComplete="off" name="nameOfPark" value={name} onChange={(e) => setName(e.target.value)}/>
                    
                    <CardSubtitle className="names">Location</CardSubtitle>
                    <Label htmlFor="locationOfPark"/>
                    <Input autoComplete="off" name="locationOfPark" value={location} onChange={(e) => setLocation(e.target.value)}/>
                    <CardSubtitle className="names">Hours</CardSubtitle>
                    <Label htmlFor="hoursOfPark"/>
                    <Input autoComplete="off" name="hoursOfPark" value={hours} onChange={(e) => setHours(e.target.value)}/>
                    <CardSubtitle className="names">Rating</CardSubtitle>
                    <Label htmlFor="ratingOfPark"/>
                    <Input autoComplete="off" name="ratingOfPark" value={rating} onChange={(e) => setRating(e.target.value)}/>
                    <CardSubtitle className="names">Comments</CardSubtitle>
                    <Label htmlFor="commentsOfPark"/>
                    <Input autoComplete="off" name="commentsOfPark" value={comments} onChange={(e) => setComments(e.target.value)}/>
                    <br/>
                    <Button  style={{backgroundColor: '#ffd500'}} type="submit" >Add</Button>
                </CardBody>
            </Card>
            </Form>
            </Col>
        </Row>
    )
}

export default UserParks;