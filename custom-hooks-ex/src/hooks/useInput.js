import { useState } from "react";
function useInput(data){
    const [value,setValue] = useState(data);

    const reset = ()=>{
        setValue(data);
    }


    const obj = {
        value,
        onChange : e=>{
            setValue(e.target.value)
        }
    };

    return [value,obj,reset];
}
export default useInput;