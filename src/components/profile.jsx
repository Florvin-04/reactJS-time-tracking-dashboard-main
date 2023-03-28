import React from "react";
import avatar from "../../images/image-jeremy.png";
import "./profile.scss";
function profile({ setTimeFrame, timeFrame }) {
  // console.log(timeFrame);
  const handleClick = (e) => {
    const target = e.target;
    const time = target.getAttribute("data-timeframe-button");
    // console.log(time);
    setTimeFrame(time);
  };

  return (
    <div className="profile__wrapper">
      <div className="profile">
        <div className="profile__img--container">
          <img src={`${avatar}`} alt="" />
        </div>

        <div className="profile__info--container">
          <p className="profile-title">Report for</p>
          <p className="profile-name">Jeremy Robson</p>
        </div>
      </div>

      <div className="profile__buttons">
        <button className="daily" data-timeframe-button="daily" onClick={handleClick} data-active-button={timeFrame === "daily" ? true : null}>
          Daily
        </button>
        <button className="weekly" data-timeframe-button="weekly" onClick={handleClick} data-active-button={timeFrame === "weekly" ? true : null}>
          Weekly
        </button>
        <button className="monthly" data-timeframe-button="monthly" onClick={handleClick} data-active-button={timeFrame === "monthly" ? true : null}>
          Monthly
        </button>
      </div>
    </div>
  );
}

export default profile;
