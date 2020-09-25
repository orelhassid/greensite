import React from "react";
import "./cards.scss";
import { ReactComponent as Qrcode } from "../../assets/images/qrcode.svg";
const Card = ({ zone }) => {
  // const { zoneId, zoneName, siteid, zoneLink, zoneType } = zone;
  const {
    zoneId: id,
    zoneName: name,
    siteid: hid,
    zoneLink,
    zoneType: type,
  } = zone;
  return (
    <div className="card">
      <div className="text">
        <header>
          <h3 className="title">{name}</h3>
          <div className="badge">
            <span>{type}</span>
          </div>
        </header>
        <footer>
          <ul className="info">
            <li>ZONE ID: {id}</li>
            <li>SITE ID:{hid}</li>
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
