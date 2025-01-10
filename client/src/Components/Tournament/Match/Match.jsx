import './Match.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Match = ({
  player1,
  player2,
  result,
  matchID,
  winner,
  loser,
  updatePlayers,
}) => {
  const baseUrl = import.meta.env.VITE_LOCAL_URL;
  const apiURL = import.meta.env.VITE_API_URL;

  const resetScore = async () => {
    const resultObj = {
      winnerID: null,
      loserID: null,
      score: null,
    };
    console.log(matchID);
    const response = await axios.put(`${apiURL}/matches/${matchID}`, resultObj);
    updatePlayers();
    return response;
  };

  const eraseAll = async () => {
    console.log('starts');
    const response = await axios.put(
      `${apiURL}/matches/erase-players/${matchID}`
    );
    console.log('now updates');
    updatePlayers();
    return response;
  };

  return (
    <>
      <div className="match">
        <div className="match__players">
          {result === 'TBC' ? (
            <p>
              {player1} vs {player2}
            </p>
          ) : (
            <p>
              {winner} beat {loser}
            </p>
          )}
          <p onClick={() => eraseAll()} className="match__delete">
            Delete All
          </p>
        </div>

        <div className="match__score-edit">
          <p className="match__score">{result}</p>
          <div className="match__edit-container">
            <span onClick={() => resetScore()} className="match__edit">
              Reset Score
            </span>
            <Link className="match__edit" to={`./live-score/${matchID}`}>
              <span>Live Score</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Match;
