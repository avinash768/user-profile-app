
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserPage from './pages/UserPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/users/1" />} />
        <Route path="/users/:id" element={<UserPage />} />
      </Routes>
    </Router>
  );
};

export default App;
