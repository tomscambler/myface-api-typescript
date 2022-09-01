import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { useNavigate } from 'react-router-dom';

export function CreateUser() {

  const navigate = useNavigate();

  const [name, setName] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [coverImageUrl, setCoverImageUrl] = useState<string>();    
  const [profileImageUrl, setProfileImageUrl] = useState<string>();
    
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetch('http://localhost:3001/users/create/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, username, email, coverImageUrl, profileImageUrl})
    })
    .then( (response) => {
      if(response.ok){
        navigate('/users/');
      }
    } );
  }

  return (

    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" name="name" onChange={(event) => setName(event.target.value)}/>
        </div>
        <div>
            <label>Username:</label>
            <input type="text" name="username" onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" name="email" onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div>
            <label>Cover Image:</label>
            <input type="text" name="coverImageUrl" onChange={(event) => setCoverImageUrl(event.target.value)}/>
        </div>
        <div>
            <label>Profile Image:</label>
            <input type="text" name="profileImageUrl" onChange={(event) => setProfileImageUrl(event.target.value)}/>
        </div>

        <button type="submit">Submit</button>
    </form>
  );
}
