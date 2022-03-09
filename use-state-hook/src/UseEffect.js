//useEffect()
//if presentation rendered successfully, then only this life cycle hook will execute
//in general, we will have the "Asynchronous" Calls in useEffect() hook
//we can change the state in useState() hook
import React,{useEffect, useState} from "react";
function UseEffect(){
    
    const [records,setRecords] = useState([]);


    const myFun = async ()=>{
        const res = await fetch(`https://www.w3schools.com/angular/customers.php`);
        const final = await res.json();
        const {final_records} = final;
        setRecords([...records,final_records]);
    };


    useEffect(()=>{

        myFun();

    },[]);
    
    return(
        <React.Fragment>
                {JSON.stringify(records)}
        </React.Fragment>
    )
}
export default UseEffect;