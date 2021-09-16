// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box ({ size, style, ...otherProps }) {
  let className = size ? `box--${size}` : '';
  return (
      <div className={`box ${className}`} style={{ fontStyle: 'italic' , ...style }} {...otherProps}/>
  );
}

const smallBoxStyles = { backgroundColor: 'lightblue' };
const mediumBoxStyles = { backgroundColor: 'pink' };
const largeBoxStyles = { backgroundColor: 'orange' }

const smallBox = <Box size='small' style={smallBoxStyles}>small lightblue box</Box>
const mediumBox = <Box size='medium' style={mediumBoxStyles}>medium pink box</Box>
const largeBox = <Box size='large' style={largeBoxStyles}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
