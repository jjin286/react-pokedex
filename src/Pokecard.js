function Pokecard({id, name, type, exp}){

  const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return(
    <div className="Pokecard-card">
      <p>{name}</p>
      <img src={pokeImage} />
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  )
}

export default Pokecard;