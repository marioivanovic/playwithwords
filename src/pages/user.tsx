import "./user.css";

const User: React.FC = () => {
  return (
    <div className="global-content">
      <h1 className="title-user">Play With Words</h1>
      <div className="header-user">
        <h2 className="header-title">Votre profil</h2>
      </div>
      <div className="main-container">
        <h3>Vos statistiques</h3>

        <div className="stats">
          <p> Nombre de parties jouées : 0</p>
          <p> Nombre de tentatives : 0</p>
          <p> Nombre de mots trouvés : 0</p>
        </div>
      </div>
    </div>
  );
};

export default User;
