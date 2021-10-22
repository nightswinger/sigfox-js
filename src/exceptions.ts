export class HTTPError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public statusMessage: string,
    public originalError: any,
  ) {
    super(message);
  }
}

export class ReadError extends Error {
  constructor(private originalError: Error) {
    super(originalError.message);
  }
}

export class RequestError extends Error {
  constructor(
    message: string,
    public code: string,
    public originalError: Error,
  ) {
    super(originalError.message);
  }
}
