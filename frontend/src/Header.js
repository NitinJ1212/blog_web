import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from './Componts/Slider';
import { useNavigate } from 'react-router-dom'
const Header = (props) => {
  const navigate = useNavigate()
  const logout = async () => {
    localStorage.clear()
    navigate("/")
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ position: "fixed",zIndex:99 ,width:"100vw"}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blog">Blog</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">


              {!props?.loginuser ? <Link class="btn btn-outline-success mx-3" to="/rigester" >Register</Link> :
                <button class="btn btn-outline-success" onClick={logout}>LogOut</button>
              }
            </form>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Header