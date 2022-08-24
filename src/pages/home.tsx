import "./home.css";

const Home: React.FC = () => {
  // const containerGame = document.getElementsByClassName("main-container");

  return (
    <div className="container">
      <h1 className="title">Play With Words</h1>

      <div className="header">
        <button className="arrowReset">
          <img
            src="./../../public//assets/icon/refresh.svg"
            alt="reset arrow"
          />
        </button>
        <div className="score">Votre score : 0</div>
      </div>

      <div className="game-container">
        <div className="grid-container">
          <div className="row">
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
          </div>
          <div className="row">
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
          </div>
          <div className="row">
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
          </div>
          <div className="row">
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
          </div>
          <div className="row">
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
          </div>
          <div className="row">
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
          </div>
        </div>
      </div>
      <div className="keyboard-container">
        <div className="keyboard">
          <button className="key">A</button>
          <button className="key">B</button>
          <button className="key">C</button>
          <button className="key">D</button>
          <button className="key">E</button>
          <button className="key">F</button>
          <button className="key">G</button>
          <button className="key">H</button>
          <button className="key">I</button>
          <button className="key">J</button>
          <button className="key">K</button>
          <button className="key">L</button>
          <button className="key">M</button>
          <button className="key">N</button>
          <button className="key">O</button>
          <button className="key">P</button>
          <button className="key">Q</button>
          <button className="key">R</button>
          <button className="key">S</button>
          <button className="key">T</button>
          <button className="key">U</button>
          <button className="key">V</button>
          <button className="key">W</button>
          <button className="key">X</button>
          <button className="key">Y</button>
          <button className="key">Z</button>
        </div>
      </div>
    </div>
  );
};

export default Home;