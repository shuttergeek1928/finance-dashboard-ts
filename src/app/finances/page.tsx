import React from "react";
import CenterContent from "../components/center_content";

const Finances = () => {
  return (
    <>
      {/* MAIN CONTAINER */}
      <div className="h-full w-full flex flex-row justify-between overflow-hidden">
        {/* NAVIGATION */}
        <div className="flex rounded-2xl drop-shadow-xl shadow-black m-5 p-10 finLanding-gradient-t-1 items-center justify-center">
          NAVIGATION TAB
        </div>
        {/* CONTENT */}
        <div className="flex flex-col rounded-2xl drop-shadow-xl shadow-black my-5 px-4 finLanding-gradient-t-1 items-center justify-between gap-[0.75rem] w-2/3">
          <CenterContent/>
        </div>
        {/* ABOUT & INSIGHTS */}
        <div className="flex flex-col">
          <div className="flex rounded-2xl drop-shadow-xl shadow-black mt-5 mx-5 p-10 finLanding-gradient-t-1 items-center justify-center h-2/3">
            ABOUT TAB
          </div>
          <div className="flex flex-1 rounded-2xl drop-shadow-xl shadow-black m-5 p-10 finLanding-gradient-t-1 items-center justify-center">
            PINNED INSIGHTS TAB
          </div>
        </div>
      </div>
    </>
  );
};

export default Finances;
