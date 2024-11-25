import './Match.scss';

const Match = ({ winner, loser, result }) => {
  return (
    <>
      <div className="match">
        <span className="match__players">
          {winner} bt {loser}
        </span>
        <span className="match__score">{result}</span>
      </div>
    </>
  );
};

export default Match;
