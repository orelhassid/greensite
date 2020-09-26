import React from "react";
import "./cards.scss";
import { ReactComponent as Qrcode } from "../../assets/images/qrcode.svg";

const HubCard = ({ hub }) => {
  const { name, id, hid } = hub;
  const message = `Your HubID is *${hid}*`;
  return (
    <div className="card">
      <div className="text">
        <header>
          <h3 className="title">{name}</h3>
        </header>
        <footer>
          <ul className="info">
            <li>SITE ID:{id}</li>
            <li>
              <ul className="action">
                <li>
                  <a href={`whatsapp://send?text=${message}`}>Share</a>
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

export default HubCard;
