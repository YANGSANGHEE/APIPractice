async function load(Minnum, Maxnum) {
  let pokemonobj
  for (let i = Minnum; i < Maxnum; i++) {
    const Data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`);
    const obj = await Data.json();
    // console.log(obj);
    pokemonobj = {
      id: obj.id,
      name: obj.names[2].name,
      type: obj.genera[1].genus
    }
    console.log(pokemonobj);
    const { id, name, type } = pokemonobj

    const root = document.getElementById('root');
    const li = document.createElement('li');
    li.textContent = `id : ${id} 이름 : ${name}, 타입:${type}`
    root.appendChild(li);
  }
}

load(1, 20);