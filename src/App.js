import { Navigation } from './features/navigation'
import { Controller } from './features/controller'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>

      <Controller />
    </div>
  );
}

export default App;
