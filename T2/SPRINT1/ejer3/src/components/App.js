// Modifica el archivo src/components/App.js

import '../components/App.css';

import Contador from './Contador.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
  
        <p>
         David Vazquez Almenara
        </p>

        <h1>Contador</h1>
           <Contador />
      </header>
    </div>
  );
}

export default App;
