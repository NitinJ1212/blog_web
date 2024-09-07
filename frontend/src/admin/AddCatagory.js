import React, { useState,useEffect } from 'react'
import { addcatagory, getcatagory } from '../api/webapi'

const AddCatagory = () => {
    
    const [catagory,setCatagory]=useState()
    const [datacatagory,setdatacatagory]=useState()
    const [msg,setMsg]=useState("Category Fild Required")


    
  const getdatya  = async()=>{
    getcatagory().then((data)=>{
        console.log(data?.allcatagory);
        setdatacatagory(data?.allcatagory)
    
    })
  }
    const handelrigester =async()=>{
    if(!catagory){
setMsg("Category Fild Required")
return
    }
    const data ={catagory}
  const res= await addcatagory(data)
  console.log(res);
  if(res?.msg==='Category added successfully'){
 console.log(res?.msg===true);
 alert("Category added successfully")
    getdatya()
    
 
    
  }



}
useEffect(()=>{
    getdatya()},

[])
  return (<>

  <div>
  <div className='my-4'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Catagory Name</label>
    <input type="text" class="form-control"
onChange={(e)=>setCatagory(e.target.value)}
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">{!catagory?msg:""}</div>
  </div>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button class="btn btn-primary"  onClick={handelrigester}>Add New Catagory</button>
</div>
 
   
   <table class="table">



  <thead>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">Catagory Name</th>
      <th scope="col">Acation</th>
 
    </tr>
  </thead>
  <tbody>
    {datacatagory && datacatagory?.map((itm,idx)=>{
        return(<>
         <tr>
      <th scope="row">{idx+1}</th>
      <td>{itm.catagory}</td>
      
      <td><button>Delete</button>
      <button className="mx-2">Edit</button>
      </td>
    </tr>
        </>)
    })}
   
    
    
  </tbody>
</table>
</div>

  </>
   
  )
}

export default AddCatagory