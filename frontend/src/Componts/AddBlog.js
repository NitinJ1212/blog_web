
import React, { useState } from 'react'
import { addblog, register } from '../api/webapi'
import { Link } from 'react-router-dom'
const AddBlog = () => {
const [title,settitle]=useState()
const [desscription,setdesscription]=useState()
const [category,setcategory]=useState()
const handelrigester =async()=>{
    
const data ={title,desscription,category}
  const res= await addblog(data)
  if(res?.msg===true){
   console.log(res);
  }
  console.log(res);
}

  return (
  <>
  <div className='container'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="email" class="form-control"
    onChange={(e)=>settitle(e.target.value)}
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">describedby</label>
    <input type="text" class="form-control" 
     onChange={(e)=>setcategory(e.target.value)}
    id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <textarea type="text" class="form-control" cols={7} rows={10}
     onChange={(e)=>setdesscription(e.target.value)}
    id="exampleInputPassword1"/>
  </div>
  
  <button  class="btn btn-primary" onClick={handelrigester}>Submit</button>
</div>

  </>
  )
}

export default AddBlog
