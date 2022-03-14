import React, { Component } from "react";
interface IState{}
interface IProps{
    key1:string;
    key2:number;
    key3:boolean;
    key4:any;
    key5:any[]
}
class Second extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(): React.ReactNode {
        return(
            <React.Fragment>
                <h6>{this.props.key1}</h6>
                <h6>{this.props.key2}</h6>
                <h6>{JSON.stringify(this.props.key3)}</h6>
                <h6>{JSON.stringify(this.props.key4)}</h6>
                <h6>{JSON.stringify(this.props.key5)}</h6>
            </React.Fragment>
        )
    }
}
export default Second;