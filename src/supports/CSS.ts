import { Rule } from "../interface";
import { safeFn, withoutError } from "../utils";

export const supportFocusVisible: Rule = {
  name: "FocusVisible",
  dectect: withoutError(() => document.querySelector(":focus-visible")),
  tags: ["chrome86", "baseline"],
};

export const supportCSSIs: Rule = {
  name: "CSSIs",
  dectect: withoutError(() => document.querySelector(":is(h1)")),
  tags: ["firefox78", "baseline", "chrome88"],
};
export const supportCSSHas: Rule = {
  name: "CSSIs",
  dectect: withoutError(() => document.querySelector(":has(h1)")),
  tags: ["baseline"],
};

export const supportCSSVariables: Rule = {
  name: "CSSVariables",
  dectect: safeFn(() => CSS.supports("--a", "0")),
  tags: ["baseline"],
};

export const supportCSSGap: Rule = {
  name: "CSSGap",
  dectect: safeFn(() => CSS.supports("gap", "0")),
  tags: ["baseline"],
};

export const supportBackdropFilter: Rule = {
  name: "BackdropFilter",
  dectect: safeFn(() => CSS.supports("backdrop-filter", "blur(1px)")),
  tags: ["baseline"],
};
