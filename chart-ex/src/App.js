import logo from './logo.svg';
import './App.css';
import { Bar,Line,Pie } from "react-chartjs-2";
import { useEffect, useState } from 'react';

function App() {

  const [arr,setArr] = useState([2,1,5,3,2,7]);

  useEffect(()=>{
      
  },[]);


  return (
    <div>
      <Bar width={400}
              height={600}
              options={{
                maintainAspectRatio:false
              }}
              data={{
                 labels:["Label1","Label2","Label3","Label4","Label5"],
                 datasets:[{
                    label:"# of Votes",
                    data:[5,7,9,11,13],
                    backgroundColor: ['blue','yellow','pink','orange','salmon'],
                    borderColor: ["red","blue","green","red","green"],
                    borderWidth: 2
                 },
                 {
                  label:"Quantity",
                  data:arr,
                  backgroundColor: ['blue','yellow','pink','orange','salmon'],
                  borderColor: ["red","blue","green","red","green"],
                  borderWidth: 2
               }]
              }}>

        </Bar>
        </div>























  );
}

export default App;
