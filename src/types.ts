export enum Mode {
  combined = "combined",
  override = "override",
  diff = "diff",
}
export enum Source {
  ltr = "ltr",
  rtl = "rtl",
}
export enum Autorename {
  disabled = "disabled",
  flexible = "flexible",
  strict = "strict",
}
type ModeValues = keyof typeof Mode;
type SourceValues = keyof typeof Source;
type AutorenameValues = keyof typeof Autorename;
type strings = string | string[];
export interface PluginStringMap {
  name?: string;
  search: strings;
  replace: strings;
}

export type PrefixSelectorTransformer = (
  prefix: string,
  selector: string,
) => string | void;

export interface RtlcssOptions {
  mode?: ModeValues;
  ltrPrefix?: strings;
  rtlPrefix?: strings;
  bothPrefix?: strings;
  prefixSelectorTransformer?: PrefixSelectorTransformer;
  safeBothPrefix?: boolean;
  ignorePrefixedRules?: boolean;
  source?: SourceValues;
  processUrls?: boolean;
  processKeyFrames?: boolean;
  processEnv?: boolean;
  useCalc?: boolean;
  stringMap?: PluginStringMap[];
  autoRename?: AutorenameValues;
  greedy?: boolean;
  aliases?: Record<string, string>;
  ignoreFromList?: RegExp[] | string[];
}
