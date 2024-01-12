import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "丹青的博客",
  description: "丹青的个人博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
