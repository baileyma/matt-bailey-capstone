import './Match.scss';
import { Link } from 'react-router-dom';

const Match = ({ winner, loser, result }) => {
  return (
    <>
      <div className="match">
        <p className="match__players">
          {winner} bt {loser}
        </p>
        <p className="match__score">
          {result}
          {'  '}
          <Link to>
            <span>Edit</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Match;
