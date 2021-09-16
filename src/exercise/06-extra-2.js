// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputUsername = React.useRef(null);
  const [error, setError] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(inputUsername.current.value);
  }

  const handleChange = (event) => {
    const { value } = event.target;
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" ref={inputUsername} onChange={handleChange}/>
        </div>
        {
          error && <div style={{ color: 'red' }} role="alert">{error}</div>
        }
        <button type="submit" disabled={Boolean(error)}>Submit</button>
      </form>
    </>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
