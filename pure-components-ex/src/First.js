import React from "react";
import Second from "./Second";
class First extends React.Component{
    constructor(){
        super();
        this.state = {
            num : 1
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                num : Math.random()
            })
        },1000);
    }


    render(){
        return(
            <Second key1={this.state.num}></Second>
        )
    }
}
export default First;