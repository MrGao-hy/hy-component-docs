import './styles/scss/gitalk.scss';

const generateId = (path: string) => {
    // 按照 / 切分，取最后一个部分并去掉结尾的 .html
    const last = path.split('/').pop() ?? '';
    return last.replace(/\.html$/, '');
};

let gitalkModulePromise: Promise<any> | null = null;
let latestPath = '';

// 动态加载 gitalk（含其样式），仅在评论区进入视口时才下载
const loadGitalk = () => {
    gitalkModulePromise ??= Promise.all([import('gitalk'), import('gitalk/dist/gitalk.css')]);
    return gitalkModulePromise;
};

export default async function createGitalk(path: string) {
    latestPath = path;
    const [{ default: Gitalk }] = await loadGitalk();
    // 动态加载期间路由可能已变化，丢弃过期渲染
    if (path !== latestPath) return;

    const gitalk = new Gitalk({
        clientID: 'Ov23li1JymIgZsMJLzYd',
        clientSecret: 'd4ce3062526a85fe2cd94be52601c06c7d9b47fe',
        repo: 'hy-component-docs',
        owner: 'MrGao-hy',
        admin: ['MrGao-hy'],
        id: generateId(path), // 确保唯一性和长度小于 50
        distractionFreeMode: false, // 类似 Facebook 的无干扰模式
    });
    gitalk.render('gitalk-container');
}
