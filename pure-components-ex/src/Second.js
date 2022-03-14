import React from "react";
class Second extends React.PureComponent{
    constructor(props){
        super(props);
    }
    
    render(){
        console.log("child.....second component")
        return(
            <React.Fragment>
                {this.props.key1}
            </React.Fragment>
        )
    }
}   
export default Second;