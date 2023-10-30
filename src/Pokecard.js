import "./Pokecard.css";
const POKE_API = "https://raw.githubusercontent.com/PokeAPI";

function Pokecard({ id, name, type, exp }) {

  const pokeImage = `${POKE_API}/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard">
      <p className="Pokecard-name">{name}</p>
      <img src={pokeImage} alt={`This is a card of ${name}`} />
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  );
}

export default Pokecard;
