import React, {useState} from "react";
import useCounter from "../hooks/useCounter";
function DocumentTitleTwo(){
    const [count,setCount] = useState(0);

    useCounter(count);

    return(
        <React.Fragment>
            <button onClick={()=> setCount(count+1)}>Count - {count}</button>
        </React.Fragment>
    )
}
export default DocumentTitleTwo;