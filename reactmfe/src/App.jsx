import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>React Micro-Frontend</h1>
      <div className="card">
        <p>This is a React MFE running on port 4202.</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the React logo to learn more
      </p>
    </>
  )
}

export default App
