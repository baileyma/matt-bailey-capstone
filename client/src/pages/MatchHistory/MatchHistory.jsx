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

  const [playersList, setPlayersList] = useState(null);

  const [player1Name, setPlayer1Name] = useState(null);
  const [player2Name, setPlayer2Name] = useState(null);

  const getPlayers = async () => {
    const response = await axios.get(`${baseUrl}/draw/players`);
    return response.data;
  };

  // Array length 11 of objects { id name }
  // The form should have a list of names in the text and a list of IDs in the value

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersTable = await getPlayers();
      setPlayersList(playersTable);
    };

    fetchPlayers();
  }, []);

  // Finally, once we have the player ids from the user selecting the corresponding names, we get the
  // matches from the backend and stick them in state variables

  const [matches, setMatches] = useState([]);

  const getMatches = async (player1ID, player2ID) => {
    const response = await axios.get(
      `${baseUrl}/players/head-to-head/?player1ID=${player1ID}&player2ID=${player2ID}`
    );
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const fetchMatches = async () => {
      const matches = await getMatches(player1ID, player2ID);
      setMatches(matches);
    };

    fetchMatches();
  }, [player1ID, player2ID]);

  // The below code loops through the matches array counting the number of wins for each player

  let player1Wins = 0;
  let player2Wins = 0;

  for (let i = 0; i < matches.length; i += 1) {
    if (matches[i].winner_name === player1Name) {
      player1Wins += 1;
    }
    if (matches[i].winner_name !== player1Name) {
      player2Wins += 1;
    }
  }

  if (!playersList) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main className="MatchEdit">
        <form
          className="MatchEdit__form"
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
          <div className="MatchEdit__options-wrapper">
            <select
              className="MatchEdit__form-items"
              name="player1ID"
              id="player1ID"
            >
              <option value="">---Please select a player---</option>
              {playersList.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>

            <select
              className="MatchEdit__form-items"
              name="player2ID"
              id="player2ID"
            >
              <option value="">---Please select a player---</option>
              <option key={0} value={0}>
                All Matches
              </option>
              {playersList.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button className="MatchEdit__button">Display past results</button>
        </form>

        <h2 className="MatchEdit__title">
          {Number(player2ID) !== 0
            ? 'Head to Head'
            : `Past results: ${player1Name}`}
        </h2>

        <div className="MatchEdit__players">
          <h3>{Number(player2ID) !== 0 ? `${player1Name}` : ''}</h3>

          <h3>{Number(player2ID) !== 0 ? `${player2Name}` : ''}</h3>
        </div>

        <div className="MatchEdit__wins">
          <h3>Wins</h3>
          <h3>{Number(player2ID) !== 0 ? `Wins` : 'Losses'}</h3>
        </div>

        <div className="MatchEdit__wins-count">
          {<p>{player1Wins}</p>}
          {<p>{player2Wins}</p>}
        </div>

        <div className="MatchEdit__previous-matches">
          <h3>Previous Matches</h3>

          {matches &&
            matches.map((match) => (
              <p className="MatchEdit__text" key={match.id}>
                {`${match.year} ${match.round}, ${match.draw} Draw:`} <br />{' '}
                {`${match.winner_name} bt ${match.loser_name} ${match.score}`}
              </p>
            ))}
        </div>
        <p className="MatchEdit__end">-------</p>
      </main>
    </>
  );
};

export default MatchEdit;
