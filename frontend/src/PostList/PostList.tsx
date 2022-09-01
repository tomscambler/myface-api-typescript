import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { Page } from '../../../src/models/api/page'
import { PostModel } from '../../../src/models/api/postModel'

export function PostList() {

  const [myData, setMyData] = useState<Page<PostModel>>();
  const [like, setLike] = useState<any>(false);

  useEffect(() => {fetch("http://localhost:3001/posts/").then(response => response.json()).then(data => setMyData(data));}, []);      

  const images: JSX.Element[] = [];

  if(myData?.results){

    for (let result of myData.results){
    
      images.push(
  
        <div className = "post" key={result.id}>
  
          <img src = {result.imageUrl}></img>

          <div className = 'posttext'>
              <h2> {result.postedBy.username}</h2>
              <p className = "createdAt"> {result.createdAt.toString().slice(0,10)}</p>
              <p>{result.message}</p>
  
              <form>
                <button onClick={ () => {
                  setLike(true)
                }}>
                  Like
                </button>
              </form>
              
              <button>Dislike</button>
          </div>
          
  
        </div>
      )
    }
  }

  

  return (   
    <div className="image-menu">        
        {images}
    </div>
  );
}
