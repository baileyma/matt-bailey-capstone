import './PastTournaments.scss';

const PastTournaments = () => {
  const player1 = 'H Mills';
  const player2 = 'G Cooke Yarborough';
  const player3 = 'H Taylour';
  const player4 = 'E Barry';
  const player5 = 'F Lowe';
  const player6 = 'H Bailey';
  const player7 = 'P Fuller';
  const player8 = 'M Bailey';

  return (
    <>
      <ul className="PastTournaments__list">
        <li className="PastTournaments__list-item">Year</li>
        <li className="PastTournaments__list-item">Champion</li>
        <li className="PastTournaments__list-item">Runner-up</li>
        <li className="PastTournaments__list-item">Plate</li>
        <li className="PastTournaments__list-item">Venue</li>
      </ul>

      <ul className="PastTournaments__list">
        <li className="PastTournaments__list-item">2024</li>
        <li className="PastTournaments__list-item">{player1}</li>
        <li className="PastTournaments__list-item">{player8}</li>
        <li className="PastTournaments__list-item">{player7}</li>
        <li className="PastTournaments__list-item">Romsey</li>
      </ul>
    </>
  );
};

export default PastTournaments;
