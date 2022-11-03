import "./bootstrap.css";
import Axios from "axios";
import AllPoke from "./components/AllPoke";
import './index.css'
import React, {useState, useEffect} from "react";
import IndividualPoke from "./components/IndividualPoke";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function App() {
    return (
            <Routes>
                <Route path="/" element={<AllPoke />} />
                <Route path="/poke" element={<IndividualPoke />} />
            </Routes>


    )
}
export default App;
