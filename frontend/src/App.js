import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './web/Home';
import Header from './Header';
import Bolg from './web/Bolg';
import Rigester from './Componts/Rigester';
import Login from './Componts/Login';
import Blogid from './Componts/Blogid';
import AddBlog from './Componts/AddBlog';
import Adminhomepage from './admin/Adminhomepage';
import Dashbordhome from './admin/Dashbordhome';
import Usermanganment from './admin/Usermanganment';
import Commenttrack from './admin/Commenttrack';
import Editblog from './admin/Editblog';
import Webcontent from './admin/Webcontent';
import Footer from './Footer-Header/Footer';
import Layout from './layout/Layout';

function App() {
  const [loginuser, setloginuser] = useState();

  useEffect(() => {
    const loginuserss = localStorage.getItem('token');
    setloginuser(loginuserss);
    console.log(loginuser?.length);
  }, []);

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            {/* Public Routes */}

            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Bolg />} />
            <Route path="/login" element={<Login />} />
            <Route path="/rigester" element={<Rigester />} />
            <Route path="/readMore/:id" element={<Blogid />} />
            <Route path="/addblog" element={<AddBlog />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<Adminhomepage />}>
              <Route path="dashbordhome" element={<Dashbordhome />} />
              <Route path="usermanganment" element={<Usermanganment />} />
              <Route path="addblog" element={<AddBlog />} />
              <Route path="commenttrack" element={<Commenttrack />} />
              <Route path="webcontent" element={<Webcontent />} />
              <Route path="editblog" element={<Editblog />} />
            </Route>
          </Routes></Layout>
      </Router>
    </>
  );
}

export default App;
