import React from "react";
import CenterContent from "../components/center_content";
import NavigationTab from "../components/navigationtab";
import About from "../components/about";
const Finances = () => {
  return (
    <>
      {/* MAIN CONTAINER */}
      <div className="h-full w-full flex flex-row justify-between overflow-hidden">
        {/* NAVIGATION */}
        <div className="flex flex-col justify-between rounded-2xl drop-shadow-xl shadow-black m-5 p-4 finLanding-gradient-t-1 box-border">
          <NavigationTab />
        </div>
        {/* CONTENT */}
        <div className="flex flex-col rounded-2xl drop-shadow-xl shadow-black my-5 px-4 finLanding-gradient-t-1 items-center justify-between gap-[0.75rem] w-2/3">
          <CenterContent />
        </div>
        {/* ABOUT & INSIGHTS */}
        <div className="flex flex-col flex-1">
          <div className="flex flex-col rounded-2xl drop-shadow-xl shadow-black mt-5 mx-5 p-4 finLanding-gradient-t-1 items-center justify-center h-2/3">
            <About/>
          </div>
          <div className="flex flex-1 rounded-2xl drop-shadow-xl shadow-black m-5 p-4 finLanding-gradient-t-1 items-center justify-center">
            PINNED INSIGHTS TAB
          </div>
        </div>
      </div>
    </>
  );
};

export default Finances;
