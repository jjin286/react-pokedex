import _ from "lodash"
import Pokedex from "./Pokedex";

const POKEMON = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

function Pokegame({pokemon = POKEMON }){
  const shufflePokemon = _.shuffle(pokemon);

  const deck1 = shufflePokemon.slice(0,4);
  const deck2 = shufflePokemon.slice(4);

  const exp1 = _.sum(deck1.map((pokemon)=>pokemon.base_experience));
  const exp2 = _.sum(deck2.map((pokemon)=>pokemon.base_experience));

  return (
    <div>
      <h1>Deck #1</h1>
      <Pokedex pokemon={deck1} isWinner={exp1 > exp2}/>
      <h1>Deck #2</h1>
      <Pokedex pokemon={deck2} isWinner={exp2 > exp1}/>
    </div>
  )
}

export default Pokegame;