import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';
import History from './pages/History/History.jsx';
import Header from './Components/Header/Header.jsx';
import CurrentYear from './pages/CurrentYear/CurrentYear.jsx';
import MatchHistory from './pages/MatchHistory/MatchHistory.jsx';
import LiveScore from './pages/LiveScore/LiveScore.jsx';
import DrawForm from './pages/DrawForm/DrawForm.jsx';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/2024" replace />} />
          <Route path="/:year" element={<CurrentYear />} />
          <Route path="/live-score/:matchID" element={<LiveScore />} />
          <Route path="/enter-draw/:year" element={<DrawForm />} />

          <Route path="/history" element={<History />} />
          <Route path="/head-to-head/" element={<MatchHistory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
