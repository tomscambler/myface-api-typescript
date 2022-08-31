import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Post } from '../../src/models/post.ts'

function App() {

  const [myData, setMyData] = useState<Post>(null);
  let thing = "hi there!"
  useEffect( () => {
    fetch("http://localhost:3001/posts")
    .then(response => response.json())
    .then(data => setMyData(data));
  }, []);

  if(!myData){
    return (<div>Awaiting Data!</div>);
  }
  else{
    return (
      <div>
        {myData}
      </div>
    );
  }



}

export default App
