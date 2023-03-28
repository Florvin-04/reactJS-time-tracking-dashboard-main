import React from "react";
import "./card.scss";

function card(props) {
  const timeFrame = props.timeFrame;
  return (
    <div className={`card ${props.title.toLowerCase()}`}>
      <div className="card__info">
        <div className="card__info--upper">
          <p className="card-title">work</p>
          <button className="card-btn">
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fillRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="card__info--lower">
          <h1 className="card__current-hrs">{props.timeframes[`${timeFrame}`].current}hrs</h1>
          <p className="card__previous-hrs">Last Week - {props.timeframes[`${timeFrame}`].previous}hrs</p>
        </div>
      </div>
    </div>
  );
}

export default card;
