import './Match.scss';

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
          <span>Edit</span>
        </p>
      </div>
    </>
  );
};

export default Match;
