import React from "react";
import Search from "./Search";

import "../styles/Header.css";

export default function Header({ searchCity }) {
    return ( 
        <header className = "Header" >
        
        <h1 className = "Header__title" > My Weather App </h1> 
        <Search searchCity = { searchCity }/>
         
        </header>
    );
}