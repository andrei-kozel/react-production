module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  plugins: ["react", "i18next"],
  rules: {
    "i18next/no-literal-string": 2,
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
  },
  ignorePatterns: [".eslintrc.js", "config/jest/jest.config.ts"],
  globals: {
    __IS_DEV__: true,
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
