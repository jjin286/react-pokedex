import Pokecard from "./Pokecard";
import "./Pokedex.css";



function Pokedex({ pokemon, isWinner }) {
  return (
    <div className="Pokedex">
      {isWinner && "THIS HAND WINS!" }
      <h1>Pokedex</h1>
      <div className="Pokedex-cardarea">
        {pokemon.map((poke) => {
          return <Pokecard
            id={poke.id}
            name={poke.name}
            type={poke.type}
            exp={poke.base_experience}
          />;
        })}
      </div>
    </div>
  );
}

export default Pokedex;
