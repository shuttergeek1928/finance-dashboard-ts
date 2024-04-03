import React from "react";
import LineChartCustomElement from "./linechart";
import StackedList from "./stackedlist";
import Highlight from "./highlight";
const CenterContent = () => {
  return (
    <>
      {/* SEARCH BAR, NOTIFICATIONS & ALERTS */}
      {/* <div className="flex h-1/6 w-full rounded m-0 p-2 content-gradient-r-1 drop-shadow-xl shadow-black items-center justify-between gap-2">
        <div className="flex w-full test-border">Search Bar</div>
        <div className="flex w-1/10 test-border">Notifications</div>
        <div className="flex w-1/10 test-border">Alerts</div>
      </div> */}

      {/* SEARCH BAR, NOTIFICATIONS & ALERTS */}
      <div className="flex h-[10%] w-full rounded m-0 py-2 items-center justify-between gap-2">
        <div className="flex h-full w-full drop-shadow-xl shadow-black  items-center justify-center rounded-lg bg-[#fbf5eb] p-2">
          Search Bar
        </div>
        <div className="flex h-full w-1/10 drop-shadow-xl shadow-black items-center justify-center rounded-lg bg-[#fbf5eb] p-2">
          Notifications
        </div>
        <div className="flex h-full w-1/10 drop-shadow-xl shadow-black items-center justify-center rounded-lg bg-[#fbf5eb] p-2">
          Alerts
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="flex h-[20%] w-full rounded py-2 items-center justify-between gap-2">
        <div className="flex flex-1 h-full w-1/3 drop-shadow-xl shadow-black items-center justify-center rounded-lg bg-[#fbf5eb]">
          <Highlight size="100px" color="green.400" progress={15}/>
        </div>
        <div className="flex h-full w-1/3 drop-shadow-xl shadow-black items-center justify-center rounded-lg bg-[#fbf5eb]">
          <Highlight size="100px" color="blue.400" progress={55}/>
        </div>
        <div className="flex h-full w-1/3 drop-shadow-xl shadow-black items-center justify-center rounded-lg bg-[#fbf5eb]">
          <Highlight size="100px" color="red.400" progress={74}/>
        </div>
      </div>

      {/* GRAPHS */}
      <div className="flex h-[40%] w-full p-2 drop-shadow-xl shadow-black items-center justify-center rounded-lg bg-[#fbf5eb]">
        <LineChartCustomElement />
      </div>

      {/* TRANSACTIONS HISTORY */}
      <div className="flex h-[30%] w-full my-2 p-2 drop-shadow-xl shadow-black  items-center justify-center rounded-lg bg-[#fbf5eb] overflow-clip overflow-y-scroll scrollbar-thin scrollbar-thumb-teal-900 scrollbar-track-transparent">
        <StackedList />
      </div>
    </>
  );
};

export default CenterContent;
