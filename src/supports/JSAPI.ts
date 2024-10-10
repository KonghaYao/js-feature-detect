import { Rule } from "../interface";

export const supportFetch: Rule = {
  name: "Fetch",
  dectect: () => typeof fetch === "function",
  tags: ["baseline"],
};
export const supportWebGL: Rule = {
  name: "WebGL",
  dectect: () => typeof WebGLRenderingContext !== "undefined",
  tags: ["baseline"],
};
export const supportResizeObserver: Rule = {
  name: "ResizeObserver",
  dectect: () => typeof ResizeObserver !== "undefined",
  tags: [],
};
export const supportCrypto: Rule = {
  name: "Crypto",
  dectect: () => typeof crypto.subtle.digest === "function",
  tags: [],
};

export const supportWebAssembly: Rule = {
  name: "WebAssembly",
  dectect: () => typeof WebAssembly === "object",
  tags: ["baseline"],
};

export const supportWebWorker: Rule = {
  name: "WebWorker",
  dectect: () => typeof Worker !== "undefined",
  tags: ["baseline"],
};