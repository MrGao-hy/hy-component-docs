import Gitalk from "gitalk";
import "gitalk/dist/gitalk.css";
import "./lib/styles/gitalk.scss";

const generateId = (path) => {
  return path
    .split("/") // 按照 / 切分
    .pop() // 取最后一个部分
    .replace(/\.html$/, ""); // 去掉结尾的 .html
};

export default function createGitalk(path: string) {
  const gitalk = new Gitalk({
    clientID: "Ov23liVepKSFp8TKOvti",
    clientSecret: "b0be04ba295eada2d57ec84d7b08d370330756ad",
    repo: "hy-component-docs",
    owner: "gaoxianhua",
    admin: ["gaoxianhua"],
    id: generateId(path), // 确保唯一性和长度小于 50
    distractionFreeMode: false, // 类似 Facebook 的无干扰模式
  });
  gitalk.render("gitalk-container");
}
