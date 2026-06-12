import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import globals from "globals";

export default [
  js.configs.recommended,

  // Main BFF source — CommonJS
  {
    files: ["**/*.js"],
    ignores: [
      "node_modules/**",
      "coverage/**",
      "dist/**",
      "**/*.test.js",
      "**/*.spec.js",
      "__tests__/**",
      "eslint.config.js",
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-duplicate-imports": "error",
      "no-promise-executor-return": "error",
      "no-await-in-loop": "error",
      "require-atomic-updates": "error",
      "no-return-await": "error",
      "prefer-promise-reject-errors": "error",
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "no-var": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "error",
      "object-shorthand": ["error", "always"],
    },
  },

  // Entry point — console allowed for startup logs
  {
    files: ["src/index.js"],
    rules: {
      "no-console": "off",
    },
  },

  // Config files in root — CommonJS
  {
    files: ["*.config.js", "*.config.cjs"],
    ignores: ["eslint.config.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-undef": "error",
    },
  },

  // Test files
  {
    files: ["**/*.test.js", "**/*.spec.js", "__tests__/**/*.js"],
    plugins: { jest },
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...jest.environments.globals.globals,
      },
    },
    rules: {
      ...jest.configs.recommended.rules,
      "jest/expect-expect": "error",
      "jest/no-focused-tests": "error",
      "jest/no-disabled-tests": "warn",
      "jest/valid-expect": "error",
      "no-console": "off",
      "no-await-in-loop": "off",
    },
  },
];
