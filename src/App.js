import { Routes, Route } from 'react-router-dom';
import { Navigation } from './features/navigation'
import Controller from './features/controller'
import './App.css';

function App() {
  return (
    
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>

        <Routes>
          <Route path="/" element={<Controller raw={false} />} />
          <Route path="/raw" element={<Controller raw={true} />} />
          <Route path="/raw-hardware" element={<Controller raw={true} hardware={true} />} />
        </Routes>
      </div>
  );
}

export default App;
