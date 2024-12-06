import './Match.scss';
import { Link } from 'react-router-dom';

const Match = ({ player1, player2, result, matchID }) => {
  const baseUrl = import.meta.env.VITE_LOCAL_URL;

  return (
    <>
      <div className="match">
        <p className="match__players">
          {player1} vs {player2}
        </p>
        <div className="match__score-edit">
          <p className="match__score">{result}</p>

          <Link className="match__edit" to={`${baseUrl}/live-score/${matchID}`}>
            <span>Live Score</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Match;
