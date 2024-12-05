import { useEffect, useState } from 'react';
import Match from '../Match/Match';
import './Tournament.scss';
import axios from 'axios';

const Tournament = ({ tournamentYear }) => {
  const baseUrl = import.meta.env.VITE_API_URL;

  const [players, setPlayers] = useState(null);

  const year = tournamentYear;

  const getPlayers = async () => {
    try {
      const response = await axios.get(`${baseUrl}/players/${year}`);

      return response.data;
    } catch (error) {
      console.error(`Error retrieving players: ${error}`);
    }
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersObj = await getPlayers();

      setPlayers(playersObj);
    };
    fetchPlayers();
  }, [year]);

  console.log(players);

  if (!players) {
    return <h3>Loading....</h3>;
  }

  return (
    <main className="tournament">
      <div className="tournament__opening-round">
        <h2 className="tournament__title"> Opening Round </h2>
        <div className="tournament__matches">
          <Match
            winner={players[0].player1_name}
            loser={players[0].player2_name}
            result={players[0].score}
            matchID={players[0].id}
          />
          <Match
            winner={players[1].player1_name}
            loser={players[1].player2_name}
            result={players[1].score}
            matchID={players[1].id}
          />
          <Match
            winner={players[2].player1_name}
            loser={players[2].player2_name}
            result={players[2].score}
            matchID={players[2].id}
          />
          <Match
            winner={players[3].player1_name}
            loser={players[3].player2_name}
            result={players[3].score}
            matchID={players[3].id}
          />
        </div>
      </div>

      <div className="tournament__later-stage">
        <h2 className="tournament__title">Plate</h2>
        <h3 className="tournament__title"> Semi Final </h3>
        <div className="tournament__matches">
          <Match
            winner={players[4].player1_name}
            loser={players[4].player2_name}
            result={players[4].score}
            matchID={players[4].id}
          />
          <Match
            winner={players[5].player1_name}
            loser={players[5].player2_name}
            result={players[5].score}
            matchID={players[5].id}
          />
        </div>
        <div>
          <h3 className="tournament__title"> 3rd Place Playoff</h3>
          <Match
            winner={players[6].player1_name}
            loser={players[6].player2_name}
            result={players[6].score}
            matchID={players[6].id}
          />
        </div>
        <div>
          <h3 className="tournament__title"> Final</h3>
          <Match
            winner={players[7].player1_name}
            loser={players[7].player2_name}
            result={players[7].score}
            matchID={players[7].id}
          />
        </div>
      </div>

      <div className="tournament__later-stage">
        <h2 className="tournament__title">Main</h2>
        <h3 className="tournament__title"> Semi Final </h3>
        <div className="tournament__matches">
          <Match
            winner={players[8].player1_name}
            loser={players[8].player2_name}
            result={players[8].score}
            matchID={players[8].id}
          />
          <Match
            winner={players[9].player1_name}
            loser={players[9].player2_name}
            result={players[9].score}
            matchID={players[9].id}
          />
        </div>
        <div>
          <h3 className="tournament__title"> 3rd Place Playoff</h3>
          <Match
            winner={players[10].player1_name}
            loser={players[10].player2_name}
            result={players[10].score}
            matchID={players[10].id}
          />
        </div>
        <div>
          <h3 className="tournament__title"> Final</h3>
          <Match
            winner={players[11].player1_name}
            loser={players[11].player2_name}
            result={players[11].score}
            matchID={players[11].id}
          />
        </div>
      </div>
    </main>
  );
};

export default Tournament;
