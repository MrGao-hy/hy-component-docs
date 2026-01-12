<template>
  <Layout>
    <template #doc-after>
      <div id="gitalk-container"></div>
    </template>
    <Analytics />
    <template #nav-bar-content-before>
      <Documate/>
    </template>
    <template #layout-top>
      <MouseFollower />
      <MouseClick />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import { inject  } from '@vercel/analytics';
// ai模型
import Documate from '@documate/vue';
import '@documate/vue/dist/style.css';

const {Layout} = DefaultTheme
import { watch, nextTick, onMounted } from "vue";
import "gitalk/dist/gitalk.css";
import { useRouter } from "vitepress";
import createGitalk from "../gitalk";

const { route } = useRouter();
// 使用@vercel/analytics监听完整访客量
inject()

const initGitalk = () => {
  if (typeof window !== "undefined") {
    const container = document.getElementById("gitalk-container");
    if (container) {
      container.innerHTML = "";
      createGitalk(route.path);
    }
  }
};

onMounted(() => {
  initGitalk();
  watch(
      () => route.path,
      (newPath) => {
        nextTick(() => {
          initGitalk();
        });
      }
  );
});
</script>