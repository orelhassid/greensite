import React from "react";
import { Link } from "react-router-dom";
import "./cards.scss";
import QRCodeElement from "../elements/QRCodeElement";
import { ReactComponent as CopyIcon } from "../../assets/icons/copy.svg";
import { ReactComponent as LinkIcon } from "../../assets/icons/link.svg";
import ButtonIcon from "../elements/ButtonIcon";
import { toast } from "react-toastify";

const HubCard = ({ hub }) => {
  const { name, hid } = hub;

  const shareLink = `https://${window.location.hostname}/visitor/checkin/${hid}`;
  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(shareLink);
    toast.success("Copy to clipboard");
  };
  return (
    <div className="card">
      <div className="text">
        <header>
          <h3 className="title">{name}</h3>
        </header>
        <footer>
          <ul className="info">
            <li>SITE ID: {hid}</li>
            <li>
              <ul className="action">
                <li>
                  <ButtonIcon
                    icon={<CopyIcon />}
                    onClick={(e) => copyToClipboard(e)}
                  />
                </li>
                <li>
                  <Link to={`/visitor/checkin/${hid}`}>
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

export default HubCard;
