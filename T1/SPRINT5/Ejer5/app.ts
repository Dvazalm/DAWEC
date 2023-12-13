document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm') as HTMLFormElement;
    const pokemonInput = document.getElementById('pokemonInput') as HTMLInputElement;
    const pokemonInfo = document.getElementById('pokemonInfo') as HTMLDivElement;

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const pokemonName = pokemonInput.value.toLowerCase();
        try {
            const pokemonData = await getPokemonData(pokemonName);
            displayPokemonInfo(pokemonData);
            pokemonInput.classList.remove('warning'); // Elimina la clase de advertencia si se encuentra el Pokémon
        } catch (error) {
            console.error(error);
            alert('Error al obtener información del Pokémon. Asegúrate de que el nombre o ID sea válido.');

            // Agrega la clase de advertencia si no se encuentra el Pokémon
            pokemonInput.classList.add('warning');
        }
    });

    async function getPokemonData(name: string) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información del Pokémon.');
        }
        return response.json();
    }

    function displayPokemonInfo(data: any) {
        const { name, id, types, stats, moves, sprites, species } = data;

        pokemonInfo.innerHTML = `
            <h2>${name.toUpperCase()} - #${id}</h2>
            <img src="${sprites.front_default}" alt="${name}">
            <p><strong>Tipo(s):</strong> ${types.map((type: any) => type.type.name).join(', ')}</p>
            <p><strong>Estadísticas:</strong> ${stats.map((stat: any) => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}</p>
            <p><strong>Movimientos:</strong> ${moves.map((move: any) => move.move.name).join(', ')}</p>
            <p><strong>Evolución:</strong> ${species.name}</p>
        `;

        pokemonInfo.classList.remove('hidden');
    }
});
