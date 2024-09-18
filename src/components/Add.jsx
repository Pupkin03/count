import { useState } from "react"


const Add = () => {
const [count, setCount] = useState(0)

  return (
    
    <div>
        <h1>Count: {count}</h1>
        
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setCount(count + 1)}>increment</button>
    </div>

  )
}

export default Add