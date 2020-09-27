import React from "react";
import "./cards.scss";
import QRCodeElement from "../elements/QRCodeElement";
import { ReactComponent as WhatsAppIcon } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as LinkIcon } from "../../assets/icons/link.svg";
import { Link as div, Link } from "react-router-dom";

const Card = ({ zone, link }) => {
  // const { zoneId, zoneName, siteid, zoneLink, zoneType } = zone;
  const { zone_id: zid, name, hid, type } = zone;
  const shareLink = `https://${window.location.hostname}${link}`;
  const colors = ["red", "green", "orange"];
  return (
    <div to={`/zones/${hid}/${zid}`} className="card">
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
            <li>ZONE ID: {zid}</li>
            <li>SITE ID:{hid}</li>
            <li>
              <ul className="action">
                <li>
                  <a href={`whatsapp://send?text=${shareLink}`}>
                    <WhatsAppIcon />
                  </a>
                </li>
                <li>
                  <Link to={`/hub/zone/${hid}/${zid}`}>
                    <LinkIcon />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </footer>
      </div>
      <div className="image">
        <QRCodeElement link={shareLink} />
      </div>
    </div>
  );
};

export default Card;
