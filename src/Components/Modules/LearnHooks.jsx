import React, { useState, useRef } from "react";
import { useEffect } from "react";

const LearnHooks = () => {
    const btnRef = useRef();
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <button ref={btnRef} style={{display: "none"}} onClick={() => setCount
        ((prev) => prev + 1)}>Add Count</button>
        <br />
        <br/>

        <button onClick={() => {
           // btnRef.current.click()
           btnRef.current.style.display = "block"
           
            }}>Trigger Count</button>
    </div>
  );
};



export default LearnHooks;