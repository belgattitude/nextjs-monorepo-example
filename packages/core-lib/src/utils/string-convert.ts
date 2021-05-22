import { isParsableNumeric, isParsableSafeInteger } from './typeguards';

export class StringConvert {
  static toSafeInteger = (value: string | unknown): number | null => {
    if (!isParsableSafeInteger(value)) {
      return null;
    }
    return typeof value === 'string' ? Number.parseInt(value, 10) : value;
  };

  static toFloat = (value: string | unknown): number | null => {
    if (
      !isParsableNumeric(
        typeof value === 'number' ? value.toString(10) : value ?? ''
      )
    ) {
      return null;
    }
    const v = Number.parseFloat(
      typeof value === 'string' ? value : (value as number).toString(10)
    );
    return Number.isNaN(v) ? null : v;
  };
}
