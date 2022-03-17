import React from "react";
//Link used to create the hyperlinks
//Outlet used to hold the target components
import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
        <React.Fragment>
             <Link to="/" style={{marginRight:100}}><b>Page_one</b></Link>
             <Link to="/page_two" style={{marginRight:100}}><b>Page_two</b></Link>
             <Link to="/page_three">Page_three</Link>
             <br></br><br></br>
             <Outlet></Outlet>
        </React.Fragment>
    )
}

export default Layout;