import { Rule } from "./interface";

export const safeEval = (code: string) => {
  try {
    return eval(code);
  } catch (e) {
    return false;
  }
};
export const everyOneMustTrue = (rules: (Rule | false)[]) => {
  let res = true;
  for (let index = 0; index < rules.length; index++) {
    const rule = rules[index];
    if (!rule) continue;
    try {
      if (!rule.dectect()) {
        res = false;
        console.log(rule.name);
      }
    } catch (e) {
      res = false;
      console.log(rule.name);
    }
  }
  return res;
};

export const everyOneMustTrueRules = (rules: Rule[]): Rule => {
  return {
    name: "everyOneMustTrueRules",
    tags: ["skip"],
    dectect: () => everyOneMustTrue(rules),
  };
};

export const TrueRule: Rule = {
  name: "TrueRule",
  tags: ["skip"],
  dectect: () => true,
};

/** 只要函数不报错，那么就返回 true */
export const withoutError = (fn: Function) => {
  return (...args) => {
    try {
      fn(...args);
      return true;
    } catch (e) {
      return false;
    }
  };
};

export const safeFn = (fn: Function) => {
  return (...args) => {
    try {
      return fn(...args);
    } catch (e) {
      return false;
    }
  };
};
