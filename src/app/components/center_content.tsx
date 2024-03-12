import React from "react";

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
      <div className="flex h-1/6 w-full rounded m-0 py-2 items-center justify-between gap-2">
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
      <div className="flex h-1/3 w-full rounded py-2 items-center justify-between gap-2">
        <div className="flex h-full w-1/3 drop-shadow-xl shadow-black  items-center justify-center rounded-lg bg-[#fbf5eb]">
          HIGHLIGHTS 1
        </div>
        <div className="flex h-full w-1/3 drop-shadow-xl shadow-black items-center justify-center rounded-lg bg-[#fbf5eb]">
          HIGHLIGHTS 2
        </div>
        <div className="flex h-full w-1/3 drop-shadow-xl shadow-black items-center justify-center rounded-lg bg-[#fbf5eb]">
          HIGHLIGHTS 3
        </div>
      </div>
      
      {/* GRAPHS */}
      <div className="flex h-2/3 w-full p-2 drop-shadow-xl shadow-black  items-center justify-center rounded-lg bg-[#fbf5eb]">
        <h1>Graphs</h1>
      </div>

      {/* TRANSACTIONS HISTORY */}
      <div className="flex h-2/3 w-full my-2 p-2 drop-shadow-xl shadow-black  items-center justify-center rounded-lg bg-[#fbf5eb]">
        <h1>Recent Transactions</h1>
      </div>
    </>
  );
};

export default CenterContent;
