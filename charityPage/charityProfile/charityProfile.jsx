import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./charityProfile.module.css";
import images from "../../img";

const charityProfile = () => {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className={Style.charityProfile}>
      <div className={Style.charityProfile_box}>
        <div className={Style.charityProfile_box_left}>
          <Image
            src={images.nft_image_1}
            alt="nft image"
            width={400}
            height={400}
            className={Style.charityProfile_box_left_img}
          />

          <div className={Style.charityProfile_box_left_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
          </div>
        </div>

        <div className={Style.charityProfile_box_middle}>
          <h1>Awesome NFTs Charity</h1>
          <p>
            One Body Village - OBV is a place where we nurture children who have endured sexual abuse and exploitation, or are at high risk of becoming victims of sexual exploitation.
          </p>

          <div className={Style.charityProfile_box_middle_box}>
            {cardArray.map((el, i) => (
              <div
                className={Style.charityProfile_box_middle_box_item}
                key={i + 1}
              >
                <small>Floor price</small>
                <p>${i + 1}95,4683</p>
                <span>+ {i + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default charityProfile;
