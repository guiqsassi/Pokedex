import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./page/Home/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"
import PokemonInfo from "./page/pokemonInfo/PokemonInfo";
import Pokemon from "./context/context";

function App () {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}> </Route>
        </Routes>
        <Routes>
          <Route path="/PokemonInfo" element={<PokemonInfo></PokemonInfo>}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
