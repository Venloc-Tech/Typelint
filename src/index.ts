import type { ConfigWithExtends, InfiniteDepthConfigWithExtends } from "typescript-eslint";
import { includeIgnoreFile } from "@eslint/compat";
import tseslint from "typescript-eslint";
import { cwd } from "process";
import { join } from "path";

import { StylisticJsVenlocRecommended, StylisticJSXVenlocRecommended } from "./stylistic/index.js";
import { TypelintVenlocRecommended } from "./typelint/index.js";
import { EslintVenlocRecommended } from "./eslint/index.js";


export const allTypescriptFiles: ConfigWithExtends = {
  files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.mtsx", "**/*.cts", "**/*.ctsx"],
};

export const setGitIgnore = (path: string): ConfigWithExtends => includeIgnoreFile(path);

export * from "./eslint/index.js";
export * from "./typelint/index.js";
export * from "./stylistic/index.js";

export const VenlocRecommended: InfiniteDepthConfigWithExtends[] = [
  allTypescriptFiles,
  setGitIgnore(join(cwd(), ".gitignore")),
  EslintVenlocRecommended,
  TypelintVenlocRecommended,
  StylisticJsVenlocRecommended,
  StylisticJSXVenlocRecommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: cwd(),
      },
    },
  },
];

export default VenlocRecommended;
