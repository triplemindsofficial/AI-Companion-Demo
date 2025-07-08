import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Chat from './Pages/Chat/Chat';

function App() {
  return (
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
