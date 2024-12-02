import './Placings.scss';

const Placings = ({ year }) => {
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
      <main className="Placings">
        <h3 className="Placings__title">Placings</h3>

        <div className="Placings__wrapper">
          <div className="Placings__player-list">
            <ol>
              <li>{player1}</li>
              <li>{player8}</li>
              <li>{player3}</li>
              <li>{player5}</li>
              <li>{player7}</li>
              <li>{player4}</li>
              <li>{player2}</li>
              <li>{player6}</li>
            </ol>
          </div>
          <div className="Placings__winners">
            <p className="Placings__winner-item">
              Champion <br /> {player1}
            </p>
            <p className="Placings__winner-item">
              Plate Winner <br /> {player7}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Placings;
