import React from "react";
function Count({text,val}){
    console.log("---count---");
    return(
        <React.Fragment>
            {text} - {val}
        </React.Fragment>
    )
}
export default React.memo(Count);