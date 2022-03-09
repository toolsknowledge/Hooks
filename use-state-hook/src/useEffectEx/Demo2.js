import React, { useEffect, useState } from "react";
function Demo2(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");
    useEffect(()=>{
        console.log("Hello");
        document.title = `Count...${count}`
    },[count]);
    return(
        <React.Fragment>
            <p>Count....{count}</p>
            <br></br>
            <input type="text" value={name} onChange={event=>setName(event.target.value)}></input>
            <br></br>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </React.Fragment>
    )
}

export default Demo2;