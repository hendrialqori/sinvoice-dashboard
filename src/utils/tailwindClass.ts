export const tw = (...className: string[]) =>
  className.filter((cls) => typeof cls === "string" && cls.trim()).join(" ");
