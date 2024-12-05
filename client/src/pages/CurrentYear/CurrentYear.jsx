import Placings from '../../Components/Tournament/Placings/Placings';
import Tournament from '../../Components/Tournament/Tournament/Tournament';
import { useParams } from 'react-router-dom';
import './CurrentYear.scss';

const CurrentYear = () => {
  const params = useParams();
  const year = params.year;

  return (
    <>
      <Tournament tournamentYear={year} />
      <Placings year={year} />
    </>
  );
};

export default CurrentYear;
