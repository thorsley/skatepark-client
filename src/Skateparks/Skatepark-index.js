import React, {useState, useEffect} from 'react';


import UserParks from './UserSkateparks';
import CreatedParkTable from './Createdparkcard';
import SkateparkEdits from './SkateparkEdit'
import APIURL from '../helpers/environment'
import styles from './css files/skateindex.css';



const SkateparkIndex = (props) =>{
    const [userParks, setuserParks] = useState([]);
    const [updateActive, setUpdateActive]=useState(false);
    const [skateparkToUpdate,setSkateparkToUpdate]= useState({});
    const fetchuserParks = () =>{
        fetch(`${APIURL}/created/parks`, {
            method:'GET',
            headers: new Headers ({
                'Content-Type':'application/json',
                'Authorization': props.token
            })
        }).then ((res)=> res.json())
         .then((logData)=>{
        setuserParks(logData)
        console.log(logData);
    })

    }

    useEffect(() =>{
        fetchuserParks();
    },[])
    const editUpdateSkatepark = (skatepark)=>{
        setSkateparkToUpdate(skatepark);
        console.log(skatepark);
    }
    const updateOn =() =>{
        setUpdateActive(true);
    }
    const updateOff=()=>{
        setUpdateActive(false);
    }

    return(
        <div className="backimg">
       <div>
           {/* <SkateDropdown/>  */}
           <br/>
           <br/>
           <br/>
           <UserParks fetchuserParks={fetchuserParks} token={props.token} />
           <br/>
           <br/>
           <CreatedParkTable userParks={userParks} fetchuserParks={fetchuserParks} editUpdateSkatepark={editUpdateSkatepark} updateOn={updateOn}  token={props.token}/>
       </div>
       {updateActive ? <SkateparkEdits
       skateparkToUpdate={skateparkToUpdate}
       updateOff={updateOff} token={props.token} fetchuserParks={fetchuserParks}/>:<></>}
       </div>
    )
}

export default SkateparkIndex;