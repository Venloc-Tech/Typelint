import type { ConfigWithExtends, InfiniteDepthConfigWithExtends } from "typescript-eslint";
import type { ParserOptions } from "@typescript-eslint/types";
import { includeIgnoreFile } from "@eslint/compat";
import tseslint from "typescript-eslint";
import { cwd } from "process";

import { StylisticJsVenlocRecommended, StylisticJSXVenlocRecommended } from "./stylistic/index.js";
import { TypelintVenlocRecommended } from "./typelint/index.js";
import { EslintVenlocRecommended } from "./eslint/index.js";


export const allTypescriptFiles: ConfigWithExtends["files"] = ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.mtsx", "**/*.cts", "**/*.ctsx"]

const initialParserOptions: ParserOptions = { 
  projectService: true,
  tsconfigRootDir: cwd(), 
};

export const setParserOptions = (parserOptions: ParserOptions = initialParserOptions): InfiniteDepthConfigWithExtends => {
  return {
    languageOptions: {
      parserOptions: parserOptions,
    },
  };
};

export const setIgnoreFiles = (path: string) => includeIgnoreFile(path);

export * from "./eslint/index.js";
export * from "./typelint/index.js";
export * from "./stylistic/index.js";

export const VenlocRecommended: InfiniteDepthConfigWithExtends[] = [
  EslintVenlocRecommended,
  TypelintVenlocRecommended,
  StylisticJsVenlocRecommended,
  StylisticJSXVenlocRecommended,
  tseslint.configs.recommendedTypeChecked,
];

export default VenlocRecommended;
