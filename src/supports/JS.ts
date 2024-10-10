import { Rule } from "../interface";
import { safeEval } from "../utils";

//

export const supportURLSearchParams: Rule = {
  name: "URLSearchParams",
  dectect: () => typeof URLSearchParams === "function",
  tags: ["es6"],
};

export const supportImportMeta: Rule = {
  name: "ImportMeta",
  dectect: () => typeof import.meta.url === "string",
  tags: ["es6"],
};

// https://github.com/daumann/ECMAScript-new-features-list/blob/main/ES2015.MD

export const supportBigInt: Rule = {
  name: "BigInt",
  dectect: () => typeof BigInt === "function",
  tags: ["es6", "safari14"],
};

export const supportPromise: Rule = {
  name: "Promise",
  dectect: () => typeof Promise === "function",
  tags: ["es6"],
};

export const supportProxy: Rule = {
  name: "Proxy",
  dectect: () => typeof Proxy === "function",
  tags: ["es6"],
};

export const supportSpread: Rule = {
  name: "Spread",
  dectect: () => safeEval("[...[1]]"),
  tags: ["es6"],
};

export const supportTemplateLiteral: Rule = {
  name: "TemplateLiteral",
  dectect: () => safeEval("`1`"),
  tags: ["es6"],
};

export const supportArrowFunction: Rule = {
  name: "ArrowFunction",
  dectect: () => safeEval("() => 1"),
  tags: ["es6"],
};

export const supportClass: Rule = {
  name: "Class",
  dectect: () => safeEval("class A {}; true"),
  tags: ["es6"],
};

// https://github.com/daumann/ECMAScript-new-features-list/blob/main/ES2016.MD

export const supportExponentiationOperator: Rule = {
  name: "ExponentiationOperator",
  dectect: () => safeEval("2 ** 2"),
  tags: ["es7"],
};

export const supportArrayInclude: Rule = {
  name: "ArrayInclude",
  dectect: () => !!Array.prototype.includes,
  tags: ["es7"],
};

// https://github.com/daumann/ECMAScript-new-features-list/blob/main/ES2017.MD

export const supportObjectValues: Rule = {
  name: "ObjectValues",
  dectect: () => typeof Object.values === "function",
  tags: ["es8"],
};

export const supportObjectEntries: Rule = {
  name: "ObjectEntries",
  dectect: () => typeof Object.entries === "function",
  tags: ["es8"],
};

export const supportAsyncFunction: Rule = {
  name: "AsyncFunction",
  dectect: () => safeEval("(async function a(){})()"),
  tags: ["es8"],
};

// https://github.com/daumann/ECMAScript-new-features-list/blob/main/ES2018.MD

export const supportObjectRestSpread: Rule = {
  name: "ObjectRestSpread",
  dectect: () => safeEval("let {a, ...b} = {a: 1, b: 2};a;"),
  tags: ["es9"],
};

export const supportPromiseFinally: Rule = {
  name: "PromiseFinally",
  dectect: () => typeof Promise.prototype.finally === "function",
  tags: ["es9"],
};

// https://github.com/daumann/ECMAScript-new-features-list/blob/main/ES2019.MD

export const supportArrayFlat: Rule = {
  name: "ArrayFlat",
  dectect: () =>
    typeof Array.prototype.flat === "function" &&
    typeof Array.prototype.flatMap === "function",
  tags: ["es9"],
};

export const supportObjectFormEntries: Rule = {
  name: "ObjectFormEntries",
  dectect: () => typeof Object.fromEntries === "function",
  tags: ["es10"],
};
export const supportStringTrim: Rule = {
  name: "StringTrim",
  dectect: () =>
    typeof String.prototype.trimStart === "function" &&
    typeof String.prototype.trimEnd === "function",
  tags: ["es10"],
};

// https://github.com/daumann/ECMAScript-new-features-list/blob/main/ES2020.MD

export const supportGlobalThis: Rule = {
  name: "GlobalThis",
  dectect: () => typeof globalThis === "object",
  tags: ["es11"],
};

export const supportOptionalChaining: Rule = {
  name: "OptionalChaining",
  dectect: () => safeEval("globalThis?.Object"),
  tags: ["es11"],
};

export const supportNullishCoalescing: Rule = {
  name: "NullishCoalescing",
  dectect: () => safeEval("null ?? 1"),
  tags: ["es11"],
};
