import { useState } from "react";
import "./App.css";
import avatar from './assets/images/avatar-michelle.jpg';
import drawers from './assets/images/drawers.jpg';
import facebook from './assets/images/icon-facebook.svg';
import twitter from './assets/images/icon-twitter.svg';
import pinterest from './assets/images/icon-pinterest.svg';
import shareIcon from './assets/images/icon-share.svg';

function App() {
  const [isShareActive, setIsShareActive] = useState(false);
  console.log(isShareActive);

  return (
    <div className="article-card">
      <div className="article-image">
        <img src={drawers} alt="Furniture" />
      </div>

      <div className="article-content">
        <h2>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
        <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>

        <div className="article-footer">
          <div className="author-info">
            <img src={avatar} alt="Michelle" className="author-img" />
            <div>
              <h4>Michelle Appleton</h4>
              <span>28 Jun 2020</span>
            </div>
          </div>

          <button
            aria-label="Share article"
            className={`share-btn ${isShareActive ? "active" : ""}`}
            onClick={() => setIsShareActive(!isShareActive)}
          >
            <img src={shareIcon} alt="Share" />
          </button>

          {isShareActive && (
            <div className="share-popup">
              <span>SHARE</span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={twitter}  alt="Twitter" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={pinterest} alt="Pinterest" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;