"use client";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React from "react";

const Highlight = ({
  size,
  color,
  progress,
}: {
  size: string;
  color: string;
  progress: number;
}) => {
  return (
    <>
      <div className="flex max-h-full w-full items-center justify-between p-2 box-border">
        <div className="flex flex-col items-start justify-start gap-2">
          <section>
            <h3 className="font-semibold">Total Finance</h3>
            <h1>&#8377; 50,640</h1>
          </section>
          <hr className="bg-gray-100 w-full border-10" />
          <div className="flex items-center justify-start rounded-xl gap-1">
            <div className="flex items-center bg-green-100">
              <ArrowUpIcon color="green.400" />
              <h3>10%</h3>
            </div>
            <h3 className="text-sm">Than the last week</h3>
          </div>
        </div>
        <div className="flex flex-col box-border">
          <CircularProgress value={progress} color={color} size={size}>
            <CircularProgressLabel>{progress}%</CircularProgressLabel>
          </CircularProgress>
        </div>
      </div>
    </>
  );
};

export default Highlight;
