import React from "react";

//INTERNAL IMPORT
import Style from "../styles/charity.module.css";
import images from "../img";
import {
  Banner,
  CharityProfile,
  NFTCardTwo,
} from "../charityPage/charityIndex";
import { Slider, Brand } from "../components/componentsindex";
import Filter from "../components/Filter/Filter";


const charity = () => {
  const charityArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  return (
    <div className={Style.charity}>
       <Banner bannerImage={images.creatorbackground1} />
       <CharityProfile />
       <Filter />
       <NFTCardTwo NFTData={charityArray} />

      <Slider />
      <Brand />
      </div>
  );
};

export default charity;
