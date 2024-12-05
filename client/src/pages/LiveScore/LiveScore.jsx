import { useState } from 'react';
import './LiveScore.scss';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const LiveScore = () => {
  const baseURL = import.meta.env.VITE_API_URL;

  const { matchID } = useParams();
  const navigate = useNavigate();
  const [matchData, setMatchData] = useState([]);

  const getMatch = async (matchID) => {
    const response = await axios.get(`${baseURL}/${matchID}`);
    return response;
  };

  useEffect(() => {
    const fetchMatch = async () => {
      const response = await getMatch(matchID);
      setMatchData(response.data);
    };

    fetchMatch();
  }, []);

  const {
    draw,
    player1_name,
    player1_id,
    player2_name,
    player2_id,
    round,
    round_number,
    score,
    year,
  } = matchData;

  const [gamesOne, setGamesOne] = useState(0);
  const [gamesTwo, setGamesTwo] = useState(0);

  const [sets, setSets] = useState([]);
  const [setCountOne, setSetCountOne] = useState(0);
  const [setCountTwo, setSetCountTwo] = useState(0);

  const [raiseError, setRaiseError] = useState('');

  const [count, setCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const [winner, setWinner] = useState('');
  const [loser, setLoser] = useState('');

  const [winner_id, setWinner_id] = useState('');
  const [loser_id, setLoser_id] = useState('');

  const setClearance = () => {
    setRaiseError('');

    if (gamesOne < 6 && gamesTwo < 6) {
      setRaiseError('One player must have at least 6 games');
      return;
    }

    if (gamesOne > 7 || gamesTwo > 7) {
      setRaiseError('No player can have more than 7 games');
      return;
    }

    if (gamesOne === 7) {
      if (gamesTwo !== 5 && gamesTwo !== 6) {
        setRaiseError('You can only win 7-5 or 7-6');
        return;
      }
    }

    if (gamesTwo === 7) {
      if (gamesOne !== 5 && gamesOne !== 6) {
        setRaiseError('You can only win 7-5 or 7-6');
        return;
      }
    }

    if (isGameOver) {
      setRaiseError('Game is already complete');
      return;
    }

    setCount(count + 1);

    setSets(sets + ` ${gamesOne}-${gamesTwo}`);

    if (gamesOne > gamesTwo) {
      setSetCountOne(setCountOne + 1);
    }
    if (gamesTwo > gamesOne) {
      setSetCountTwo(setCountTwo + 1);
    }

    setGamesOne(0);
    setGamesTwo(0);
  };

  useEffect(() => {
    console.log(setCountOne, setCountTwo);
    if (setCountOne === 2 || setCountTwo === 2) {
      setIsGameOver(true);
      if (setCountOne > setCountTwo) {
        setWinner(player1_name);
        setLoser(player2_name);
        setWinner_id(player1_id);
        setLoser_id(player2_id);
      }
      if (setCountTwo > setCountOne) {
        setWinner(player2_name);
        setLoser(player1_name);
        setWinner_id(player2_id);
        setLoser_id(player1_id);
      }
    }
  }, [setCountOne, setCountTwo]);

  const publishScore = async (winnerID, loserID, score) => {
    const resultObj = {
      winnerID: winnerID,
      loserID: loserID,
      score: score,
    };
    const response = axios.put(`${baseURL}/${matchID}`, resultObj);
    console.log(response);
  };

  return (
    <>
      <main className="LiveScore">
        <h2>Live Score</h2>
        <h3>
          {year} : {draw} Draw: {round} : Game {round_number}
        </h3>

        <div className="LiveScore__players">
          <p>{player1_name}</p>
          <p>{player2_name}</p>
        </div>

        <div className="LiveScore__sets">
          <p>{setCountOne}</p>
          <p>Sets</p>
          <p>{setCountTwo}</p>
        </div>

        <div className="LiveScore__games">
          <p
            className="LiveScore__games-toggle"
            onClick={() => setGamesOne(gamesOne + 1)}
          >
            +
          </p>
          <p
            className="LiveScore__games-toggle"
            onClick={() => setGamesOne(gamesOne - 1)}
          >
            -
          </p>
          <p>{gamesOne}</p>
          <p>Games</p>
          <p>{gamesTwo}</p>
          <p
            className="LiveScore__games-toggle"
            onClick={() => setGamesTwo(gamesTwo + 1)}
          >
            +
          </p>
          <p
            className="LiveScore__games-toggle"
            onClick={() => setGamesTwo(gamesTwo - 1)}
          >
            -
          </p>
          <button className="LiveScore__games-toggle" onClick={setClearance}>
            Complete Set
          </button>
        </div>
        <div className="LiveScore__games-midwrapper">
          <p>Previous sets: {!isGameOver ? `${sets}` : ''}</p>
          {raiseError && <p className="LiveScore__games-error">{raiseError}</p>}
        </div>

        {/* <form
          onSubmit={(e) => {
            e.preventDefault();
            publishScore(
              e.target.winner.value,
              e.target.loser.value,
              e.target.score.value
            );
          }}
        >
          <label>Manually enter final score:</label>
          <input type="text" name="score" value={sets.length ? sets : score} />

          <label>Winner:</label>
          <select name="winner" id="winner">
            <option value={player1_id}>{player1_name}</option>
            <option value={player2_id}>{player2_name}</option>
          </select>

          <label>Loser :</label>
          <select name="loser" id="loser">
            <option value={player1_id}>{player1_name}</option>
            <option value={player2_id}>{player2_name}</option>
          </select>

          <button type="submit">Submit</button>
        </form> */}

        {isGameOver && (
          <p>
            {winner} beats {loser} {sets}
          </p>
        )}
        <button onClick={() => publishScore(winner_id, loser_id, sets)}>
          Submit score
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(`../../${year}`);
          }}
        >
          Back to {year} tournament
        </button>
      </main>
    </>
  );
};

export default LiveScore;
