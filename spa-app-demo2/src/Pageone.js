import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout2 from "./Layout2";
import Childone from "./Childone";

function Pageone(){
    return(
            <React.Fragment>
                <h1>Hello_1</h1>
                <Routes>
                    <Route path="/" element={<Layout2></Layout2>}>
                        <Route path="/child_one" element={<Childone></Childone>}></Route>
                    </Route>
                </Routes>
            </React.Fragment>
    )
}
export default Pageone;