import Gitalk from "gitalk";
import "gitalk/dist/gitalk.css";
import "./styles/scss/gitalk.scss";

const generateId = (path) => {
  return path
    .split("/") // 按照 / 切分
    .pop() // 取最后一个部分
    .replace(/\.html$/, ""); // 去掉结尾的 .html
};

export default function createGitalk(path: string) {
  const gitalk = new Gitalk({
    clientID: "Ov23li1JymIgZsMJLzYd",
    clientSecret: "d4ce3062526a85fe2cd94be52601c06c7d9b47fe",
    repo: "hy-component-docs",
    owner: "MrGao-hy",
    admin: ["MrGao-hy"],
    id: generateId(path), // 确保唯一性和长度小于 50
    distractionFreeMode: false, // 类似 Facebook 的无干扰模式
  });
  gitalk.render("gitalk-container");
}
