import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {PostList} from './PostList/PostList'
import {UserList} from './UserList/UserList'
import {CreateUser} from './CreateUser/CreateUser'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {

  return (
    <Router>
      <h1>This is MyFace</h1>
      <a href="/posts">Posts</a>
      <a href="/users">Users</a>
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

    </Router>

  );
  }

export default App
