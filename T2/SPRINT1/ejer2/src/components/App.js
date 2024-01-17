// Modifica el archivo src/components/App.js

import '../components/App.css';

import ListaDeFrutas from './ListaDeFrutas';

function App() {
  // Define un array de frutas con nombre e imagen
  const frutasArray = [
    { nombre: 'Manzana', imagen: 'https://static.vecteezy.com/system/resources/previews/018/926/144/original/apple-color-illustration-png.png' },
    { nombre: 'Banana', imagen: 'https://static.vecteezy.com/system/resources/thumbnails/011/033/657/small_2x/yellow-banana-png.png' },
    { nombre: 'Fresa', imagen: 'https://static.vecteezy.com/system/resources/thumbnails/023/742/344/small/strawberries-isolated-illustration-ai-generative-free-png.png' },
    { nombre: 'Uva', imagen: 'https://static.vecteezy.com/system/resources/previews/025/065/156/original/grape-with-ai-generated-free-png.png' },
    { nombre: 'Naranja', imagen: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c16d.png' },
  ];

  return (
    <div className="App">
      <header className="App-header">
  
        <p>
         David Vazquez Almenara
        </p>

        <h1>Lista de Frutas</h1>
        <ListaDeFrutas frutas={frutasArray} />
      </header>
    </div>
  );
}

export default App;
