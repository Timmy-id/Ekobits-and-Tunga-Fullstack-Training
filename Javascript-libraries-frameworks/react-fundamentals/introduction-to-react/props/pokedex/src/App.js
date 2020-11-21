import React, { Component } from "react";
import Pokecard from './Pokecard';
import './App.css';

export default class Pokedex extends Component {
  render() {
    var pokeList = this.props.pokemon.map(singlePokemon => {
      return (
        <Pokecard 
          key={singlePokemon.id}
          name={singlePokemon.name}
          type={singlePokemon.type}
          image={singlePokemon.image}
        />
      );
    });
    return (
      <div>
        <h1 id='header'>Pokedex</h1>
        <ul>{pokeList}</ul>
      </div>
    );
  }
}


// Specifies the default values for props:
Pokedex.defaultProps = {
  pokemon: [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    }
  ]
};
