import React, { useState, useEffect } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Charity.module.css";
import DaysComponent from "./DaysComponents/DaysComponents";
import Image from "../../img";

const Charity = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const CardArray = [
    {
      background: Image.creatorbackground2,
      user: Image.user3, 
    },
    {
      background: Image.creatorbackground10,
      user: Image.user2, 
    },
    {
      background: Image.creatorbackground1,
      user: Image.user8, 
    },
    {
      background: Image.creatorbackground6,
      user: Image.user9, 
    },
    {
      background: Image.creatorbackground8,
      user: Image.user4, 
    },
    {
      background: Image.creatorbackground9,
      user: Image.user5, 
    },
    {
      background: Image.creatorbackground7,
      user: Image.user7, 
    },
    {
      background: Image.creatorbackground4,
      user: Image.user10, 
    },

  ];
  const newsArray = [
    {
      background: Image.creatorbackground4,
      user: Image.user4, 
    },
    {
      background: Image.creatorbackground10,
      user: Image.user10, 
    },
    {
      background: Image.creatorbackground9,
      user: Image.user9, 
    },
    {
      background: Image.creatorbackground1,
      user: Image.user1, 
    },
    {
      background: Image.creatorbackground3,
      user: Image.user3, 
    },
    {
      background: Image.creatorbackground6,
      user: Image.user6, 
    },

  ];
  const followingArray = [
    {
      background: Image.creatorbackground6,
      user: Image.user9, 
    },
    {
      background: Image.creatorbackground8,
      user: Image.user4, 
    },
    {
      background: Image.creatorbackground9,
      user: Image.user5, 
    },
    {
      background: Image.creatorbackground7,
      user: Image.user7, 
    },
    {
      background: Image.creatorbackground4,
      user: Image.user10, 
    },
  ];

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
        <h2>Top Charities</h2>
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
            <DaysComponent key={i + 1} i = {i} el={el}/>
          ))}
        </div>
      )}

      {following && (
        <div className={Style.charity_box}>
          {followingArray.map((el, i) => (
            <DaysComponent key={i + 1} i = {i} el={el}/>
          ))}
        </div>
      )}

      {news && (
        <div className={Style.charity_box}>
          {newsArray.map((el, i) => (
            <DaysComponent key={i + 1} i = {i} el={el}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Charity;
