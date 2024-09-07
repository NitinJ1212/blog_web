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
    setData(dt.allblog)
  }
  return (
    <div>
      {data && <HomePageCard data={data} />}
    </div>
  )
}

export default Editblog