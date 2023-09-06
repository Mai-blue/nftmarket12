import React, { useState, useEffect } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Charity.module.css";
import DaysComponent from "./DaysComponents/DaysComponents";

const Charity = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const CardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const followingArray = [1, 2, 3, 4];
  const newsArray = [1, 2, 3, 4, 5, 6];

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };

  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };

  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };
  return (
    <div className={Style.charity}>
      <div className={Style.charity_title}>
        <h2>Top List Creators</h2>
        <div className={Style.charity_charitys}>
          <div className={Style.charity_charitys_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill /> 24 hours
            </button>
            <button onClick={() => openFollower()}>
              <BsCalendar3 /> 7 days
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill /> 30 days
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={Style.charity_box}>
          {CardArray.map((el, i) => (
            <DaysComponent key={i + 1} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.charity_box}>
          {followingArray.map((el, i) => (
            <DaysComponent key={i + 1} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.charity_box}>
          {newsArray.map((el, i) => (
            <DaysComponent key={i + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Charity;
