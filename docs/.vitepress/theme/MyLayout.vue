<template>
  <Layout>
    <!-- 文档下面的评论 -->
    <template #doc-after>
      <div id="gitalk-container"></div>
    </template>
    <!-- 侧边导航栏，用来放广告位的 -->
    <template #sidebar-nav-before>
      <AdvertisingPosition />
    </template>

<!--    <Analytics />-->
    <!-- 头部logo的后面插槽 -->
    <template #nav-bar-title-after>
      <DocVersion/>
    </template>
    <!-- 头部导航栏内容左侧 -->
    <template #nav-bar-content-before>
      <Documate/>
    </template>
    <template #layout-top>
      <MouseFollower />
      <MouseClick />
    </template>
    <template #doc-footer-before>
      <BackTop />
    </template>
    <template #not-found>
      <NoPage />
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