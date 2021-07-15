import { HttpError as baseError } from '@map-colonies/error-express-handler';

export class HttpError extends Error implements baseError {
  public constructor(message: string, status: number);
  public constructor(error: Error, status: number, messageOverride?: string);
  public constructor(error: string | Error, public status: number, messageOverride?: string) {
    super();
    if (typeof error == 'string') {
      this.message = error;
    } else {
      this.name = error.name;
      this.message = messageOverride ?? error.message;
    }

    // Issue: https://github.com/microsoft/TypeScript/issues/10166
    // Reference: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}
