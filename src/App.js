import React, { useState } from "react"

function App() {
const [count, setCount] = useState(0)

function adjustCount(amount) {
  setCount(currentCount => {
    return currentCount + amount
  })
}

  return(
    <>
      <div>Counter App</div>
      <div>{count}</div>
      <button onClick={() => adjustCount(1)}>Add</button>
      <button onClick={() => adjustCount(- 1)} disabled={count === 0}>Minus</button>
      <button onClick={() => setCount(0)} disabled={count === 0}>Reset</button>
    </>
  )
}

export default App