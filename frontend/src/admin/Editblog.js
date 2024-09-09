import React, { useEffect, useState } from 'react'
import HomePageCard from '../Componts/HomePageCard'
import { allblog } from '../api/webapi'

const Editblog = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const dt = await allblog("all");
    setData(dt?.allblog)
    console.log(dt?.allblog);
  }



  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr className='edit_blog_table_header'>
            <th scope="col">Sr No.</th>
            <th scope="col">Blog Name</th>
            <th scope="col">Title</th>
            <th scope="col">Sub Title</th>
            <th scope="col">Sub Part</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data?.map((itm, idx) => {
            return (<>
              <tr>
                <th scope="row">{idx + 1}</th>
                <td>{itm.title}</td>
                <td scope="col">Title</td>
                <td scope="col">Title</td>
                <td scope="col">Title</td>
                <td><button className='btn btn-danger'>Delete</button>
                  <button className="mx-2 btn btn-success" >Edit</button>
                </td>
              </tr>
            </>)
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Editblog