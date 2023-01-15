interface Response {
  data: {
    status_code?: number;
    status_message?: string;
    success?: boolean;
  };
  status: number;
}

export class APIError extends Error {
  response: Response;

  constructor(response: Response) {
    super();

    this.name = "APIError";
    this.response = response;
    this.message =
      this.response.data?.status_message || `${this.response.status}`;
  }
}
