import React from "react";
import "./cards.scss";
import { ReactComponent as Qrcode } from "../../assets/images/qrcode.svg";
const Card = ({ zone }) => {
  const { zoneId, zoneName, siteid, zoneLink } = zone;
  return (
    <div className="card">
      <div className="text">
        <header>
          <h3 className="title">{zoneName}</h3>
          <div className="badge">
            <span>Tables</span>
          </div>
        </header>
        <footer>
          <ul className="info">
            <li>ZONE ID: {zoneId}</li>
            <li>SITE ID:{siteid}</li>
            <li>
              <ul className="action">
                <li>
                  <a href={`whatsapp://send?text=${zoneLink}`}>Share</a>
                </li>
              </ul>
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
