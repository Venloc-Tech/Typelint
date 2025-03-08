import type { ConfigWithExtends } from "typescript-eslint";
import stylisticJsx from "@stylistic/eslint-plugin-jsx";
import stylisticJs from "@stylistic/eslint-plugin-js";

export const StylisticJsVenlocRecommended: ConfigWithExtends = {
  rules: {
    "@stylistic/js/indent": [
      "error", 2, {
        ignoreComments: true,
        offsetTernaryExpressions: true,
        ObjectExpression: 1,
        ArrayExpression: "first",
        StaticBlock: { body: 1 },
        VariableDeclarator: "first",
        SwitchCase: 1,
      },
    ],
    "@stylistic/js/jsx-quotes": ["error", "prefer-double"],
    "@stylistic/js/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "@stylistic/js/quote-props": ["error", "as-needed"],
    "@stylistic/js/comma-style": ["error", "last"],
    "@stylistic/js/comma-spacing": ["error", { before: false, after: true }],
    "@stylistic/js/comma-dangle": [
      "error", {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "@stylistic/js/max-len": [
      "error", {
        code: 140,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "@stylistic/js/array-bracket-newline": ["error", { multiline: true }],
    "@stylistic/js/spaced-comment": ["error", "always"],
    "@stylistic/js/dot-location": ["error", "property"],
    "@stylistic/js/space-infix-ops": ["error", { int32Hint: false }],
    "@stylistic/js/no-extra-semi": "error",
    "@stylistic/js/semi": ["warn", "always"],
    "@stylistic/js/semi-spacing": ["error", { before: false, after: true }],
    "@stylistic/js/semi-style": ["error", "last"],
    "@stylistic/js/no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1, maxBOF: 2 }],
    "@stylistic/js/no-floating-decimal": "error",
    "@stylistic/js/no-multi-spaces": ["error", { ignoreEOLComments: true }],
    "@stylistic/js/no-whitespace-before-property": "error",
    "@stylistic/js/array-bracket-spacing": ["error", "never", { singleValue: false, objectsInArrays: false }],
    "@stylistic/js/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "@stylistic/js/object-curly-spacing": ["error", "always"],
    "@stylistic/js/space-before-function-paren": ["error", { anonymous: "always", named: "never", asyncArrow: "always" }],
    "@stylistic/js/space-in-parens": ["error", "never"],
    "@stylistic/js/template-curly-spacing": "error",
    "@stylistic/js/function-call-argument-newline": ["error", "consistent"],
    "@stylistic/js/computed-property-spacing": ["error", "never", { enforceForClassMembers: true }],
    "@stylistic/js/key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "@stylistic/js/keyword-spacing": ["error", { after: true, before: true }],
    "@stylistic/js/yield-star-spacing": ["error", "after"],
    "@stylistic/js/template-tag-spacing": ["error", "never"],
    "@stylistic/js/switch-colon-spacing": ["error", { after: true, before: false }],
  },

  plugins: stylisticJs.configs.all.plugins,
};

export const StylisticJSXVenlocRecommended: ConfigWithExtends = {
  rules: { 
    "@stylistic/jsx/jsx-curly-spacing": [2, { when: "never", attributes: { allowMultiline: false }, children: true }],
    "@stylistic/jsx/jsx-equals-spacing": [2, "never"],
    "@stylistic/jsx/jsx-tag-spacing": [
      2, 
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "proportional-always",
      },
    ],
    "@stylistic/jsx/jsx-function-call-newline": ["error", "multiline"],
    "@stylistic/jsx/jsx-wrap-multilines": [
      2,
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
    "@stylistic/jsx/jsx-closing-bracket-location": [1, "tag-aligned"],
    "@stylistic/jsx/jsx-indent-props": [2, 1],
  },

  plugins: stylisticJsx.configs.all.plugins,
};
