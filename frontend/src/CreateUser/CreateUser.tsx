import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

export function CreateUser() {

  const [user, setUser] = useState<any>();

  useEffect(() => {fetch("http://localhost:3001/users/").then(response => response.json()).then(data => setUser(data));}, []);      

  const images: JSX.Element[] = [];

  return (   
    <form>
        <label>
            Name: <input type="text" name="name"/>
        </label>
        <label>
            Username: <input type="text" name="username"/>
        </label>
        <label>
            Email: <input type="text" name="email"/>
        </label>
        <label>
            Cover Image: <input type="text" name="coverImageUrl"/>
        </label>
        <label>
            Profile Image: <input type="text" name="profileImageUrl"/>
        </label>

        <button type="submit">Submit</button>

    </form>
  );
}
