import React, {useState} from 'react';
import {Form, FormGroup,Label ,Input, Button} from 'reactstrap';
import APIURL from '../helpers/environment'
// components for signing up for website.
const Enlist = (props) =>{
const [firstName, setFirstName] = useState('');
const [lastName, setlastName]= useState('');
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');
const handleSubmit = (event)=>{
    event.preventDefault();
    fetch(`$(APIURL)/sign/signup`,{
        method: 'POST',
        body: JSON.stringify({user:{firstName:firstName, lastName: lastName, email:email, password:password}}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        (response)=> response.json()
    ).then((data)=>{
        props.updateToken(data.sessionToken)
    })
}
return(
<div>
    <h2>Sign Up</h2>
<Form onSubmit={handleSubmit}>
    <FormGroup>
        <Label htmlFor="firstName"> First Name</Label>
        <Input onChange={(e)=>setFirstName(e.target.value)} name="firstname"  placeholder="Enter First Name" value={firstName} required="required" />
    </FormGroup>
    <FormGroup>
    <Label htmlFor="lastName"> Last Name</Label>
        <Input onChange={(e) => setlastName(e.target.value)} name="lastName" value={lastName}  placeholder="Enter Last Name"/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="email"> Email</Label>
    <Input onChange={(e) => setEmail (e.target.value)} name="email"  placeholder="example@example.com" value={email}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="password"> Password</Label>
    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}  placeholder="Enter Password"/>
    </FormGroup>
    <Button type="submit" >Signup</Button>
</Form>
</div>
)

}
export default Enlist;