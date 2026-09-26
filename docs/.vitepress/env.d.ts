// 基础类型声明：在 pnpm 未提升 vite、无法解析 vite/client 的环境下补齐
// 静态资源、CSS 与 import.meta.env 的类型

declare module '*.css';

declare module '*.png' {
    const src: string;
    export default src;
}

interface ImportMetaEnv {
    readonly DEV: boolean;
    readonly PROD: boolean;
    readonly MODE: string;
    readonly BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare module 'markdown-it-footnote';
