import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (Props) => {
  return (
    <div className="box bannerBox group">
      <Link to={"/"}>
        <img
          src={Props.img}
          className="w-full transition-all overflow-hidden rounded-lg group-hover:scale-105 group-hover:rotate-1"
          alt="banner"
        />
      </Link>
    </div>
  );
};

export default BannerBox;
