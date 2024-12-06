import './Placings.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import trophy from '../../../assets/data/trophy.jpg';

const Placings = ({ year }) => {
  const baseUrl = import.meta.env.VITE_API_URL;

  const [finals, setFinals] = useState(null);

  const getPlacings = async () => {
    const response = await axios.get(`${baseUrl}/players/placings/${year}`);

    return response.data;
  };

  useEffect(() => {
    const fetchPlacings = async () => {
      const response = await getPlacings();
      setFinals(response);
    };
    fetchPlacings();
  }, []);

  console.log(finals);

  let champion;
  let runner_up;
  let third_place;
  let fourth_place;
  let plate_winner;
  let plate_runner_up;
  let seventh_place;
  let eigth_place;

  if (!finals) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  for (let final of finals) {
    if (final.draw === 'Main') {
      if (final.round === 'Final') {
        champion = final.winner;
        runner_up = final.loser;
      } else {
        third_place = final.winner;
        fourth_place = final.loser;
      }
    }
    if (final.draw === 'Plate') {
      if (final.round === 'Final') {
        plate_winner = final.winner;
        plate_runner_up = final.loser;
      } else {
        seventh_place = final.winner;
        eigth_place = final.loser;
      }
    }
  }

  return (
    <>
      <main className="Placings">
        <h3 className="Placings__title">Placings</h3>

        <div className="Placings__wrapper">
          <div className="Placings__player-list">
            <ol>
              <li>{champion || 'TBC'}</li>
              <li>{runner_up || 'TBC'}</li>
              <li>{third_place || 'TBC'}</li>
              <li>{fourth_place || 'TBC'}</li>
              <li>{plate_winner || 'TBC'}</li>
              <li>{plate_runner_up || 'TBC'}</li>
              <li>{seventh_place || 'TBC'}</li>
              <li>{eigth_place || 'TBC'}</li>
            </ol>
          </div>
          <div className="Placings__winners">
            <div className="Placings__winner-wrapper">
              <p className="Placings__winner-item">
                Champion <br /> {champion || 'TBC'}
              </p>
              <img
                className="Placings__trophy"
                src={trophy}
                alt="trophy icon"
              />
            </div>
            <div className="Placings__winner-wrapper">
              <p className="Placings__winner-item">
                Plate Winner <br /> {plate_winner || 'TBC'}
              </p>
              <img
                className="Placings__trophy"
                src={trophy}
                alt="trophy icon"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Placings;
