import React from "react";
import YouTube from "react-youtube";

const HeroPage = ({ bigText, smallText, url }) => {
  return (
    <center>
      <div
        className={`h-4/5 bg-gradient-to-br from-primary-purple to-pale-pink w-3/4 justify-between flex-row snap-center p-[40px] rounded-3xl rounded-br-[2.4rem]`}
      >
        <div>
          <h1 className="text-[2.6rem]">{bigText}</h1>
          <p className="text-[1.3rem]">{smallText}</p>
        </div>
        <YouTube videoId={url} />
      </div>
    </center>
  );
};

export default HeroPage;
