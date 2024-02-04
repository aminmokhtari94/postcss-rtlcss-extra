import postcssRTLCSS from "postcss-rtlcss";
import { RTLCSSModuleOptions } from "./types";

export default (options: RTLCSSModuleOptions) => {
  return (root: any, result: any) => {
    if (root) {
      if (
        result.opts.from &&
        options?.ignoreFromList?.some((i) =>
          new RegExp(i).test(result.opts.from),
        )
      )
        return;
      else
        return postcssRTLCSS({
          mode: "override",
          ...options,
        }).Once!(root, undefined as any);
    }
  };
};
