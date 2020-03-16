import React, {useState, useEffect} from 'react';
import Navigate from './main/Navbar'
import './App.css';
import Signup from './main/Signup';
import SkateparkIndex from './Skateparks/Skatepark-index';


function App() {
  const [sessionToken, setSessionToken]=useState('');
    useEffect(()=> {
        if (localStorage.getItem('token')){
            setSessionToken(localStorage.getItem('token'))
        }
    },[])

    const updateToken = (newToken) =>{
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
        console.log(sessionToken);
    }
    const clearToken =()=>{
      localStorage.clear();
      setSessionToken('');
    }

    const protectedViews =() =>{
      return (sessionToken === localStorage.getItem('token') ? <SkateparkIndex token={sessionToken}/>:<Signup updateToken={updateToken}/>)
    }

  return (
    <div>
     <Navigate clickLogout={clearToken}/>
    {protectedViews()}
     
    </div>
  );
}

export default App;
