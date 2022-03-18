import React from "react";
import {Link,Outlet} from "react-router-dom";
function Layout1(){
    return(
        <React.Fragment>
            <Link to="/" style={{marginRight:100}}><b>Page_One</b></Link>
            <Link to="/page_two" style={{marginRight:100}}><b>Page_Two</b></Link>
            <Link to="/page_three" style={{marginRight:100}}><b>Page_Three</b></Link>
            <br></br><br></br>
            <Outlet></Outlet>
        </React.Fragment>
    )
}
export default Layout1;