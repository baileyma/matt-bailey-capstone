import './Home.scss';
import image1 from '../../assets/data/Taylour-Mills.jpg';
import image2 from '../../assets/data/2024line-up.jpg';

const Home = () => {
  return (
    <main className="Home">
      <h2>About</h2>

      <p className="Home__text">
        The Henry Taylour Tennis Tournament was founded in 2009 by Henry
        Taylour, an Oxfordshire-born folk musician. Taylour hosted the first
        tournament in Shipton, Oxfordshire in September 2009.
      </p>

      <img
        src={image1}
        alt="Picture of Taylour and Mills"
        className="Home__photo"
      />

      <p className="Home__text">
        The winner of the first tournament was commercial mortgage broker Luke
        Cheetham. During the 2010s, software developer Matt Bailey won several
        tournaments and was long the institution's most successful player.
      </p>

      <p className="Home__text">
        However, Trinidadian drinks salesman Henry Mills, who rose to prominence
        in the late 2010s and early 2020s, is currently in the lead with eight
        tournaments.
      </p>

      <img src={image2} alt="Picture of 2024 lineup" className="Home__photo" />

      <p className="Home__text">
        In 2023, the format of the tournament was altered. This saw the creation
        of seperate main and plate draws. Whilst Mills was champion in the main
        draw, Peter Fuller won the inaugural plate competition.
      </p>
    </main>
  );
};

export default Home;
