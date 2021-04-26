import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import axios from 'axios';
import './App.css';

function App() {
  // eslint-disable-next-line
  const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"])
  axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
    setPokemon(res.data.results.map(p=>p.name))
  })
  return (
    <PokemonList pokemon= {pokemon} />
  );
}

export default App;
