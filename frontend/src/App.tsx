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
      <h1>MyFace</h1>
      <Routes>
        <Route path="/posts"
          element={<PostList/>}>
        </Route>
        <Route path="/users"
          element={<UserList/>}>
        </Route>
        <Route path="/users/create"
          element={<CreateUser/>}>
        </Route>
        {/* <Route path="/posts/:postId/like"
          element={<CreateUser/>}>
        </Route>
        <Route path="/posts/:postId/dislike"
          element={<CreateUser/>}>
        </Route> */}
      </Routes>
      </main>

    </Router>
    

  );
  }

export default App
