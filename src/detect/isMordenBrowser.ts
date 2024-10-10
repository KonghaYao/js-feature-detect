import {
  supportBackdropFilter,
  supportCSSVariables,
  supportFocusVisible,
} from "../supports/CSS";
import {
  supportCrypto,
  supportFetch,
  supportResizeObserver,
  supportWebAssembly,
  supportWebGL,
  supportWebWorker,
} from "../supports/JSAPI";
import { everyOneMustTrue } from "../utils";
import { supportECMA } from "./supportECMA";
import { isBrowser, isChromeBrowser, isFirefoxBrowser } from "./isBrowser";
import { supportCSSIs } from "../supports/CSS";
import { supportImportMeta, supportURLSearchParams } from "../supports/JS";


/**
 * @description Vite base browser list ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']
 */
export const isModernBrowser = () => {
  const isJSSupport = isModernJSRuntime();
  const isBrowserAPISupport = everyOneMustTrue([
    isBrowser,
    // 鉴定 chrome 87 以上
    isChromeBrowser.dectect() && supportFocusVisible,
    // 鉴定 firefox 78 以上
    isFirefoxBrowser.dectect() && supportCSSIs,
    // safari 14 才有 BigInt，已经判断了
  ]);
  return isJSSupport && isBrowserAPISupport;
};

/** @description base support 低于 Mordern  */
export const isBaseSupportBrowser = () => {
  const isJSSupport = isBaseJSRuntime();
  return (
    isJSSupport &&
    everyOneMustTrue([
      supportCSSVariables,
      supportWebGL,
      supportResizeObserver,
      supportBackdropFilter,
    ])
  );
};

export const isModernJSRuntime = () => {
  const isJSVersionSupport = ["es6", "es7", "es8", "es9", "es10", "es11"].every(
    (i) => supportECMA(i)
  );
  return (
    isJSVersionSupport && everyOneMustTrue([supportFetch, supportImportMeta])
  );
};

export const isBaseJSRuntime = () => {
  const isJSVersionSupport = ["es6", "es7", "es8"].every((i) => supportECMA(i));
  return (
    isJSVersionSupport &&
    everyOneMustTrue([
      supportFetch,
      supportURLSearchParams,
      supportWebAssembly,
      supportCrypto,
      supportWebWorker,
    ])
  );
};
