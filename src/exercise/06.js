// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputUsername = React.useRef(null);
  const [username, setUsername] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(username);
  }

  const handleChange = (event) => {
    const { value } = event.target;
    setUsername(value.toLowerCase());
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            id="username" 
            type="text" 
            ref={inputUsername} 
            onChange={handleChange} 
            value={username}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
