import React from 'react'
import './admin.css'
import { Outlet ,Link,NavLink} from 'react-router-dom'
const Adminhomepage = () => {
    return (
        <div className='col-md-12 row'>
            <div className='col-md-3'>
            <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/admin/dashbordhome" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Dashboard Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/usermanganment" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              User Management
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/addblog" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Add Blog
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/commenttrack" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Comment Track
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/webcontent" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Web Content
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/editblog" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Edit Blog
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/addcatagory" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Edit Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    </div>
            <div className='col-md-8 saidbar-main my-5'>
             <Outlet/>
            </div>


        </div>
    )
}

export default Adminhomepage