import React from "react";
export default React.memo((props)=>{
    console.log("Child");
    return(
        <React.Fragment>
            <h1>Hello....{props.key1}</h1>
        </React.Fragment>
    )
})