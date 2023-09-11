import React, { useState, useEffect } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./FollowerTab.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";
import Image from "../../img";

const FollowerTab = () => {
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
  const FollowingArray = [
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
  const NewsArray = [
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

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

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
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2> Top Creators</h2>
        <div className={Style.followerTab_tabs}>
          <div className={Style.followerTab_tabs_btn}>
            <button onClick={() => openPopular()}>
              <RiUserFollowFill /> Popular
            </button>
            <button onClick={() => openFollower()}>
              <RiUserFollowFill /> Following
            </button>
            <button onClick={() => openNews()}>
              <RiAwardLine /> NoteWorthy
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className={Style.followerTab_box}>
          {CardArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.followerTab_box}>
          {FollowingArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.followerTab_box}>
          {NewsArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      <div className={Style.followerTab_member}>
        <div className={Style.followerTab_member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become, author</a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
