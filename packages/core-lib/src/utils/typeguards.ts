export const isNonEmptyString = (v: unknown, trim = true): v is string => {
  return typeof v === 'string' && (trim ? v.trim() : v).length > 0;
};

export const isSafeInteger = (v: unknown): v is number => {
  return typeof v === 'number' && Number.isSafeInteger(v);
};

export const isParsableNumeric = (v: unknown): v is number | string => {
  if (typeof v === 'number' && !Number.isNaN(v)) {
    return true;
  }
  if (!isNonEmptyString(v)) {
    return false;
  }
  return !Number.isNaN(
    Number.parseInt(v, 10) || Number.isNaN(Number.parseFloat(v))
  );
};

export const isParsableSafeInteger = (v: unknown): v is number | string => {
  const value =
    typeof v === 'string' && /^-?\d+$/.test(v) ? Number.parseInt(v, 10) : v;
  return isSafeInteger(value);
};

export const isHttpStatusCode = (v: unknown): v is number => {
  return isSafeInteger(v) && v < 600 && v >= 100;
};
