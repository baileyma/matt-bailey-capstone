import { useState } from 'react';
import './MatchHistory.scss';
import { useEffect } from 'react';
import axios from 'axios';

const MatchEdit = () => {
  const baseUrl = import.meta.env.VITE_API_URL;

  // need to get these from the url

  // we populate player ids by 1) calling the players table using getPlayers 2) giving dropdown menus for each of the players
  const [player1ID, setPlayer1ID] = useState(null);
  const [player2ID, setPlayer2ID] = useState(null);
  console.log(player1ID, player2ID, 'hi');
  const [playersList, setPlayersList] = useState(null);

  const [player1Name, setPlayer1Name] = useState(null);
  const [player2Name, setPlayer2Name] = useState(null);

  const getPlayers = async () => {
    const response = await axios.get(`${baseUrl}/players`);
    console.log(response.data);
    return response.data;
  };

  // Array length 11 of objects { id name }
  // The form should have a list of names in the text and a list of IDs in the value

  // const playerOptionsArray = [];
  // playersList.map((element) => {
  //   const { id, name } = element;
  //   playerOptionsArray.push({ id: id, name: name });
  // });

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersTable = await getPlayers();
      setPlayersList(playersTable);
    };

    fetchPlayers();
  }, []);

  // Finally, once we have the player ids from the user selecting the corresponding names, we get the
  // matches from the backend and stick them in state variables

  const [matchesLeft, setMatchesLeft] = useState(null);
  const [matchesRight, setMatchesRight] = useState(null);

  console.log('left', matchesLeft);
  console.log('right', matchesRight);

  const getMatches = async (winnerID, loserID) => {
    const response = await axios.get(
      `${baseUrl}/players/head-to-head/?winnerid=${winnerID}&loserid=${loserID}`
    );
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const fetchMatches = async () => {
      const matchesLeft = await getMatches(player1ID, player2ID);
      setMatchesLeft(matchesLeft);

      const matchesRight = await getMatches(player2ID, player1ID);
      setMatchesRight(matchesRight);
    };

    fetchMatches();
  }, [player1ID, player2ID]);

  if (!playersList) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main className="MatchEdit">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setPlayer1ID(event.target.player1ID.value);
            setPlayer2ID(event.target.player2ID.value);
            setPlayer1Name(
              event.target.player1ID.selectedOptions[0].textContent
            );
            setPlayer2Name(
              event.target.player2ID.selectedOptions[0].textContent
            );
          }}
        >
          <label>Player 1</label>
          <select name="player1ID" id="player1ID">
            {playersList.map((e) => {
              return (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              );
            })}
          </select>
          <label>Player 2</label>
          <select name="player2ID" id="player2ID">
            {playersList.map((e) => {
              return (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              );
            })}
          </select>
          <button>Submit</button>
        </form>

        <h2 className="MatchEdit__title">Head to Head</h2>

        <div className="MatchEdit__players">
          <h3>{player1Name}</h3>
          <h3>{player2Name}</h3>
        </div>

        <div className="MatchEdit__wins">
          <h3>Wins</h3>
          <h3>Wins</h3>
        </div>

        <div className="MatchEdit__wins-count">
          {matchesLeft && <p>{matchesLeft.length}</p>}
          {matchesRight && <p>{matchesRight.length}</p>}
        </div>

        <div className="MatchEdit__previous-matches">
          <h3>Previous Matches</h3>
          {/* <p>{matchesLeft[0].score}</p> */}
          {matchesLeft &&
            matchesLeft.map((match) => (
              <p
                key={match.id}
              >{`${player1Name} bt ${player2Name} ${match.score} in ${match.year}`}</p>
            ))}
          {matchesRight &&
            matchesRight.map((match) => (
              <p
                key={match.id}
              >{`${player2Name} bt ${player1Name} ${match.score} in ${match.year}`}</p>
            ))}
        </div>
      </main>
    </>
  );
};

export default MatchEdit;
