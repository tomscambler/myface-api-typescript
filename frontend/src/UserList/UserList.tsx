import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

export function UserList() {

  const [myUsers, setMyUsers] = useState<any>();

  useEffect(() => {fetch("http://localhost:3001/users/").then(response => response.json()).then(data => setMyUsers(data));}, []);      

  const images: JSX.Element[] = [];

  for (var i in myUsers?.results){

    images.push(

      <div className = "post" key={myUsers?.results[i].id}>

        <h2>{myUsers?.results[i].name}</h2>
        <img src = {myUsers?.results[i].profileImageUrl}></img>
        <p>Posted by: {myUsers?.results[i].username}</p>

      </div>
    )
  }

  return (   
    <div className="image-menu">        
        {images}
    </div>
  );
}
