import './PastTournaments.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

const PastTournaments = () => {
  const baseUrl = import.meta.env.VITE_API_URL;

  const [finals, setFinals] = useState(null);

  const getPlacings = async () => {
    const response = await axios.get(`${baseUrl}/players/placings-allyears`);
    return response.data;
  };

  useEffect(() => {
    const fetchPlacings = async () => {
      const response = await getPlacings();
      setFinals(response);
    };
    fetchPlacings();
  }, []);

  let champions = {};
  let runner_ups = {};
  let plate_winners = {};

  if (!finals) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  for (let final of finals) {
    if (final.draw === 'Main') {
      champions[final.year] = final.winner;
      runner_ups[final.year] = final.loser;
    }

    if (final.draw === 'Plate') {
      plate_winners[final.year] = final.winner;
    }
  }

  console.log('champions', champions);
  console.log('runner_ups', runner_ups);
  console.log('plate_winners', plate_winners);

  for (let i = 2024; i < 2029; i++) {}

  return (
    <>
      <main className="PastTournaments__wrapper">
        <ul className="PastTournaments__list">
          <li className="PastTournaments__list-item">Year</li>
          <li className="PastTournaments__list-item">Champion</li>
          <li className="PastTournaments__list-item">Runner-up</li>
          <li className="PastTournaments__list-item">Plate</li>
          <li className="PastTournaments__list-item">Venue</li>
        </ul>

        <ul className="PastTournaments__list">
          <li className="PastTournaments__list-item">2024</li>
          <li className="PastTournaments__list-item">{champions[2024]}</li>
          <li className="PastTournaments__list-item">{runner_ups[2024]}</li>
          <li className="PastTournaments__list-item">{plate_winners[2024]}</li>
          <li className="PastTournaments__list-item">Romsey</li>
        </ul>

        {champions[2025] && (
          <ul className="PastTournaments__list">
            <li className="PastTournaments__list-item">2025</li>
            <li className="PastTournaments__list-item">{champions[2025]}</li>
            <li className="PastTournaments__list-item">{runner_ups[2025]}</li>
            <li className="PastTournaments__list-item">
              {plate_winners[2025]}
            </li>
            <li className="PastTournaments__list-item">Romsey</li>
          </ul>
        )}

        {champions[2026] && (
          <ul className="PastTournaments__list">
            <li className="PastTournaments__list-item">2026</li>
            <li className="PastTournaments__list-item">{champions[2026]}</li>
            <li className="PastTournaments__list-item">{runner_ups[2026]}</li>
            <li className="PastTournaments__list-item">
              {plate_winners[2026]}
            </li>
            <li className="PastTournaments__list-item">Romsey</li>
          </ul>
        )}

        {champions[2027] && (
          <ul className="PastTournaments__list">
            <li className="PastTournaments__list-item">2027</li>
            <li className="PastTournaments__list-item">{champions[2027]}</li>
            <li className="PastTournaments__list-item">{runner_ups[2027]}</li>
            <li className="PastTournaments__list-item">
              {plate_winners[2027]}
            </li>
            <li className="PastTournaments__list-item">Romsey</li>
          </ul>
        )}
      </main>
    </>
  );
};

export default PastTournaments;
