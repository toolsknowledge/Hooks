import React from "react";
import Product from "./model/product";
import axios from "axios";
import url from "./common/urls";
interface IState{
    products:Product[]
}
interface IProps{}
class GetEx extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            products : []
        }
    }
    componentDidMount(){
        axios.get(url).then((posRes:any)=>{
            const { data } = posRes;
            this.setState({
                products : data
            })
        },(errRes:any)=>{
            console.log(errRes);
        })
    }
    render(): React.ReactNode {
        return(
            <React.Fragment>
                <table
                       cellPadding={10}
                       cellSpacing={10}>
                    <tr>
                        <th>sno</th>
                        <th>_id</th>
                        <th>name</th>
                        <th>brand</th>
                        <th>price</th>
                        <th>rating</th>
                        <th>noOfReviews</th>
                        <th>image</th>
                    </tr>
                    {this.state.products.map((element:Product,index:number)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element._id}</td>
                            <td>{element.name}</td>
                            <td>{element.brand}</td>
                            <td>{element.price}</td>
                            <td>{element.rating}</td>
                            <td>{element.noOfReviews}</td>
                            <td><img width={100} src={element.image}></img></td>
                        </tr>
                    ))}
                </table>
            </React.Fragment>
        )
    }
}
export default GetEx;