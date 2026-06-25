import React from 'react'
import Child from './Child'

const Demo = () => {
  return (
    <div style={{ backgroundColor: 'blue', color: 'white', padding: '20px' }}>
      <h1>Demo Component</h1>
      <p>This is a simple demo component.</p>
      <Child />
    </div>
    
  )
}

export default Demo
