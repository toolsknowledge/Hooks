import React, { useEffect, useState } from "react";
function UseEffect1(){
    const [count,setCount] = useState(0);

    /*
    useEffect(()=>{
        document.title = `You clicked ${count} times !`;
    });    //componentDidMount() and componentDidUpdate()
    */

    /*useEffect(()=>{
        document.title = `You clicked ${count} times !`;
    },[]);          //componentDidMount()
    */

    useEffect(()=>{
        document.title = `You clicked ${count} times !`;
    },[count]);   //componentDidMount() and componentDidUpdate()


    return(
        <React.Fragment>
            <button onClick={()=> setCount(count+1) }>Clicked {count} times !</button>
        </React.Fragment>
    )
}
export default UseEffect1;