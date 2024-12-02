import { useEffect, useState } from 'react';
import Match from '../Match/Match';
import './Tournament.scss';
import axios from 'axios';

const Tournament = ({ year }) => {
  const baseUrl = 'http://localhost:8080';

  const [players, setPlayers] = useState([]);

  console.log(year);
  const year2 = 2025;

  const getPlayers = async (year) => {
    const response = await axios.get(`${baseUrl}/players/${year2}`);
    return response.data;
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersObj = await getPlayers();
      console.log(playersObj);
      setPlayers(playersObj);
    };
    fetchPlayers();
  }, [year]);

  console.log(players);

  const {
    match1player1,
    match1player2,
    match2player1,
    match2player2,
    match3player1,
    match3player2,
    match4player1,
    match4player2,
  } = players[0];

  const player1 = 'H Mills';
  const player2 = 'G Cooke Yarborough';
  const player3 = 'H Taylour';
  const player4 = 'E Barry';
  const player5 = 'F Lowe';
  const player6 = 'H Bailey';
  const player7 = 'P Fuller';
  const player8 = 'M Bailey';

  return (
    <main className="tournament">
      <div className="tournament__opening-round">
        <h2 className="tournament__title"> Opening Round </h2>
        <div className="tournament__matches">
          <Match
            winner={match1player1}
            loser={match1player2}
            result={'6-3 6-2'}
          />
          <Match
            winner={match2player1}
            loser={match2player2}
            result={'6-3 6-2'}
          />
          <Match
            winner={match3player1}
            loser={match3player2}
            result={'6-2 6-3'}
          />
          <Match
            winner={match4player1}
            loser={match4player2}
            result={'6-3 6-3'}
          />
        </div>
      </div>

      <div className="tournament__later-stage">
        <h2 className="tournament__title">Plate</h2>
        <h3 className="tournament__title"> Semi Final </h3>
        <div className="tournament__matches">
          <Match winner={player4} loser={player2} result={'x-x x-x'} />
          <Match winner={player7} loser={player6} result={'x-x x-x'} />
        </div>
        <div>
          <h3 className="tournament__title"> 3rd Place Playoff</h3>
          <Match winner={player2} loser={player6} result={'x-x x-x'} />
        </div>
        <div>
          <h3 className="tournament__title"> Final</h3>
          <Match
            winner={player7}
            loser={player4}
            result={'7-6 (7-5) 7-6 (7-3)'}
          />
        </div>
      </div>

      <div className="tournament__later-stage">
        <h2 className="tournament__title">Main</h2>
        <h3 className="tournament__title"> Semi Final </h3>
        <div className="tournament__matches">
          <Match winner={player1} loser={player3} result={'x-x x-x'} />
          <Match winner={player8} loser={player5} result={'x-x x-x'} />
        </div>
        <div>
          <h3 className="tournament__title"> 3rd Place Playoff</h3>
          <Match winner={player3} loser={player5} result={'x-x x-x'} />
        </div>
        <div>
          <h3 className="tournament__title"> Final</h3>
          <Match winner={player1} loser={player8} result={'0-6 6-3 6-4'} />
        </div>
      </div>
    </main>
  );
};

export default Tournament;
