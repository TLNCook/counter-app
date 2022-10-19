import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>add 1</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>minus 1</button>
      <button onClick={() => setCount(0)} disabled={count === 0}>reset</button>
    </>

  )
}
export default App