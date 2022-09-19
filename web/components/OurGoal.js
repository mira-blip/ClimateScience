import Image from "next/image";
import React from "react";

const OurGoal = ({ bigText, miniText, goals }) => {
  console.log(goals);
  return (
    <div className="flex justify-center items-center w-2/3 h-screen">
      <div className="flex justify-between items-center flex-col h-3/5">
        <div className="flex items-center flex-col ">
          <div className="text-6xl font-bold mb-8">{bigText}</div>
          <div className="text-3xl">{miniText}</div>
        </div>
        <div className="flex justify-between">
          {goals.map((goal) => {
            const { goaltext, goalPicture } = goal;
            console.log(goaltext);
            const { url } = goalPicture;
            return (
              <div
                className="flex flex-col justify-center items-center border-solid border-black border-2 h-96"
                style={{ width: "30%" }}
              >
                {/* <Image src={url} height={150} width={150} /> */}
                {/* <div className="flex justify-center items-center"> */}
                {goaltext}
                {/* </div> */}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-96 w-96">
        asfasf
      </div>
    </div>
  );
};

export default OurGoal;
