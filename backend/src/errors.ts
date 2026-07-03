export class NotFoundError extends Error {}

export class AuthError extends Error {
  constructor(message: string, public statusCode: 401 | 403 = 401) {
    super(message);
  }
}