import React, { useState } from 'react'
import { Link, json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Empcreate() {
  const[change,setChange]=useState({ id: "", name: "", email: " ", phone: " ", active: true})
  const[validate,setValidate]=useState(false)
  const navigate=useNavigate();
 
  const HandleSubmit=(e)=>{
    e.preventDefault();
    const empdata = {
            name: change.name,
            email: change.email,
            phone: change.phone,
            
        }
        axios.post("http://localhost:8000/employee",empdata)
        .then(res=>{
          alert('your response saved')
          navigate('/')
        })
        .catch(error=>{
          console.log("their is some error to save data"+error);
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
                      {change.name.length === 0 && validate && <span className="text-danger">Enter the Name</span>}

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

export default Empcreate
