import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // 你的入口文件
      name: "js-feature-detect", // UMD 模块的全局变量名称
      formats: ["umd", "es"], // 指定输出格式为 UMD
    },
    target: "esnext",
  },
});
