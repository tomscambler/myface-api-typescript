import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

export function PostList() {

  const [myData, setMyData] = useState<any>();

  useEffect(() => {fetch("http://localhost:3001/posts/").then(response => response.json()).then(data => setMyData(data));}, []);      

  const images: JSX.Element[] = [];

  for (var i in myData?.results){

    images.push(

      <div className = "post" key={myData?.results[i].id}>

        <img src = {myData?.results[i].imageUrl}></img>
        <div className = 'posttext'>
            <h2> {myData?.results[i].postedBy.username}</h2>
            <p className = "createdAt"> {myData?.results[i].createdAt.slice(0,10)}</p>
            <p>{myData?.results[i].message}</p>
        </div>
        

      </div>
    )
  }

  return (   
    <div className="image-menu">        
        {images}
    </div>
  );
}
