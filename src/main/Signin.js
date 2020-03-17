import React, {useState} from 'react';
import {
    Form,
    FormGroup, 
    Label,
    Input,
    Button
} from 'reactstrap';
import styles from'./signin.css'
//import Signup from './Signup';
import APIURL from '../helpers/environment'

const Signin =(props)=> {
    const [email, setEmail]=useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) =>{
        event.preventDefault();
        fetch (`${APIURL}/sign/signin`, {
            method: 'POST',
            body:JSON.stringify({user:{email:email,password:password}}),
            headers: new Headers({
                'Content-Type':'applicaion/json'
            })
        }).then(
            (response) => response.json()
        ).then((data)=>{
            props.updateToken(data.sessionToken);
        })
    }
    return(
        <div >
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor = "email">Email </Label>
                    <Input autoComplete="off" onChange={(e) => setEmail(e.target.value)} name="email"   type="email"placeholder="example@example.com" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = "password">Password</Label>
                    <Input onChange={(e)=> setPassword(e.target.value)} type="password" name="password"placeholder="Enter Password"/>
                </FormGroup>
                <Button className="loginbtn"style={{backgroundColor: '#ffd500'}} type="submit">Login</Button>
            </Form>
        </div>
    )

}

export default Signin 