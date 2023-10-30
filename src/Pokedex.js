import Pokecard from "./Pokecard";

function Pokedex({pokemon}){
  return (
    <div>
      { pokemon.map(function(poke){
        <Pokecard
          id={poke.id}
          name={poke.name}
          type={poke.type}
          xp={poke.base_experience}
        />
      })}
    </div>
  )
}

export default Pokedex;