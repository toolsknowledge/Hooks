import React,{useRef} from "react";

function UseRef(){
    
    const uname = useRef();
    
    const myFun = ()=>{
        console.log(uname.current.value);
    }


    return(
        <React.Fragment>
            <input type="text" ref={uname}></input>
            <button onClick={myFun}>Click Me</button>
        </React.Fragment>
    )
}

export default UseRef;