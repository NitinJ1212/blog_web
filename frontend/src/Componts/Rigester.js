import React, { useState } from 'react'
import { register } from '../api/webapi'
import { Link } from 'react-router-dom'
const Rigester = () => {
const [username,setusername]=useState()
const [password,setpassword]=useState()
const [email,setemail]=useState()
const handelrigester =async()=>{
const data ={username,password,email}
  const res= await register(data)
  if(res?.msg===true){
    alert("Uesr Resgister successfully")
  }
  console.log(res);
}

  return (
  <>
  <div className='container mb-5'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control"
    onChange={(e)=>setemail(e.target.value)}
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" 
     onChange={(e)=>setpassword(e.target.value)}
    id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" class="form-control"
     onChange={(e)=>setusername(e.target.value)}
    id="exampleInputPassword1"/>
  </div>
  
  <button  class="btn btn-primary" onClick={handelrigester}>Submit</button>
  <div className='my-3'>

  <Link to="/login">you are allready Register then Login</Link>
  </div>
</div>
 
  </>
  )
}

export default Rigester