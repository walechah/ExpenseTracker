import React, { useState } from 'react'

function Counter() {
    const [Count,setCount] = useState(0)
  return (
    <>
        Counter is : {Count};
        <button onClick={()=>{
            setCount(Count + Count);
        }}>Increase count by {Count}</button> 
    </>
  )
}

export default Counter
