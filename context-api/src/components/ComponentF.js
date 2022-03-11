import React,{useContext} from "react";
import {NameContext,AnotherContext} from "../App";

function ComponentF(){
   
    // return(
    //     <React.Fragment>
    //             <NameContext.Consumer>
    //                     {
    //                         data => {
    //                             return(
    //                                 <AnotherContext.Consumer>
    //                                     {
    //                                         another=>{
    //                                             return(
    //                                                 <div>{data} .... {another}</div>
    //                                             )
    //                                         }
    //                                     }
    //                                 </AnotherContext.Consumer>
    //                             )
    //                         }
    //                     }
    //             </NameContext.Consumer>
    //     </React.Fragment>
    // )


    const name = useContext(NameContext);
    const {nameX,nameY} = useContext(AnotherContext);
    return(
        <React.Fragment>
            {name}......{nameX}....{nameY}
        </React.Fragment>
    )












}

export default ComponentF;