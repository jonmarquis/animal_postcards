import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"])
  return (
    <PokemonList pokemon= {pokemon} />
  );
}

export default App;
