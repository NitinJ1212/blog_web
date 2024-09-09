import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { addcomment, oneblog, userLike } from '../api/webapi';
import { logDOM } from '@testing-library/react';

const Blogid = () => {
  const navigate = useNavigate();
  const user_id = localStorage.getItem("user_id")

  var token = localStorage.getItem("token")
  const [data, setData] = useState()
  const [text, setText] = useState()
  const [checkLike, setlke] = useState()
  const handlecomment = async () => {
    if (!text) {
      return
    }
    const data = { text, id }
    const resdata = await addcomment(data)
    console.log(resdata, "hb jvnfdlkjbvlkjbvlkjbvlkjbvghb");
    if (resdata?.msg === true) {
      alert("Comment on Post")
      setText(" ");
      fetchData();
      return
    }
    if (resdata === undefined) {
      alert("login then comment")
      navigate('/login');
    }


    else {

      alert("SomeThink Worng")
      return
    }

  }

  let { id } = useParams();


  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const dt = await oneblog(id);
    setData(dt)
  }

  const handleLike = async () => {
    const data = { id }
    const resdata = await userLike(data)
    if (resdata?.status === true) {
      alert(resdata?.message)
      fetchData();
      setlke(true)
      return
    }
    if (resdata === undefined) {
      alert("login then comment")
      navigate('/login');
      return
    }


    else {

      alert("SomeThink Worng")
      return
    }

  }

  return (
    <>
      <div className='container'>


        <div class="row row-cols-1 row-cols-md-1 g-4 my-4">
          <div class="col">
            <div class="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sher_Singh_in_Lahore.jpg/584px-Sher_Singh_in_Lahore.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{data && data?.allblog?.title}</h5>
                <p class="card-text">{data && data?.allblog?.description}</p>
              </div>
              <div>

                <input style={{ width: "100px" }} type='text' value={text} onChange={(e) => setText(e.target.value)} /> <button
                  onClick={() => handlecomment()}
                ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                  </svg> </button>
              </div>
              <div className='d-flex'>
                <div onClick={() => handleLike()}>

                  {/* <i className="bi bi-heart-fill"></i>
                  <i className="bi bi-heart"></i> */}
                  {data?.likes?.includes(user_id) ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                  </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16" style={{ cursor: "pointer" }}>
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>} {data?.likes.length}
                </div>
                <div className='ms-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16" style={{ cursor: "pointer" }}>
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />

                  </svg>{data?.comments?.length} {data?.comments?.map((itm) => {
                    return (<>
                      <p>
                        {itm.text} <br /> comment by :- {itm.user.username}
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