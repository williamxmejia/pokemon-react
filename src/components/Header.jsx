import React from "react";
import "../bootstrap.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 className="text-center">Pokedex</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Header;
