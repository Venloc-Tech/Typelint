import tseslint from "typescript-eslint";
import { join } from "path";

import { allTypescriptFiles, setIgnoreFiles, setParserOptions, VenlocRecommended } from "./src/index.js";


const root = process.cwd();

export default tseslint.config({
  extends: VenlocRecommended,
  files: allTypescriptFiles,
  ...setParserOptions({ project: "./tsconfig.eslint.json" }),
  ...setIgnoreFiles(join(root, ".gitignore")),
});
