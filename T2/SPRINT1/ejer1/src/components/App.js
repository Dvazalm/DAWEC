// Modifica el archivo src/components/App.js


import '../components/App.css';
import HolaMundo from './HolaMundo';
import Saludo from './Saludo';


function App() {

  return (
    <div className="App">
      <header className="App-header">
  
        <p>
         David Vazquez Almenara
        </p>

        <HolaMundo />


        <Saludo nombre="John" />
        <Saludo nombre="Jane" />
        <Saludo nombre="Alice" />
      </header>
    </div>
  );
}

export default App;
