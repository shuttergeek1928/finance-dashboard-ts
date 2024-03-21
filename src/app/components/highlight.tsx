"use client";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React from "react";

const Highlight = ({ size, color}: { size: string, color:string }) => {
  return (
    <>
      <div className="flex flex-col max-h-full w-full items-center justify-center px-2 py-2 box-border">
        <div className="flex w-full items-center justify-center gap-10">
          <section>
            <h3>Total Finance</h3>
            <h1>&#8377; 50,640</h1>
          </section>
          <CircularProgress value={40} color={color} size={size}>
            <CircularProgressLabel>40%</CircularProgressLabel>
          </CircularProgress>
        </div>
        <hr className="bg-gray-200 w-full border-10" />
        <div className="flex items-center justify-center p-2 gap-2">
          <div className="flex flex-row items-center justify-center rounded-xl p-1 bg-green-100">
            <ArrowUpIcon color="green.400" />
            <h3>10%</h3>
          </div>
          <h3>Than the last week</h3>
        </div>
      </div>
    </>
  );
};

export default Highlight;
