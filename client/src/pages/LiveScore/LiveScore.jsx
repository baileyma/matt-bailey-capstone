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

  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  const getMatch = async (matchID) => {
    const response = await axios.get(`${baseURL}/matches/${matchID}`);
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

  const [submitError, setSubmitError] = useState(false);

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
    const response = await axios.put(
      `${baseURL}/matches/${matchID}`,
      resultObj
    );
    console.log(response);
  };

  const submitScore = () => {
    if (!isGameOver) {
      setSubmitError(true);
      return;
    }
    setScoreSubmitted(true);
    publishScore(winner_id, loser_id, sets);
  };

  return (
    <>
      <main className="LiveScore">
        <div className="LiveScore__round-info">
          <h2>{year}</h2>
          <h3>
            {draw} Draw : {round}
          </h3>
          <p>Game {round_number}</p>
        </div>

        <div className="LiveScore__players">
          <p className="LiveScore__player-item">{player1_name || 'Player 1'}</p>
          <p className="LiveScore__player-item">{player2_name || 'Player 2'}</p>
        </div>

        <div className="LiveScore__sets">
          <p>{setCountOne}</p>
          <p>Sets</p>
          <p>{setCountTwo}</p>
        </div>

        <div className="LiveScore__games">
          <p>{gamesOne}</p>
          <p>Games</p>
          <p>{gamesTwo}</p>
        </div>
        <div className="LiveScore__games">
          <div className="LiveScore__plusminus-wrapper">
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
          </div>
          <button className="LiveScore__button" onClick={setClearance}>
            Complete Set
          </button>
          <div className="LiveScore__plusminus-wrapper">
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
          </div>
        </div>

        {raiseError ? (
          <p className="LiveScore__games-error">{raiseError}</p>
        ) : (
          ''
        )}
        <div className="LiveScore__games-midwrapper">
          {!isGameOver ? (
            <p>Previous sets: {sets} </p>
          ) : (
            <p>
              {winner} beats {loser} {sets}
            </p>
          )}
        </div>

        {!scoreSubmitted ? (
          <p className="LiveScore__submit-message-reminder">
            *** Remember to hit submit before leaving this page ***
          </p>
        ) : (
          <p className="LiveScore__submit-message-complete">Score Submitted</p>
        )}
        {submitError && (
          <p className="LiveScore__submit-message-reminder">
            Game not yet complete!
          </p>
        )}

        <div className="LiveScore__end-wrapper">
          <button
            className="LiveScore__lower-button"
            onClick={() => {
              submitScore();
            }}
          >
            Submit score
          </button>

          <button
            className="LiveScore__lower-button"
            onClick={(e) => {
              e.preventDefault();
              navigate(`../../${year}`);
            }}
          >
            Back to {year} tournament
          </button>
        </div>
      </main>
    </>
  );
};

export default LiveScore;
