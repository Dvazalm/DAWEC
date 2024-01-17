// Modifica el archivo src/components/App.js
import '../components/App.css';
import ToDoApp from './ToDoApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <p>
         David Vazquez Almenara
        </p>

        {/* Renderiza el componente ToDoApp */}
        <ToDoApp />
      </header>
    </div>
  );
}

export default App;
