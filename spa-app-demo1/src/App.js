import React from "react";
import './App.css';
//BrowserRouter used to encapsulate the Single Page Applications
//Routes used to encapsulate the Routes
//Route used to create the routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Pageone from "./components/Pageone";
import Pagetwo from "./components/Pagetwo";
import Pagethree from "./components/Pagethree";


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout></Layout>}>
                <Route index element={<Pageone></Pageone>}></Route>
                <Route path="/page_two" element={<Pagetwo></Pagetwo>}></Route>
                <Route path="/page_three" element={<Pagethree></Pagethree>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
