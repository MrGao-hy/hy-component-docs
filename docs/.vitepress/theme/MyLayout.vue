<template>
  <Layout>
    <template #doc-after>
      <div id="gitalk-container"></div>
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";

const {Layout} = DefaultTheme
import { watch, nextTick, onMounted } from "vue";
import "gitalk/dist/gitalk.css";
import { useRouter } from "vitepress";
import createGitalk from "../gitalk";

const { route } = useRouter();

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