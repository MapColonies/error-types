import HttpStatus from 'http-status-codes';
import { HttpError } from './httpError';

export class ContentTooLarge extends HttpError {
  public constructor(message: string);
  public constructor(error: Error, messageOverride?: string);
  public constructor(error: string | Error, messageOverride?: string) {
    if (error instanceof Error) {
      super(error, HttpStatus.REQUEST_TOO_LONG, messageOverride);
    } else {
      super(error, HttpStatus.FORBIDDEN);
    }

    // Issue: https://github.com/microsoft/TypeScript/issues/10166
    // Reference: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, ContentTooLarge.prototype);
  }
}
