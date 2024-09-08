import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { allblog } from '../api/webapi';

const Bolg = () => {
  var token = localStorage.getItem("token")
  const id="23456y7"
  console.log(token);
  const [data,setdata]=useState()
  
  useEffect(()=>{
    
      allblog().then((res)=>setdata(res?.allblog))
      console.log(data,"bbbbbbbbbbbbbbbbbbbbbbbbb");
    },[])

  return (
  <>
  <div className='container'>
  <marquee class="blink">The Sikh history is a rich tapestry of spiritual, cultural, and socio-political evolution that began in the Punjab region of South Asia over five centuries ago. Founded in the 15th century by Guru Nanak Dev Ji, Sikhism emerged as a monotheistic religion advocating for equality, justice, and selfless service to humanity. It challenged the prevailing social inequalities and religious orthodoxy of the time, offering a path of devotion and righteousness. The subsequent nine Sikh Gurus further developed the teachings and the community, emphasizing the principles of humility, bravery, and faith. Under the leadership of the tenth Guru, Guru Gobind Singh Ji, the Khalsa Panth was established in 1699, formalizing the spiritual and martial code for Sikhs, emphasizing both saintly conduct and warrior spirit. Throughout its history, Sikhs have demonstrated resilience and courage, defending their faith and values against oppression while contributing significantly to the cultural and social landscape of India. Today, Sikhism is the world's fifth-largest religion, with millions of adherents around the globe who continue to uphold the ideals of their Gurus.<h1 className='text-center my-4'>
  </h1></marquee>
  <div class="card-group my-3">
    {data && data?.map((itm)=>{
      return(
        <>
          <div class="card mx-2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{itm.title}</h5>
      <p class="card-text">{itm.description}</p>
    </div>
    <div className='d-flex'>
<div>
&#10084; {itm?.likes.length}
</div>
<div className='ms-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
</svg> {itm?.comments?.length}
</div>
    </div>
    <div class="card-footer">
     <Link 
              to={`/readMore/${itm._id}`}
           
            >
             Read More
            </Link>
    </div>
  </div>
        </>
      )
    })}

  
  
</div>


</div>
  </>
  )
}

export default Bolg