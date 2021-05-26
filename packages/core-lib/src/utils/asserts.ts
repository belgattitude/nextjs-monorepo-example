import { isNonEmptyString } from './typeguards';

export class Asserts {
  static isPresent<T>(
    v: T,
    msgOrErrorFactory?: string | (() => Error)
  ): asserts v is NonNullable<T> {
    if (v === null || v == undefined) {
      throw Asserts.createException(
        msgOrErrorFactory,
        'Value is null or undefined.'
      );
    }
  }

  static safeInteger(
    v: unknown,
    msgOrErrorFactory?: string | (() => Error)
  ): asserts v is number {
    if (typeof v !== 'number' || !Number.isSafeInteger(v)) {
      throw Asserts.createException(
        msgOrErrorFactory,
        'Value is not a safe integer'
      );
    }
  }

  static nonEmptyString(
    v: unknown,
    msgOrErrorFactory?: string | (() => Error),
    /** auto-trim, default true */
    trim?: boolean
  ): asserts v is string {
    if (!isNonEmptyString(v, trim ?? true)) {
      throw Asserts.createException(msgOrErrorFactory);
    }
  }

  static never(v: never, msg?: string): never {
    throw new Error(msg ?? 'Unexpected value');
  }

  private static createException(
    msgOrErrorFactory?: string | (() => Error),
    fallbackMsg?: string
  ) {
    if (
      typeof msgOrErrorFactory === 'string' ||
      msgOrErrorFactory === undefined
    ) {
      throw new Error(
        msgOrErrorFactory ?? fallbackMsg ?? 'Assertion did not pass.'
      );
    }
    throw msgOrErrorFactory();
  }
}
