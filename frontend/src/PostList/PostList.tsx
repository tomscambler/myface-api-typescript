import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

export function PostList() {

    const [myData, setMyData] = useState<any>();
  
    useEffect(() => {fetch("http://localhost:3001/posts/").then(response => response.json()).then(data => setMyData(data));}, []);      
  
    const images: JSX.Element[] = []
  
    for (var i in myData.results){
      images.push(
        <div className = "post">
          <h2>{myData.results[i].message}</h2>
          <img src = {myData.results[i].imageUrl}></img>
          <p>Posted by: {myData.results[i].postedBy.username}</p>
        </div>
      )
  
    }
  
    return (   
      <div className="image-menu">        
          {images}
      </div>
  );
    }
