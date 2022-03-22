import React from "react";
import useComp from "../hooks/useComp";
function Comp2(){
    const [count,increment,decrement,reset]  = useComp(10,10);
    return(
        <React.Fragment>
            <h2>Count - {count}</h2>
            <button onClick={increment}>Increament</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </React.Fragment>
    )
}
export default Comp2;