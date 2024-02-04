import postcssRTLCSS from "postcss-rtlcss";
import { RtlcssOptions } from "./types";
export * from "./types";
export default (options: RtlcssOptions) => {
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
