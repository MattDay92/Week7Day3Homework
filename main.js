
const pokeDex = async (event) => {
    event.preventDefault();
    const pokemon = event.target.pokemon.value
    console.log(pokemon)
    if (pokemon.toLowerCase() == 'quit') {
        return 'Thank you for using Pokedex!'
    }
    else {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        
        const name = data['name'];
        const imgUrl = data.sprites.front_shiny;
        const type = data.types[0].type.name
        const baseHP = data.stats[0].base_stat
        const baseATK = data.stats[1].base_stat
        const baseDEF = data.stats[2].base_stat

        const myData = {
            name: name,
            imgUrl: imgUrl, 
            type: type,
            baseHP:  baseHP,
            baseATK:  baseATK,
            baseDEF:  baseDEF
        }

        addToPage(myData)
        
    }
}

const addToPage = (p) => {
    const card = document.createElement('div')
    card.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${p.imgUrl}" class="card-img-top" alt="${p.name}">
    <div class="card-body">
      <h3 class="card-title">Name:  ${p.name}</h3>
      <h5 class="card-title">Type:  ${p.type}</h5>
      <h5 class="card-title">Base HP:  ${p.baseHP}</h5>
      <h5 class="card-title">Base Attack:  ${p.baseATK}</h5>
      <h5 class="card-title">Base Defense:  ${p.baseDEF}</h5>      
    </div>
  </div> `  

  const container = document.querySelector('.pokeCard');
  if (container.innerHTML != ''){
    container.innerHTML = ''
  }
  container.append(card)
}

const form = document.getElementById('myForm')
form.addEventListener('submit', pokeDex)