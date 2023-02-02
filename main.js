const pokemon = document.querySelector('#pokeForm')
console.log(pokemon)

const pokeDex = async (event) => {
    event.preventDefault()
    if (choice.toLowerCase() == 'quit') {
        return 'Thank you for using Pokedex!'
    }
    else {
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
        const response = await url.data
        console.log(response)
        return response
    }
}

const form = document.getElementById('pokeForm')
form.addEventListener('submit', pokeDex)