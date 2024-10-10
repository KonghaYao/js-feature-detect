import * as supportJSList from "../supports/JS";
import { everyOneMustTrue } from "../utils";

export const supportECMA = (str: string) => {
  return everyOneMustTrue(
    Object.values(supportJSList).filter((i) => {
      return i.tags.includes(str);
    }),
  );
};
