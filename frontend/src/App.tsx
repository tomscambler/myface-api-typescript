import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import {PostList} from './PostList/PostList'
import {UserList} from './UserList/UserList'
import {CreateUser} from './CreateUser/CreateUser'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {

  return (

    <Router>
      <h1>This is MyFace</h1>

      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          
          <span></span>
          <span></span>
          <span></span>
          
          <ul id="menu">
            <a href="/posts"><li>Posts</li></a>
            <a href="/users"><li>Users</li></a>
          </ul>
        </div>
      </nav>


      <main>

      <Routes>
        <Route path="/posts"
          element={<PostList/>}>
        </Route>
        <Route path="/users"
          element={<UserList/>}>
        </Route>
        <Route path="/createuser"
          element={<CreateUser/>}>
        </Route>

      </Routes>
      </main>

    </Router>
    

  );
  }

export default App
