import React, { useState } from 'react'
import { login } from '../api/webapi'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
const [username,setusername]=useState()
const [password,setpassword]=useState()
const [email,setemail]=useState()
const handelrigester =async()=>{
const data ={password,email}
  const res= await login(data)
  if(res?.msg===true){
    localStorage.setItem('token', JSON.stringify(res.token));
    alert("Uesr Login successfully")
    window.location.href="/blog"

}
  console.log(res);
}

  return (
  <>
  <div className='container'>
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

  
  <button  class="btn btn-primary" onClick={handelrigester}>Submit</button>
</div>
  
  </>
  )
}

export default Login