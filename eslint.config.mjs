import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  prettier,

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "warn",
      "no-multiple-empty-lines": ["warn", { max: 1 }], // thêm ví dụ rule bạn cần
    },
  },

  // Ignore
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
