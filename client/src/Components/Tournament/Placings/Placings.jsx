const Placings = () => {
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
      <main>
        <p>Champion: {player1}</p>
        <p>Plate Winner: {player7}</p>

        <h3>Placings</h3>
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
      </main>
    </>
  );
};

export default Placings;
