import React, { useState } from "react"

function App() {
const [count, setCount] = useState(0)

  return(
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>Minus</button>
      <button onClick={() => setCount(0)} disabled={count === 0}>Reset</button>
    </>
  )
}

export default App