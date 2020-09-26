import React from "react";
import QRCode from "qrcode.react";
import ButtonLink from "./ButtonLink";

const QRCodeElement = ({ link }) => {
  const downloadQR = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="qr-container">
      <QRCode renderAs="svg" id="123456" value={link} />
      <ButtonLink style="text" label="Download" download />
    </div>
  );
};

QRCodeElement.defaultProps = {
  link: "",
};
export default QRCodeElement;
