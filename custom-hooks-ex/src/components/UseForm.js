import React,{useState} from "react";
import useInput from "../hooks/useInput";
function UseForm(){
    
    


    const [uname,unameObj,resetUname] = useInput("");
    const [upwd,upwdObj,resetUpwd] = useInput("");



    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`${uname}.....${upwd}`);
        resetUname();
        resetUpwd();
    };
    
    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input type="text" name="uname" {...unameObj} ></input>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="upwd" {...upwdObj} ></input>
                </div>

                <input type="submit"></input>
            </form>
        </React.Fragment>
    )
}
export default UseForm;