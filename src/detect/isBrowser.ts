import { Rule } from "../interface";
import { safeFn } from "../utils";

export const isChromeBrowser: Rule = {
  name: "ChromeBrowser",
  dectect: safeFn(
    () =>
      /** @ts-ignore  */
      typeof chrome === "object" ||
      navigator.userAgent.toLowerCase().indexOf("chrome") > -1,
  ),
  tags: ["browser"],
};

export const isFirefoxBrowser: Rule = {
  name: "FirefoxBrowser",
  dectect: safeFn(
    () =>
      "MozAppearance" in document.documentElement.style ||
      navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  ),
  tags: ["browser"],
};

export const isBrowser: Rule = {
  name: "isBrowser",
  dectect: safeFn(
    () =>
      typeof window !== "undefined" && typeof window.document !== "undefined",
  ),
  tags: ["browser"],
};
