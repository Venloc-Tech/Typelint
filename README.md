<h1 align="center">Typelint</h1>

## What is Typelint
Typelint is the set of recommended formatting and linting rules for JavaScript and TypeScript applications and libraries, developed by `Venloc`. This package consolidates best practices from various communities and rule sets, ensuring your codebase is consistent, clean, and easy to maintain. 

For more detailed insights into the rules currently used for linting and formatting, please refer to the sections below.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Supported Rules](#supported-rules)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Important
If you want to use `typescript` Eslint config, you need to install `jiti` package if you are using `Node.js` or `WebStorm`

To get started, install Typelint as a development dependency using your favorite package manager.

#### Using bun:
```bash
bun add -d @venloc-tech/typelint eslint typescript-eslint
```
#### Using npm:
```bash
npm install --save-dev @venloc-tech/typelint eslint typescript-eslint
```
#### Using yarn:
```bash
yarn add -d @venloc-tech/typelint eslint typescript-eslint
```
#### Using pnpm:
```bash
pnpm add -d @venloc-tech/typelint eslint typescript-eslint
```

## Configuration
After installation, you can integrate Typelint into your project by extending your Typescript-Eslint configuration. If you need to override or customize any rules, simply add your overrides in the rules section of your ESLint configuration.
Create or update your eslint.config.ts file with the following:

```ts
// eslint.config.ts
import tseslint from 'typescript-eslint';
import path from "path"

import { VenlocRecommended, allTypescriptFiles, setIgnoreFiles, setParserOptions } from '@venloc-tech/typelint';

export default tseslint.config({
    extends: VenlocRecommended,
    // Custom overrides go here
    rules: {
      // For example, disable the rule for console logs:
      // "no-console": "warn"
    },
    plugins: {
      // Your plugins..   
    },
    // Add typrscript files
    files: allTypescriptFiles,
    // Setup parser options
    ...setParserOptions({ project: "./tsconfig.eslint.json" }),
    // Setup .gitignore
    ...setIgnoreFiles(path.join(process.cwd(), ".gitignore"))
    // You can also extend additional settings if needed
});
```

Also, recommend add this line to your `package.json` for better **_Webstorm_** integration.

```json
"eslintConfig": "eslint.config.ts",
```

## Usage
Once configured, you can run ESLint as you normally would. For example:
#### Using bun:
```bash
bunx --bun eslint --fix "src/**/*.{js,ts}"
```
#### Using npm:
```bash
npx eslint --fix "src/**/*.{js,ts}"
```
#### Using yarn:
```bash
yarn dlx eslint --fix "src/**/*.{js,ts}"
```
#### Using pnpm:
```bash
pnpm dlx eslint --fix "src/**/*.{js,ts}"
```

## Supported Rules
Typelint brings together the best practices from various popular rule sets:
- **eslint/js**: Enforces standard JavaScript linting rules.
- **stylistic/js**: Provides guidelines for consistent code style in JavaScript.
- **stylistic/jsx**: Ensures consistent formatting and style for JSX in React projects.
- **typescript-eslint**: Applies robust linting and formatting for TypeScript projects.

## Contributing
We welcome contributions from the community! If you find a bug or have suggestions for improvements, please submit an issue or a pull request via our GitHub repository.

1. **Fork the repository**
2. **Create your feature branch**: `git checkout -b my-new-feature`
3. **Commit your changes**: `git commit -m "Add some feature"`
4. **Push to the branch**: `git push origin my-new-feature`
5. **Submit a pull request**

Please ensure your code adheres to the established linting rules and that all tests pass before submitting your PR.

## License
Typelint is open source and available under the [Apache License 2.0](https://github.com/Venloc-Tech/Typelint/blob/main/LICENSE).