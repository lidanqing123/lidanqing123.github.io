import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    link: "/posts/",
  },
  {
    text: "beetle 文档",
    icon: "book",
    link: "https://beetle-tool.github.io/beetle-doc/",
  },
]);
