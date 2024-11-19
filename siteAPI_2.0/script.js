async function getPokemonData() {
    const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error("Pokémon não encontrado!");
        const data = await response.json();

        // Atualizando os elementos do card
        document.getElementById('pokemonName').textContent = capitalize(data.name);
        document.getElementById('pokemonImage').src = data.sprites.front_default || "https://via.placeholder.com/150";
        document.getElementById('pokemonHP').textContent = data.stats[0].base_stat; // HP está no primeiro índice
        document.getElementById('pokemonType').textContent = data.types[0].type.name; // Primeiro tipo
        document.getElementById('pokemonDescription').textContent = `Altura: ${data.height / 10}m | Peso: ${data.weight / 10}kg`;

    } catch (error) {
        alert("Erro ao buscar Pokémon. Verifique o nome ou número.");
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
