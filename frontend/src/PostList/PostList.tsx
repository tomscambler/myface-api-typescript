import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { Page } from '../../../src/models/api/page'
import { PostModel , PostUserModel} from '../../../src/models/api/postModel'

export function PostList() {

  const [myData, setMyData] = useState<Page<PostModel>>();
  const [post, setPost] = useState<any>();
  const [isLiked, setIsLiked] = useState<boolean>(false);
 
  useEffect(() => {fetch("http://localhost:3001/posts/")
  .then(response => response.json())
  .then(data => setMyData(data));}, []); 

  const handleLike = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`http://localhost:3001/posts/${post}/like/`, {
        method: 'POST',
        headers: {
            'Accept' : 'application/json',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            postId: post
        })
    })
    
    fetch("http://localhost:3001/posts/")
    .then(response => response.json())
    .then(data => setMyData(data));
  }

  const handleDislike = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetch(`http://localhost:3001/posts/${post}/dislike/`, {
        method: 'POST',
        headers: {
            'Accept' : 'application/json',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            postId: post
        })
    })
    fetch("http://localhost:3001/posts/")
    .then(response => response.json())
    .then(data => setMyData(data));
  }

  function changeLikeButton(){
    setIsLiked(isLiked => !isLiked)
  }

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
  
              <form onSubmit={handleLike} onClick={ () => setPost(result.id)}>
                <button type='submit' onClick={() => changeLikeButton() } className = {isLiked ? "isLiked": "normal"}>
                  Like
                </button>
                <div>
                  {result.likedBy.map((like)=>{
                      return <p>{like.name}</p>;
                    }
                  )}
                </div>

              </form>
              
              <form onSubmit={handleDislike} onClick={()=>{setPost(result.id);}}>
                <div className="dislikeButton">
                  <button type='submit'>
                    Dislike
                  </button>
                  <div>
                    {result.dislikedBy.map((dislike)=>{
                        return <p>{dislike.name}</p>;
                      }
                    )}
                  </div>
                </div>

              </form>
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
