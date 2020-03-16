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
        <Modal isOpen={true}>
        <ModalHeader>update spot</ModalHeader>
        <ModalBody>
            <Form onSubmit={skateparkUpdates}>
                <FormGroup>
                    <Label htmlFor="nameOfPark">edit Name</Label>
                    <Input name="nameOfPark" value ={editName} onChange ={(e)=> setEditName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="locationOfPark">Edit Locataion:</Label>
                    <Input name="locationOfPark" value={editLocation} onChange={(e) => setEditLocation(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="hoursOfPark">Edit hours:</Label>
                    <Input name="hoursOfPark"value={editHours} onChange={(e) => setEditHours(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="ratingOfPark">Edit rating:</Label>
                    <Input name="ratingOfPark" value={editRating} onChange={(e) => setEditRating(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="commentsOfPark">Edit comments:</Label>
                    <Input name="commentsOfPark" value={editComments} onChange={(e) => setEditComments(e.target.value)}/>
                </FormGroup>
        
                
                <Button type="submit">Update</Button>
            </Form>
        </ModalBody>
    </Modal>
    )
}

export default SkateparkEdit;