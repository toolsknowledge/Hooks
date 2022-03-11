import logo from './logo.svg';
import './App.css';
import React,{Profiler} from "react";
import Child from "./Child";
function App() {

  const my_fun = (id,phase,startTime,endTime,param1,param2,param3)=>{
      console.log(id);
      console.log(phase);
      console.log(startTime);
      console.log(endTime);
  }


  return (
    <div className="App">
        <Profiler id="child" onRender={my_fun}>
            <Child key1={"welcome to profiler concept"}></Child>
        </Profiler>
    </div>
  );
}

export default App;
