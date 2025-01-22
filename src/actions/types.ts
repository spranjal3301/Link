export interface BaseResponse<T = any> {
  success: boolean;
  status: StatusCode;
  message?: string;
  data?: T | null;
  error?: any;
}

export enum StatusCode {
  OK = 200,
  CREATED = 201,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
