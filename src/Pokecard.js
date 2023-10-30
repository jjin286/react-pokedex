import "./Pokecard.css";
//TODO:should have docstring

function Pokecard({ id, name, type, exp }) {

  const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard-card">
      <p className="Pokecard-card-name">{name}</p>
      <img src={pokeImage} alt={`This is a card of ${name}`} />
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  );
}
//TODO:make pokeImage global variable
//TODO:rename className without -

export default Pokecard;
