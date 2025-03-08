import { build as TsupBuild } from "tsup";
import { readdir } from "fs/promises";
import { cwd } from "process";
import { join } from "path";

const banner =
`/**
* Thanks for using Venloc Typelint <3
*/`;

const normalize = (str: string) => str.split("\\").join("/");

const build = async () => {
  await Bun.$`rm -rf dist`;

  const src = join(cwd(), "src");
  const dist = join(cwd(), "dist");

  const all = await readdir(src, { withFileTypes: true });

  const entry = all
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .map(dir => normalize(join("src", dir, "index.ts")));

  entry.push(normalize(join("src", "index.ts")));

  await TsupBuild({
    entry: entry,
    dts: { banner },
    outDir: dist,
    format: ["esm", "cjs"],
    sourcemap: true,
    splitting: false,
    bundle: false,
    esbuildOptions: (options) => {
      options.packages = "external";
    },
    banner: { js: banner },
    plugins: [
      {
        // https://github.com/egoist/tsup/issues/953#issuecomment-2294998890
        // Maybe use: https://github.com/aymericzip/esbuild-fix-imports-plugin
        // ensuring that all local requires/imports in `.cjs` files import from `.cjs` files.
        // require('./path') → require('./path.cjs') in `.cjs` files
        // require('../path') → require('../path.cjs') in `.cjs` files
        // from './path' → from './path.cjs' in `.cjs` files
        // from '../path' → from '../path.cjs' in `.cjs` files
        name: "fix-cjs-imports",
        renderChunk(code) {
          if (this.format === "cjs") {
            const regexCjs = /require\((?<quote>['"])(?<import>\.[^'"]+)\.js['"]\)/g;
            const regexEsm = /from(?<space>[\s]*)(?<quote>['"])(?<import>\.[^'"]+)\.js['"]/g;
            return {
              code: code
                .replace(regexCjs, "require($<quote>$<import>.cjs$<quote>)")
                .replace(regexEsm, "from$<space>$<quote>$<import>.cjs$<quote>"),
            };
          }
        },
      },
    ],
  });
};

await build();