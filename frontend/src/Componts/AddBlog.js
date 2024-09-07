
import React, { useState } from 'react'
import { addblog, register } from '../api/webapi'
import { Link } from 'react-router-dom'
import axios from 'axios';
const AddBlog = () => {
  const [title, settitle] = useState();
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    part: "",
    category: "",
    language: "",
    description: ""
  });
  const [desscription, setdesscription] = useState()
  const [category, setcategory] = useState()
  const handelrigester = async () => {

    const data = { title, desscription, category }
    const res = await addblog(data)
    if (res?.msg === true) {
      console.log(res);
    }
    console.log(res);
  }

  const valid_token = localStorage.getItem("token");
  console.log(valid_token, "fffffffffffffff")
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setData({ ...data, title: value })
    } else if (name === "subtitle") {
      setData({ ...data, subtitle: value })
    } else if (name === "description") {
      setData({ ...data, description: value })
    } else if (name === "part") {
      setData({ ...data, part: value })
    } else if (name === "language") {
      setData({ ...data, language: value })
    } else {
      setData({ ...data, category: value })
    }
  }
  const handleSubmitBlog = async (e) => {
    e.preventDefault();
    if (data.title.length === 0 || data.subtitle.length === 0 || data.part.length === 0 || data.category.length === 0 || data.language.length === 0 || data.description.length === 0) {
      alert("All field are mandatory")
    } else {
      try {
        const result = await addblog(data)
        // const result = await axios.post(`${process.env.REACT_APP_API_BASE_URL}blogapi/addblog`, data);

        console.log(result, "result:::::::::")
        if (result.status) {
          console.log(result, "result:::::::::")
          alert("Blog added successfully")
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      <div className='container'>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Title</label>
          <input type="email" className="form-control"
            onChange={handleChange}
            value={data.title}
            name='title'
            id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Sub Title</label>
          <input type="subtitle" className="form-control"
            onChange={handleChange}
            value={data.subtitle}
            name='subtitle'
            id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Part</label>
          <input type="email" className="form-control"
            onChange={handleChange}
            value={data.part}
            name='part'
            id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <select className="form-select" onChange={handleChange}
            value={data.category} name='category' aria-label="Disabled select example" >
            <option selected>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="mb-3">
          <select onChange={handleChange}
            value={data.language} name='language' className="form-select" aria-label="Disabled select example" >
            <option selected>Language</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        {/* <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Description</label>
          <input type="text" className="form-control"
            onChange={handleChange}
            value={data.description}
            id="exampleInputPassword1" />
        </div> */}
        <div className="mb-3">
          <label for="exampleInputPassword1" name='description' className="form-label">Description</label>
          <textarea type="text" className="form-control" cols={7} rows={10}
            onChange={handleChange}
            value={data.description}
            name='description'
            id="exampleInputPassword1" />
        </div>

        <button className="btn btn-primary" onClick={handleSubmitBlog}>Submit</button>
      </div>

    </>
  )
}

export default AddBlog
