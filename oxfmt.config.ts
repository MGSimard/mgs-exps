import { defineConfig } from "oxfmt";

export default defineConfig({
  ignorePatterns: [".tanstack", ".wrangler", "dist", "node_modules", "pnpm-lock.yaml", "**/routeTree.gen.ts"],
  semi: true,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: false,
  trailingComma: "es5",
  bracketSameLine: true,
  experimentalTailwindcss: {
    stylesheet: "./src/css/global.css",
    functions: ["clsx", "cn", "cva", "tw"],
  },
});
