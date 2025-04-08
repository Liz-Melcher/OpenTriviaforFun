import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//import Home from './pages/Home';
import Login from './pages/Login';
//import UserSetting from './pages/UserSettings';
//import GameSettings from './pages/GameSettings';
//import TriviaGame from './pages/TriviaGame';
//import HighScores from './pages/HighScores';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
        
      </Routes>
    </Router>
  );
};

export default App;
