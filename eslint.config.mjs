import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  // Config for JS files with CommonJS modules
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: 2020, // or another appropriate version
      globals: globals.node,
    },
  },
  // Base recommended config from @eslint/js
  pluginJs.configs.recommended,
  
  // Additional configuration for ES6 modules
  {
    files: ["**/*.js"], // or restrict to certain files if needed
    languageOptions: {
      sourceType: "module", // This enables ES6 module support
      ecmaVersion: 2020, // or another appropriate version
    },
  },
  
  // Ignored directories and files
  {
    ignores: ["node_modules", "coverage", "mochawesome-report"],
  },
];
