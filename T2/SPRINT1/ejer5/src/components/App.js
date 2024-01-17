// Modifica el archivo src/components/App.js

import '../components/App.css';
import TaskManager from './TaskManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        David Vazquez Almenara
        </p>
     

        {/* Renderiza el componente TaskManager */}
        <TaskManager />
      </header>
    </div>
  );
}

export default App;
