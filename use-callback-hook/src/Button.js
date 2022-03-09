import React from "react";

function Button({children,handleClick}){
    console.log("---Button---", children);
    return(
        <React.Fragment>
           <button onClick={handleClick}>{children}</button>
        </React.Fragment>
    )
}

export default React.memo(Button);