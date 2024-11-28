import './MatchEdit.scss';

const MatchEdit = () => {
  return (
    <>
      <h2 className="MatchEdit__title">Head to Head</h2>

      <div className="MatchEdit__players">
        <h3>H Mills</h3>
        <h3>M Bailey</h3>
      </div>

      <div className="MatchEdit__wins">
        <h3>Wins</h3>
        <h3>Wins</h3>
      </div>

      <div className="MatchEdit__wins-count">
        <p>1</p>
        <p>4</p>
      </div>

      <div className="MatchEdit__previous-matches">
        <h3>Previous Matches</h3>
        <p>H Mills b M Bailey 6-4 6-4 Romsey 2024</p>
        <p>H Mills b M Bailey 6-2 6-3 Romsey 2025</p>
      </div>
    </>
  );
};

export default MatchEdit;
