import { useState } from "react";
import "./App.css";

function App() {
  const [isShareActive, setIsShareActive] = useState(false);

  return (
    <div className="article-card">
      <div className="article-image">
        <img src="/assets/images/drawers.jpg" alt="Furniture" />
      </div>

      <div className="article-content">
        <h2>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
        <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>

        <div className="article-footer">
          <div className="author-info">
            <img src="/assets/images/avatar-michelle.jpg" alt="Michelle" className="author-img" />
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
            <img src="/assets/images/icon-share.svg" alt="Share" />
          </button>

          {isShareActive && (
            <div className="share-popup">
              <span>SHARE</span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/icon-facebook.svg" alt="Facebook" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/icon-twitter.svg" alt="Twitter" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/icon-pinterest.svg" alt="Pinterest" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;