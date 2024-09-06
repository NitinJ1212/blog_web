import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Blogid = () => {
  var token = localStorage.getItem("token")
  console.log(token);


  return (
  <>
  <div className='container'>

  
  <div class="row row-cols-1 row-cols-md-2 g-4 my-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>


 
</div>
</div>
  </>
  )
}

export default Blogid