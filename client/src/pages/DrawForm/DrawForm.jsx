import './DrawForm.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { use } from 'react';

const DrawForm = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { year } = useParams();
  const [players, setPlayers] = useState(false);
  const [toggleMessage, setToggleMessage] = useState(false);
  const [complete, setComplete] = useState(false);

  const postDraw = async (e, year) => {
    e.preventDefault();

    const match1player1 = e.target.OR1a.value;
    const match1player2 = e.target.OR1b.value;
    const match2player1 = e.target.OR2a.value;
    const match2player2 = e.target.OR2b.value;
    const match3player1 = e.target.OR3a.value;
    const match3player2 = e.target.OR3b.value;
    const match4player1 = e.target.OR4a.value;
    const match4player2 = e.target.OR4b.value;

    if (
      !match1player1 ||
      !match1player2 ||
      !match2player1 ||
      !match2player2 ||
      !match3player1 ||
      !match3player2 ||
      !match4player1 ||
      !match4player2
    ) {
      setToggleMessage('Please select a player for each match');
      return;
    }

    const selectedPlayers = [
      match1player1,
      match1player2,
      match2player1,
      match2player2,
      match3player1,
      match3player2,
      match4player1,
      match4player2,
    ];

    const hasDuplicates =
      new Set(selectedPlayers).size !== selectedPlayers.length;

    if (hasDuplicates) {
      setToggleMessage('A player cannot be selected more than once');
      return;
    }

    const drawObj = {
      year: year,
      match1player1: e.target.OR1a.value,
      match1player2: e.target.OR1b.value,
      match2player1: e.target.OR2a.value,
      match2player2: e.target.OR2b.value,
      match3player1: e.target.OR3a.value,
      match3player2: e.target.OR3b.value,
      match4player1: e.target.OR4a.value,
      match4player2: e.target.OR4b.value,
    };
    console.log(drawObj);

    const res = await axios.post(`${baseUrl}/draw/${year}`, drawObj);
    setToggleMessage('The draw has been populated!');
    setComplete(true);
    return res;
  };

  const getPlayers = async () => {
    const response = await axios.get(`${baseUrl}/draw/players`);

    return response.data;
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersArray = await getPlayers();

      setPlayers(playersArray);
    };
    fetchPlayers();
  }, []);

  if (!players) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main>
        <h2 className="DrawForm__title">Set draw for {year} year</h2>
        <form
          className="DrawForm__form"
          onSubmit={(e) => {
            postDraw(e, year);
          }}
        >
          <h3>Opening Round 1</h3>
          <label name="OR1a" className="DrawForm__input">
            Player A
            <select className="DrawForm__form-items" name="OR1a" id="OR1a">
              <option value={''}>----Please select a player----</option>
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))}
            </select>
          </label>
          <label name="OR1b" className="DrawForm__input">
            Player B
            <select className="DrawForm__form-items" name="OR1b" id="OR1b">
              <option value={''}>----Please select a player----</option>
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))}
            </select>
          </label>
          <h3>Opening Round 2</h3>
          <label name="OR2a" className="DrawForm__input">
            Player A
            <select className="DrawForm__form-items" name="OR2a" id="OR2a">
              <option value={''}>----Please select a player----</option>
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))}
            </select>
          </label>
          <label name="OR2b" className="DrawForm__input">
            Player B
            <select className="DrawForm__form-items" name="OR2b" id="OR2b">
              <option value={''}>----Please select a player----</option>
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))}
            </select>
          </label>
          <h3>Opening Round 3</h3>
          <label name="OR3a" className="DrawForm__input">
            Player A
            <select className="DrawForm__form-items" name="OR3a" id="OR3a">
              <option value={''}>----Please select a player----</option>
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))}
            </select>
          </label>
          <label name="OR3b" className="DrawForm__input">
            Player B
            <select className="DrawForm__form-items" name="OR3b" id="OR3b">
              <option value={''}>----Please select a player----</option>
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))}
            </select>
          </label>
          <h3>Opening Round 4</h3>
          <label name="OR4a" className="DrawForm__input">
            Player A
            <select className="DrawForm__form-items" name="OR4a" id="OR4a">
              <option value={''}>----Please select a player----</option>
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))}
            </select>
          </label>
          <label name="OR4b" className="DrawForm__input">
            Player B
            <select className="DrawForm__form-items" name="OR4b" id="OR4b">
              <option value={''}>----Please select a player----</option>
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))}
            </select>
          </label>
          <div className="DrawForm__buttons-wrapper">
            <button className="DrawForm__button" type="Submit">
              Submit
            </button>
            {toggleMessage ? (
              <p
                className={
                  complete
                    ? 'DrawForm__submit-message--success'
                    : 'DrawForm__submit-message'
                }
              >
                {toggleMessage}
              </p>
            ) : (
              <p className="DrawForm__submit-message">Remember to hit SUBMIT</p>
            )}
            <Link to={`/${year}`}>
              <button className="DrawForm__button">
                Go to {year} tournament
              </button>
            </Link>
          </div>
        </form>
      </main>

      {/* <button onClick={populateRounds}>Populate rounds for {year}</button> */}
    </>
  );
};

export default DrawForm;
