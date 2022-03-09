import React, { Component } from "react";
import UseMemo from "./UseMemo";

class Comp1 extends Component{
    constructor(){
        super();
        this.state = {
            num : 1
        }
    }

    componentDidMount(){
       setInterval(() => {
        this.setState({
            num: Math.random()
        })
       }, 1000);
    }

    render(){
        return(
            <React.Fragment>
                    <UseMemo key1={this.state.num}></UseMemo>
            </React.Fragment>
        )
    }
}
export default Comp1;

























