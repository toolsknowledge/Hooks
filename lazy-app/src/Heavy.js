import React, { Component } from "react";
class Heavy extends Component{
    constructor(){
        super();
        this.state = {
            arr:[]
        }
    }
    componentDidMount(){
        fetch("https://www.w3schools.com/angular/customers.php").then(res=>res.json()).then((posRes)=>{
            const {records} = posRes;
            this.setState({arr:records})
        },(errRes)=>{
            console.log(errRes);
        })
    }
    render(){
        return(
            <React.Fragment>
                <table border="1"
                       cellPadding="10px"
                       cellSpacing="10px"
                       align="center">
                    <tr>
                        <th>SNO</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>

                    {this.state.arr.map((element,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.Name}</td>
                            <td>{element.City}</td>
                            <td>{element.Country}</td>
                        </tr>
                    ))}

                </table>
            </React.Fragment>
        )
    }
};

export default Heavy;