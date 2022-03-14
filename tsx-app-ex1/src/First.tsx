import React, { Component } from "react";
import Second from "./Second";
interface IState{
    key1 : string;
    key2 : number;
    key3 : boolean;
    key4 : any;
    key5 : any[]
}
interface IProps{

}
class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            key1 : "Hello",
            key2 : 100,
            key3 : true,
            key4 : {"sub_one":"ReactJS","sub_two":"NodeJS","sub_three":"MongoDB"},
            key5 : [{"p_id":111,"p_name":"p_one","p_cost":10000},
                    {"p_id":222,"p_name":"p_two","p_cost":20000},
                    {"p_id":333,"p_name":"p_three","p_cost":30000},
                    {"p_id":444,"p_name":"p_four","p_cost":40000},
                    {"p_id":555,"p_name":"p_five","p_cost":50000}]
        }
    }
    render(): React.ReactNode {
        return(
            <React.Fragment>
                <h2>First</h2>
                <hr></hr>
                <p>{this.state.key1}</p>
                <p>{this.state.key2}</p>
                <p>{JSON.stringify(this.state.key3)}</p>
                <p>{JSON.stringify(this.state.key4)}</p>
                <p>{JSON.stringify(this.state.key5)}</p>
                <hr></hr>
                <h2>Second</h2>
                <Second key1={this.state.key1}
                        key2={this.state.key2}
                        key3={this.state.key3}
                        key4={this.state.key4}
                        key5={this.state.key5}></Second>
            </React.Fragment>
        )
    }
}
export default First;