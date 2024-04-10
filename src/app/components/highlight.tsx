"use client";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  IResponse,
  IAccounts,
  IIncomeListModel,
} from "../models/responseModels";

const Highlight = ({
  size,
  color,
  progress,
}: {
  size: string;
  color: string;
  progress: number;
}) => {
  const token =
    "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYXRpc2hheTE5MjhAb3V0bG9vay5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY5ODM0MTgwMH0.3bIkYlndD0bfdZNLwXNBj9UxxJ2DQh_58nGf8J1zhyYHbj_PTV3C6RA2_GAheJbdvHnCDOBh6RKrDEFMOHdoNQ";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [higlights, setHiglights] = useState<IResponse<IIncomeListModel>>();

  useEffect(() => {
    async function fetchAccounts() {
      try {
        const response = await axios.get<IResponse<IIncomeListModel>>(
          "https://localhost:7009/api/income/accountId?limit=3",
          config
        );
        console.log(response.data);
        setHiglights(response.data);
      } catch (error) {
        console.error("Error fetching forecasts:", error);
      }
    }
    console.log(higlights);
    fetchAccounts();
  }, []);

  return (
    <>
      {/* {higlights?.result.map((income) => ( */}
        
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
      {/* ))} */}
    </>
  );
};

export default Highlight;
