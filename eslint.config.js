// eslint.config.js  – one self-contained flat-config
import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    /* lint every JS / JSX file */
    files: ["**/*.{js,jsx,mjs,cjs}"],

    /* core JS recommended rules */
    ...js.configs.recommended,

    /* React plug-in + all its recommended rules  */
    ...react.configs.flat.recommended,

    plugins: { react },

    /* modern parser options so ESLint understands JSX */
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: globals.browser,
    },

    /* extra React settings / tweaks */
    settings: { react: { version: "detect" } },
    rules: {
      /* new JSX transform = no “import React” needed */
      "react/react-in-jsx-scope": "off",
    },
  },
]);
