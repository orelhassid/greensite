import React from "react";
import "./cards.scss";
import QRCodeElement from "../elements/QRCodeElement";

const Card = ({ zone, link }) => {
  // const { zoneId, zoneName, siteid, zoneLink, zoneType } = zone;
  const { id, name, hid, type } = zone;
  const shareLink = `https://${window.location.hostname}${link}`;
  return (
    <div className="card">
      <div className="text">
        <header>
          <h3 className="title">{name}</h3>
          {type && (
            <div className="badge">
              <span>{type}</span>
            </div>
          )}
        </header>
        <footer>
          <ul className="info">
            <li>ZONE ID: {id}</li>
            <li>SITE ID:{hid}</li>
            <li>
              <ul className="action">
                <li>
                  <a href={`whatsapp://send?text=${shareLink}`}>Share</a>
                </li>
              </ul>
            </li>
          </ul>
        </footer>
      </div>
      <div className="image">
        <QRCodeElement />
      </div>
    </div>
  );
};

export default Card;
