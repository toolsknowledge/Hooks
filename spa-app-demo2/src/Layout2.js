import React from "react";
import {Link,Outlet} from "react-router-dom";
function Layout2(){
    return(
        <React.Fragment>
            <Link to="/child_one"><b>Child_One</b></Link>
            <br></br><br></br>
            <Outlet></Outlet>
        </React.Fragment>
    )
}
export default Layout2;