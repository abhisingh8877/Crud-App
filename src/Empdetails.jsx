import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import { useParams,Link } from 'react-router-dom'

function Empdetails() {
const[details,setDetails]=useState({});
    const params=useParams();
    
    useEffect(()=>{
        
        axios.get(" http://localhost:8000/employee/"+params.empid)
        .then(res=>{
         setDetails(res.data)
        })
        .catch(err=>{
            console.log("their is some error of type"+err)
        })
    },[])
  return (
    <div>
    <div className="card" style={{"textAlign":"left"}}>
         <div className="card-title">
          <h2>Employee Create</h2>

         </div>
         <div className="card-body">
         {details && 
         <div>
      <h2>The Employee is :{details.name}  ({details.id})</h2>
      <h3>Contact Details</h3>
      <h5>Email us :{details.email}</h5>
      <h5>Phone is: {details.phone}</h5>
      <Link className="btn btn-danger" to="/">Back to Listing </Link>
      </div>
     
    }

         </div>
    </div>
  
   
    </div>
  )
}

export default Empdetails
