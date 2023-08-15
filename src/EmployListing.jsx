import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
function EmployListing() {
  const[post,setPost]=useState([]);
  useEffect(()=>{
   axios.get("http://localhost:8000/employee")
   .then(Response=>{
    setPost(Response.data)
   })
   .catch(error=>{
    console.log("their is some probelm")
   })
  },[])
  const navigate=useNavigate();
 const  HandleDetails=(id)=>{
   navigate("/employee/detail/"+id)

  }
  const HandleDelete=(id)=>{
    if(window.confirm("are you sure want to delete"))
    {
        axios.delete("  http://localhost:8000/employee/"+id)
        .then(res=>{
            alert('remove succesfully')
            window.location.reload();
        })
        .catch(err=>{
            console(err)
        })
    }
   
  }
  const HandleEdit=(id)=>{
    navigate('/employee/edit/'+id)
    
  }
  return (
    <div className="container">
        <div className="card">
        <div className="card-title">
        <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
        <div>
        <div className="divbtn">
            <Link  to="employee/create" className="btn btn-success">Add New (+)</Link>
            </div>
        </div>
            <table className="table table-bordered">
            <thead className="bg-dark text-white">
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Action</td>
                </tr>
            </thead>
        <tbody>
            {post.length>0 ?
                post.map((item)=>{
                    return(
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                        <a   className="btn btn-success" onClick={()=>HandleEdit(item.id)}>Edit</a>
                        <a  className="btn btn-danger" onClick={()=>HandleDelete(item.id)}>Remove</a>
                        <a   className="btn btn-primary" onClick={()=>HandleDetails(item.id)}>Detail</a>
                        </td>
                    </tr>
                    )
                    
                })
            :null}
        </tbody>
            </table>
        </div>
        </div>
        </div>
  )
}

export default EmployListing
