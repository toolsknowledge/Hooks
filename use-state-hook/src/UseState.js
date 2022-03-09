import React, { useEffect, useState } from "react";

function UseState(){
    const arr = useState("Hello");
    const [data,setData] = arr;
    

    useEffect(()=>{
        setData("Welcome");
    },[])
    
    
    const myFun = ()=>{
        //setData("ReactJS");
    
        setData(x=>{
            return x+"Hello"   
        });
    };

    
    return(
        <React.Fragment>
            {data}
            <button onClick={myFun}>Click Me</button>
        </React.Fragment>
    )
}

export default UseState;