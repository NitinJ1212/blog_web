import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { oneblog } from '../api/webapi';

const Blogid = () => {


  var token = localStorage.getItem("token")


    let { id } = useParams();

    const [data, setData] = useState()
    useEffect(() => {
      fetchData();
    }, [])

    const fetchData = async () => {
      console.log(id);
      const dt = await oneblog(id);
      setData(dt?.allblog)
      console.log(dt?.allblog?.comments?.map((comment) => comment.user.username)); 
    }

  return (
  <>
  <div className='container'>

  
  <div class="row row-cols-1 row-cols-md-1 g-4 my-4">
  <div class="col">
    <div class="card">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{data && data?.title}</h5>
        <p class="card-text">{data && data?.description}</p>
      </div>
      <div className='d-flex'>
<div>
&#10084; {data?.likes.length}
</div>
<div className='ms-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
</svg> {data?.comments?.map((itm)=>{
  console.log(itm)
  return(<>
  <p>
    {itm.text} <br/> comment by :- {itm.user.username}
  </p>




  </>)

})}


</div>
    </div>
    </div>
  </div>


 
</div>
</div>
  </>
  )
}

export default Blogid