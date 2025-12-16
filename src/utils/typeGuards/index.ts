export const isString = (v: unknown): v is string =>
  typeof v === "string";

export const isArray = <T>(v: unknown): v is T[] =>
  Array.isArray(v);

export const isPlainObject = (
  v: unknown
): v is Record<string, unknown> =>
  typeof v === "object" &&
  v !== null &&
  !Array.isArray(v);
