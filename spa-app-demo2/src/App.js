import React from "react";
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout1 from "./Layout1";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout1></Layout1>}>
                    <Route index element={<Pageone></Pageone>}></Route>
                    <Route path="/page_two" element={<Pagetwo></Pagetwo>}></Route>
                    <Route path="/page_three" element={<Pagethree></Pagethree>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
