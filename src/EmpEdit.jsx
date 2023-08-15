import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'

function EmpEdit() {
     const[change,setChange]=useState({})
     const[validate,setValidate]=useState(false)
    
    const param=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
    axios.get("http://localhost:8000/employee/"+param.empid)   
    .then((res)=>{
        setChange(res.data)
    })
    .catch((err)=>{
        console.log("your error is "+err)
    })
    },[param.empid])
    const HandleSubmit=(e)=>{
        e.preventDefault()
        const obj={
            name:change.name,
            email:change.email,
            phone:change.phone
        }
        console.log(obj)
       
        axios.put("http://localhost:8000/employee/"+param.empid,obj)
        .then((res)=>{
            alert("your data is saved")
            navigate('/')
            
        })
    }
  return (
    <div>
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={HandleSubmit}>
          <div className="card" style={{ 'textAlign': 'left' }}>
            <div className="card-title">
              <h2>Employee Create</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>ID</label>
                    <input value={change.id} disabled="disabled" onChange={(e) => setChange({ ...change, id: e.target.value })} className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" value={change.name} onMouseDown={(e) => setValidate(true)} onChange={(e) => setChange({ ...change, name: e.target.value })} />
                    {change.name && validate && <span className="text-danger">Enter the Name</span>}

                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" value={change.email} onChange={(e) => setChange({ ...change, email: e.target.value })} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Phone</label>
                    <input className="form-control" value={change.phone} onChange={(e) => setChange({ ...change, phone: e.target.value })} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-check">
                    <input type="checkbox" checked={change.active} className="form-check-input" id="aactive" onChange={(e) => setChange({ ...change, active: e.target.checked })} />
                    <label htmlFor="aactive" className="form-check-label">Is Active</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <button className="btn btn-success" type="submit">Save</button>
                    <Link to="/" className="btn btn-danger">Back</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  )
}

export default EmpEdit
