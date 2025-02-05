import { useEffect, useState } from 'react';
import Match from '../Match/Match';
import './Tournament.scss';
import axios from 'axios';

const Tournament = ({ tournamentYear }) => {
  const baseUrl = import.meta.env.VITE_API_URL;

  const [players, setPlayers] = useState(null);

  const year = tournamentYear;

  const getPlayers = async () => {
    console.log('getplayers is called');
    try {
      const response = await axios.get(`${baseUrl}/players/year/${year}`);

      setPlayers(response.data);
      return;
    } catch (error) {
      console.error(`Error retrieving players: ${error}`);
    }
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      await getPlayers();
    };
    fetchPlayers();
  }, [year]);

  if (!players) {
    return <h3>Loading....</h3>;
  }

  return (
    <main className="tournament">
      <div className="tournament__opening-round">
        <h2 className="tournament__title"> --- {year} --- </h2>
        <h2 className="tournament__title"> Opening Round </h2>
        <div className="tournament__matches">
          <Match
            player1={players[0]?.player1_name || 'TBC'}
            player2={players[0]?.player2_name || 'TBC'}
            result={players[0]?.score || 'TBC'}
            matchID={players[0]?.id || 'TBC'}
            winner={players[0]?.winner_name || 'TBC'}
            loser={players[0]?.loser_name || 'TBC'}
            updatePlayers={() => getPlayers()}
          />
          <Match
            player1={players[1]?.player1_name || 'TBC'}
            player2={players[1]?.player2_name || 'TBC'}
            result={players[1]?.score || 'TBC'}
            matchID={players[1]?.id || 'TBC'}
            winner={players[1]?.winner_name || 'TBC'}
            loser={players[1]?.loser_name || 'TBC'}
            updatePlayers={() => getPlayers()}
          />
          <Match
            player1={players[2]?.player1_name || 'TBC'}
            player2={players[2]?.player2_name || 'TBC'}
            result={players[2]?.score || 'TBC'}
            matchID={players[2]?.id || 'TBC'}
            winner={players[2]?.winner_name || 'TBC'}
            loser={players[2]?.loser_name || 'TBC'}
            updatePlayers={() => getPlayers()}
          />
          <Match
            player1={players[3]?.player1_name || 'TBC'}
            player2={players[3]?.player2_name || 'TBC'}
            result={players[3]?.score || 'TBC'}
            matchID={players[3]?.id || 'TBC'}
            winner={players[3]?.winner_name || 'TBC'}
            loser={players[3]?.loser_name || 'TBC'}
            updatePlayers={() => getPlayers()}
          />
        </div>
      </div>

      <div className="tournament__later-stage">
        <h2 className="tournament__title">Plate</h2>
        <h3 className="tournament__title"> Semi Final </h3>
        <div className="tournament__matches">
          <Match
            player1={players[4]?.player1_name || 'TBC'}
            player2={players[4]?.player2_name || 'TBC'}
            result={players[4]?.score || 'TBC'}
            matchID={players[4]?.id || 'TBC'}
            winner={players[4]?.winner_name || 'TBC'}
            loser={players[4]?.loser_name || 'TBC'}
            updatePlayers={() => getPlayers()}
          />
          <Match
            player1={players[5]?.player1_name || 'TBC'}
            player2={players[5]?.player2_name || 'TBC'}
            result={players[5]?.score || 'TBC'}
            matchID={players[5]?.id || 'TBC'}
            winner={players[5]?.winner_name || 'TBC'}
            loser={players[5]?.loser_name || 'TBC'}
            updatePlayers={() => getPlayers()}
          />
        </div>
        <div>
          <h3 className="tournament__title"> 3rd Place Playoff</h3>
          <Match
            player1={players[6]?.player1_name || 'TBC'}
            player2={players[6]?.player2_name || 'TBC'}
            result={players[6]?.score || 'TBC'}
            matchID={players[6]?.id || 'TBC'}
            winner={players[6]?.winner_name || 'TBC'}
            loser={players[6]?.loser_name || 'TBC'}
            updatePlayers={() => getPlayers()}
          />
        </div>
        <div>
          <h3 className="tournament__title"> Final</h3>
          <Match
            player1={players[7]?.player1_name || 'TBC'}
            player2={players[7]?.player2_name || 'TBC'}
            result={players[7]?.score || 'TBC'}
            matchID={players[7]?.id || 'TBC'}
            winner={players[7]?.winner_name || 'TBC'}
            loser={players[7]?.loser_name || 'TBC'}
            updatePlayers={() => getPlayers()}
          />
        </div>
      </div>

      <div className="tournament__later-stage">
        <h2 className="tournament__title">Main</h2>
        <h3 className="tournament__title"> Semi Final </h3>
        <div className="tournament__matches">
          <Match
            player1={players[8]?.player1_name || 'TBC'}
            player2={players[8]?.player2_name || 'TBC'}
            result={players[8]?.score || 'TBC'}
            matchID={players[8]?.id || 'TBC'}
            winner={players[8]?.winner_name || 'TBC'}
            loser={players[8]?.loser_name || 'TBC'}
            updatePlayers={() => getPlayers()}
          />
          <Match
            player1={players[9]?.player1_name || 'TBC'}
            player2={players[9]?.player2_name || 'TBC'}
            result={players[9]?.score || 'TBC'}
            matchID={players[9]?.id || 'TBC'}
            winner={players[9]?.winner_name || 'TBC'}
            loser={players[9]?.loser_name || 'TBC'}
            updatePlayers={() => getPlayers()}
          />
        </div>
        <div>
          <h3 className="tournament__title"> 3rd Place Playoff</h3>
          <Match
            player1={players[10]?.player1_name || 'TBC'}
            player2={players[10]?.player2_name || 'TBC'}
            result={players[10]?.score || 'TBC'}
            matchID={players[10]?.id || 'TBC'}
            winner={players[10]?.winner_name || 'TBC'}
            loser={players[10]?.loser_name || 'TBC'}
            updatePlayers={() => getPlayers()}
          />
        </div>
        <div>
          <h3 className="tournament__title"> Final</h3>
          <Match
            player1={players[11]?.player1_name || 'TBC'}
            player2={players[11]?.player2_name || 'TBC'}
            result={players[11]?.score || 'TBC'}
            matchID={players[11]?.id || 'TBC'}
            winner={players[11]?.winner_name || 'TBC'}
            loser={players[11]?.loser_name || 'TBC'}
            updatePlayers={() => getPlayers()}
          />
        </div>
      </div>
    </main>
  );
};

export default Tournament;
