module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google", "prettier"],
  rules: {
    "new-cap": "off",
    quotes: ["error", "double"],
    // "prettier/prettier": "error",
  },
  plugins: ["prettier"],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
};
