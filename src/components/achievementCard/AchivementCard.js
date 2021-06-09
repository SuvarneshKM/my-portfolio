import React from "react";

export default function AchivementCard({cardInfo}) {


  return (
    <div className="certificate-card">
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image"></img>
      </div>
    </div>
  );
}
