import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {PostList} from './PostList/PostList'


function App() {

  return (
    <div className="App">
      <h1>My Face</h1>
      <main>
        <PostList/>
      </main>
    </div>
  )
    }

export default App
