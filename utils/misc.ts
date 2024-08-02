import DOMPurify from "isomorphic-dompurify";

export const purify = (str: string) => {
  return DOMPurify.sanitize(str);
};
