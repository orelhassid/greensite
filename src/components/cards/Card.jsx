import React from "react";
import "./cards.scss";
import { ReactComponent as Qrcode } from "../../assets/images/qrcode.svg";
const Card = () => {
  return (
    <div className="card">
      <div className="text">
        <header>
          <h3 className="title">Card Title</h3>
          <div className="badge">
            <span>Tables</span>
          </div>
        </header>
        <footer>
          <ul className="info">
            <li>Zone ID</li>
            <li>Site ID</li>
            <li>
              <div className="actions">Share</div>
            </li>
          </ul>
        </footer>
      </div>
      <div className="image">
        <Qrcode />
      </div>
    </div>
  );
};

export default Card;
