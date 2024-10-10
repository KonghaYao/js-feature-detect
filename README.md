# js-feature-detect

`js-feature-detect` 是一个用于检测浏览器是否支持特定的 JavaScript 特性、CSS 属性以及 ECMAScript 版本的小型库。它可以帮助开发者确保他们的应用在目标浏览器中能够正确运行，并提供了一种简单的方式来判断当前环境是否满足最低要求。

> A lightweight library to detect support for specific JavaScript features, CSS properties, and ECMAScript versions in the browser.

| filename                      | original | gzip    |
| ----------------------------- | -------- | ------- |
| dist/js-feature-detect.umd.js | 6.30 kB  | 1.82 kB |
| dist/js-feature-detect.mjs    | 6.78 kB  | 1.84 kB |

## 安装

你可以通过 npm 或 yarn 来安装 `js-feature-detect`：

```bash
npm install js-feature-detect
# 或者
yarn add js-feature-detect
```

如果你不想使用包管理器，也可以直接将 UMD 构建版本加入到你的 HTML 文件中：

```html
<script src="https://unpkg.com/js-feature-detect/dist/js-feature-detect.umd.js"></script>
```

然后可以通过全局变量 `JSFeatureDetect` 访问 API。

## 现代与基础浏览器检查

- `isModernBrowser()`: 检查浏览器是否支持现代的 JavaScript 运行时和浏览器 API（基于 Vite 的基础浏览器列表）。
- `isBaseSupportBrowser()`: 检查浏览器是否支持基本的 JavaScript 运行时和部分关键特性。

## 使用示例

```javascript
import { isModernBrowser, isBaseSupportBrowser } from "js-feature-detect";

if (isModernBrowser()) {
  console.log("此浏览器支持现代特性！");
} else if (isBaseSupportBrowser()) {
  console.log("此浏览器支持基础特性，但可能缺少某些现代特性。");
} else {
  console.log("此浏览器不支持所需的特性，请考虑升级您的浏览器。");
}
```

## 贡献

我们欢迎任何形式的贡献！无论是报告问题、提出新特性或是提交修复，都是极好的。请先阅读我们的贡献指南。

## 许可证

[Apache-2.0](LICENSE)
