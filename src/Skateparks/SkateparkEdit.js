import React,{useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../helpers/environment'

const SkateparkEdit =(props)=> {
    const [editName,setEditName]=useState(props.skateparkToUpdate.nameOfPark);
    const [editLocation,setEditLocation]=useState(props.skateparkToUpdate.locationOfPark);
    const [editHours,setEditHours]=useState(props.skateparkToUpdate.hoursOfPark);
    const [editRating,setEditRating]=useState(props.skateparkToUpdate.ratingOfPark);
    const [editComments,setEditComments]=useState(props.skateparkToUpdate.commentsOfPark);
    const skateparkUpdates =(event, skatepark)=>{
    event.preventDefault();
    
    fetch(`${APIURL}/created/parks/${props.skateparkToUpdate.id}`,{
        method:'PUT',
        body: JSON.stringify({ nameOfPark:editName, locationOfPark:editLocation, hoursOfPark:editHours, ratingOfPark:editRating , commentsOfPark:editComments}),
        
        headers:new Headers({
            'Content-Type':'application/json',
            'Authorization':props.token
        })

    }).then((res)=>{
        props.fetchuserParks();
        props.updateOff();
    })
}
    return(
        <Modal  isOpen={true}>
        <ModalHeader  className="names" >Update Spot</ModalHeader>
        <ModalBody >
            <Form onSubmit={skateparkUpdates}>
                <FormGroup>
                    <Label htmlFor="nameOfPark" className="names">Edit Name</Label>
                    <Input autoComplete="off" name="nameOfPark" value ={editName} onChange ={(e)=> setEditName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label className="names" htmlFor="locationOfPark">Edit Locataion:</Label>
                    <Input autoComplete="off" name="locationOfPark" value={editLocation} onChange={(e) => setEditLocation(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label className="names" htmlFor="hoursOfPark">Edit Hours:</Label>
                    <Input autoComplete="off" name="hoursOfPark"value={editHours} onChange={(e) => setEditHours(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label className="names" htmlFor="ratingOfPark">Edit Rating:</Label>
                    <Input autoComplete="off" name="ratingOfPark" value={editRating} onChange={(e) => setEditRating(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label className="names" htmlFor="commentsOfPark">Edit Comments:</Label>
                    <Input autoComplete="off" name="commentsOfPark" value={editComments} onChange={(e) => setEditComments(e.target.value)}/>
                </FormGroup>
        
                
                <Button style={{backgroundColor: '#0f4c75'}} type="submit">Update</Button>
            </Form>
        </ModalBody>
    </Modal>
    )
}

export default SkateparkEdit;