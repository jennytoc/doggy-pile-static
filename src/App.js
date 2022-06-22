import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
