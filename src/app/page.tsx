"use client";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import {IResponse, IAccounts } from "./models/responseModels";



export default function Page() {

  const [accounts, setAccounts] = useState<IResponse>();
  const [users, setUsers] = useState<IAccounts[]>([]);

  useEffect(() => {
    async function fetchAccounts() {
      try {
        const response = await axios.get<IResponse>(
          "https://localhost:7009/api/account/all"
        );
        setAccounts(response.data);
        setUsers(response.data.result);
      } catch (error) {
        console.error("Error fetching forecasts:", error);
      }
    }

    fetchAccounts();
  }, []);

  console.log(accounts);
  console.log(users);

  return (
    <>
      {users.length !== 0 ? users.map((user) => (
        <>
          <h1>Account Id: {user.accountId}</h1>
          <h1>Account Name: {user.name}</h1>
          <h1>Account Created On: {user.createdOn}</h1>
          <br></br>
        </>
      )) : <h1>Problem fething the API!</h1>}
    </>
  );
}
