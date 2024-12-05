import './Match.scss';
import { Link } from 'react-router-dom';

const Match = ({ winner, loser, result, matchID }) => {
  const baseUrl = import.meta.env.VITE_LOCAL_URL;

  return (
    <>
      <div className="match">
        <p className="match__players">
          {winner || 'TBC'} vs {loser || 'TBC'}
        </p>
        <div className="match__score-edit">
          <p className="match__score">{result || 'TBC'}</p>

          <Link className="match__edit" to={`${baseUrl}/live-score/${matchID}`}>
            <span>Edit</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Match;
