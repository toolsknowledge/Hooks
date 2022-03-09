import React,{useCallback, useState} from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function Parent(){
    const [age,setAge] = useState(30);
    const [sal,setSal] = useState(50000);

    const incAge = useCallback(()=>{
        setAge(age+1);
    },[age]);

    const incSal = useCallback(()=>{
        setSal(sal+1000);
    },[sal])

    return(
        <React.Fragment>
            <Title />
            <Count text={"Age"} val={age}></Count> <br></br>
            <Button handleClick={incAge}>Inc Age</Button> <br></br>
            <Count text={"Sal"} val={sal}></Count><br></br>
            <Button handleClick={incSal}>Inc Sal</Button>
        </React.Fragment>
    )



}
export default Parent;