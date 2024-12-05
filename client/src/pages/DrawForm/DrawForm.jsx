import './DrawForm.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DrawForm = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { year } = useParams();

  const populateRounds = async () => {
    const response = await axios.post(`${baseUrl}/draw/new/${year}`);
    console.log(response);
    return response;
  };

  const postDraw = async (e, year) => {
    e.preventDefault();

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
    return res;
  };

  const player1 = 'H Mills';
  const player2 = 'G Cooke-Yarborough';
  const player3 = 'H Taylour';
  const player4 = 'E Barry';
  const player5 = 'F Lowe';
  const player6 = 'H Bailey';
  const player7 = 'P Fuller';
  const player8 = 'M Bailey';

  return (
    <>
      <form onSubmit={(e) => postDraw(e, year)}>
        <label name="OR1a" className="DrawForm__input">
          Opening Round 1a
          <select name="OR1a" id="OR1a">
            <option value={player1}>{player1}</option>
            <option value={player2}>{player2}</option>
            <option value={player3}>{player3}</option>
            <option value={player4}>{player4}</option>
            <option value={player5}>{player5}</option>
            <option value={player6}>{player6}</option>
            <option value={player7}>{player7}</option>
            <option value={player8}>{player8}</option>
          </select>
        </label>
        <label name="OR1b" className="DrawForm__input">
          Opening Round 1b
          <select name="OR1b" id="OR1b">
            <option value={player1}>{player1}</option>
            <option value={player2}>{player2}</option>
            <option value={player3}>{player3}</option>
            <option value={player4}>{player4}</option>
            <option value={player5}>{player5}</option>
            <option value={player6}>{player6}</option>
            <option value={player7}>{player7}</option>
            <option value={player8}>{player8}</option>
          </select>
        </label>
        <label name="OR2a" className="DrawForm__input">
          Opening Round 2a
          <select name="OR2a" id="OR2a">
            <option value={player1}>{player1}</option>
            <option value={player2}>{player2}</option>
            <option value={player3}>{player3}</option>
            <option value={player4}>{player4}</option>
            <option value={player5}>{player5}</option>
            <option value={player6}>{player6}</option>
            <option value={player7}>{player7}</option>
            <option value={player8}>{player8}</option>
          </select>
        </label>
        <label name="OR2b" className="DrawForm__input">
          Opening Round 2b
          <select name="OR2b" id="OR2b">
            <option value={player1}>{player1}</option>
            <option value={player2}>{player2}</option>
            <option value={player3}>{player3}</option>
            <option value={player4}>{player4}</option>
            <option value={player5}>{player5}</option>
            <option value={player6}>{player6}</option>
            <option value={player7}>{player7}</option>
            <option value={player8}>{player8}</option>
          </select>
        </label>
        <label name="OR3a" className="DrawForm__input">
          Opening Round 3a
          <select name="OR3a" id="OR3a">
            <option value={player1}>{player1}</option>
            <option value={player2}>{player2}</option>
            <option value={player3}>{player3}</option>
            <option value={player4}>{player4}</option>
            <option value={player5}>{player5}</option>
            <option value={player6}>{player6}</option>
            <option value={player7}>{player7}</option>
            <option value={player8}>{player8}</option>
          </select>
        </label>
        <label name="OR3b" className="DrawForm__input">
          Opening Round 3b
          <select name="OR3b" id="OR3b">
            <option value={player1}>{player1}</option>
            <option value={player2}>{player2}</option>
            <option value={player3}>{player3}</option>
            <option value={player4}>{player4}</option>
            <option value={player5}>{player5}</option>
            <option value={player6}>{player6}</option>
            <option value={player7}>{player7}</option>
            <option value={player8}>{player8}</option>
          </select>
        </label>
        <label name="OR4a" className="DrawForm__input">
          Opening Round 4a
          <select name="OR4a" id="OR4a">
            <option value={player1}>{player1}</option>
            <option value={player2}>{player2}</option>
            <option value={player3}>{player3}</option>
            <option value={player4}>{player4}</option>
            <option value={player5}>{player5}</option>
            <option value={player6}>{player6}</option>
            <option value={player7}>{player7}</option>
            <option value={player8}>{player8}</option>
          </select>
        </label>
        <label name="OR4b" className="DrawForm__input">
          Opening Round 4b
          <select name="OR4b" id="OR4b">
            <option value={player1}>{player1}</option>
            <option value={player2}>{player2}</option>
            <option value={player3}>{player3}</option>
            <option value={player4}>{player4}</option>
            <option value={player5}>{player5}</option>
            <option value={player6}>{player6}</option>
            <option value={player7}>{player7}</option>
            <option value={player8}>{player8}</option>
          </select>
        </label>
        <button type="Submit">Submit</button>
      </form>
      <button onClick={populateRounds}>Populate rounds for {year}</button>
    </>
  );
};

export default DrawForm;
