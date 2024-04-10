import { v4 as uuidv4 } from "uuid";

interface IResponse<T> {
  statusCode: number;
  isSuccess: boolean;
  errors: string;
  result: T[];
}

interface IAccounts {
  accountId: number;
  name: string;
  createdOn: string;
}
interface IIncomeListModel {
  incomeId: string;
  accountId: number;
  incomeName: string;
  amount: number;
  creditCycle: string;
  creditor: string;
  credtiDate: string;
  expiry: string;
  expiredBy: number;
  expiringReason: string;
  incomeBalance: number;
}

export type { IResponse, IAccounts, IIncomeListModel};
