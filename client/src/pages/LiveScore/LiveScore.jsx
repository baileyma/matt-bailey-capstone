import { useState } from 'react';
import './LiveScore.scss';

const LiveScore = () => {
  // const [scoreOne, setScoreOne] = useState(0);
  // const [scoreTwo, setScoreTwo] = useState(0);

  const player1 = 'H Mills';
  const player2 = 'M Bailey';

  const [gamesOne, setGamesOne] = useState(0);
  const [gamesTwo, setGamesTwo] = useState(0);

  const [sets, setSets] = useState([]);
  const [setCountOne, setSetCountOne] = useState(0);
  const [setCountTwo, setSetCountTwo] = useState(0);

  const setClearance = () => {
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

  const addScore = (winner, score) => {
    console.log(winner);
    console.log(score);
  };

  return (
    <>
      <h2>Live Score</h2>

      <div className="LiveScore__players">
        <p>{player1}</p>
        <p>{player2}</p>
      </div>

      <div className="LiveScore__sets">
        <p>{setCountOne}</p>
        <p>Sets</p>
        <p>{setCountTwo}</p>
      </div>

      <div className="LiveScore__games">
        <p onClick={() => setGamesOne(gamesOne + 1)}>+</p>
        <p onClick={() => setGamesOne(gamesOne - 1)}>-</p>
        <p>{gamesOne}</p>
        <p>Games</p>
        <p>{gamesTwo}</p>
        <p onClick={() => setGamesTwo(gamesTwo + 1)}>+</p>
        <p onClick={() => setGamesTwo(gamesTwo - 1)}>-</p>
        <p onClick={setClearance}>Submit</p>
      </div>
      <p>Previous sets: {sets}</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addScore(e.target.winner.value, e.target.score.value);
        }}
      >
        <label>Manually enter final score:</label>
        <input type="text" name="score" value={sets} />

        <label>Winner:</label>
        <select name="winner" id="winner">
          <option value={player1}>{player1}</option>
          <option value={player2}>{player2}</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LiveScore;
