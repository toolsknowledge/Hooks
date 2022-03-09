import React, { Component } from "react";

class Demo1 extends Component{
    constructor(){
        super();
        this.state = {
            count : 0,
            name : ""
        }
    }

    render(){
        return(
            <React.Fragment>
                 <p>Clicked Button {this.state.count}</p>
                 <br></br>
                 <input type="text"
                        value={this.state.name}
                        onChange={(e)=>{this.setState({name:e.target.value})}}></input>
                 <br></br>
                 <button onClick={()=> this.setState({count : this.state.count+1})}>Click Me</button>
            </React.Fragment>
        )
    }

    componentDidMount(){
        document.title = ` Clicked ${this.state.count} Times !`;    
    }


    componentDidUpdate(prevProps,prevState){
        if(prevState.count != this.state.count){
            console.log("Hello");
            document.title = ` Clicked ${this.state.count} Times !`; 
        }
    }





}

export default Demo1;