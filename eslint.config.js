import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import pluginPreferArrow from "eslint-plugin-prefer-arrow";
import pluginReactConfig from "eslint-plugin-react/configs/jsx-runtime.js";
import pluginReactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    ignores: [
      "eslint.config.mjs",
      "vite.config.mts",
      "vitest.config.mts",
      "src/components/gas",
      "src/newUITemplates",
    ],
  },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    plugins: {
      "unused-imports": unusedImports,
      import: pluginImport,
      "prefer-arrow": pluginPreferArrow,
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": ["warn", {}],
      "react/react-in-jsx-scope": "off",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-duplicates": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["camelCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        {
          selector: "import",
          format: ["camelCase", "PascalCase"],
          filter: { regex: "^_$", match: false },
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        { selector: "class", format: ["PascalCase"] },
        { selector: "typeAlias", format: ["PascalCase"], suffix: ["Type"] },
        { selector: "interface", format: ["PascalCase"] },
        { selector: "typeParameter", format: ["PascalCase"] },
        {
          selector: "objectLiteralProperty",
          format: [],
          leadingUnderscore: "allow",
        },
        {
          selector: "typeMethod",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "parameter",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
      ],
      "prefer-arrow/prefer-arrow-functions": [
        "error",
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
      "nonblock-statement-body-position": "error",
      "no-restricted-imports": [
        "error",
        { name: "react", importNames: ["default"] },
      ],
      "react/jsx-boolean-value": ["error", "never"],
      "no-console": ["error"],
      "react/no-array-index-key": ["error"],
    },
  },
];
