import React from "react";

import {Routes,Route} from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About";
import Project from "../pages/Project";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact"


function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/skills" element={<Skills/>}/>
        
        </Routes>
    )
}

export default AllRoutes;