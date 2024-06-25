import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["postcss/*.test.?(c|m)[jt]s"],
  },
});
