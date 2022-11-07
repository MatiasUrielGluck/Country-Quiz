import "./game-layout.css";
import playingLogo from "../assets/playing_logo.svg";

export const GameLayout = ({ children }) => {
  return (
    <div className="game-layout">
      <div className="layout-container">
        <div className="subcontainer">
          <h1>Country quiz</h1>
          <img src={playingLogo} alt="let's play logo" />
          <div className="game-container">{children}</div>
        </div>
      </div>
      <footer>
        <p className="footer">
          created by <span className="footer-special">Matías Uriel Gluck</span>
        </p>
      </footer>
    </div>
  );
};
