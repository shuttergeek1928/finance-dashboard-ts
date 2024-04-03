interface IResponse {
  statusCode: number;
  isSuccess: boolean;
  errors: string;
  result: IAccounts[];
}
interface IAccounts {
  accountId: number;
  name: string;
  createdOn: string;
}

export type {IResponse, IAccounts};
