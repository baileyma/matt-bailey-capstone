import { Routes, BrowserRouter, Route } from 'react-router-dom';
import History from './pages/History/History.jsx';
import Header from './Components/Header/Header.jsx';
import CurrentYear from './pages/CurrentYear/CurrentYear.jsx';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CurrentYear />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
