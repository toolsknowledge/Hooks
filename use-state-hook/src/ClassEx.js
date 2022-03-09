import React,{ Component } from "react";

class ClassEx extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    };

    componentDidMount(){
        document.title = `You clicked ${this.state.count} times !`;
        const timer = setInterval(()=>{
            console.log("Hello");
        },1000);
    }

    componentDidUpdate(){
        document.title = `You clicked ${this.state.count} times !`;
    }

    render(){
        return(
            <React.Fragment>
                <button onClick={()=> this.setState({count:this.state.count+1})}>clicked {this.state.count} times</button>
            </React.Fragment>
        )
    }

    componentWillUnmount(){
        //clearInterval(timer);
    }

}

export default ClassEx;