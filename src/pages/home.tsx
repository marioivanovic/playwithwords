import "./home.css";

const Home: React.FC = () => {
  // const containerGame = document.getElementsByClassName("main-container");

  return (
    <div className="container">
      <h1 className="title">Play With Words</h1>

      <div className="header">
        <div className="arrowReset">
          <img src="./../../public//assets/icon/refresh.svg" alt="reset arrow" />
        </div>
        <div className="score">Votre score : 0</div>
      </div>

      <div className="main-container"></div>
    </div>
  );
};

export default Home;

