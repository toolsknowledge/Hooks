import React from "react";

function Title(){
    console.log("---Title---");
    return(
        <React.Fragment>
            <h2>useCallBack Hook</h2>
        </React.Fragment>
    )
}

export default React.memo(Title);