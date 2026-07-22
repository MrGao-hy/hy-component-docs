<script setup lang="ts">
import { ref, onMounted } from "vue";

const visible = ref(false);

onMounted(() => {
  // 延迟一帧触发入场动画
  requestAnimationFrame(() => {
    visible.value = true;
  });
});
</script>

<template>
  <div class="panel" :class="{ 'is-visible': visible }">
    <div class="container">
      <div class="divider-line"></div>
      <section class="grid">
        <div class="stat-item">
          <svg
            class="stat-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span class="text">
            本站总访问量
            <span id="busuanzi_value_page_pv" class="font-bold">--</span>
            <span class="unit">次</span>
          </span>
        </div>

        <div class="stat-item">
          <svg
            class="stat-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span class="text">
            本站访客数
            <span id="busuanzi_value_site_uv" class="font-bold">--</span>
            <span class="unit">人次</span>
          </span>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.panel {
  margin-top: 12px;
  margin-bottom: 8px;
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.panel.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.container {
  position: relative;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  width: 100%;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

.divider-line {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--vp-c-brand-1) 20%,
    var(--vp-c-brand-2) 50%,
    var(--vp-c-brand-1) 80%,
    transparent
  );
  opacity: 0.4;
  animation: shimmer 3s ease-in-out infinite;
}

.grid {
  font-weight: 500;
  padding: 14px 24px;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  display: grid;
  gap: 8px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-icon {
  width: 16px;
  height: 16px;
  color: var(--vp-c-brand-1);
  opacity: 0.7;
  flex-shrink: 0;
  transition: opacity 0.3s ease;
}

.stat-item:hover .stat-icon {
  opacity: 1;
}

.text {
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--vp-c-text-2);
}

.font-bold {
  color: var(--vp-c-text-1);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  margin: 0 2px;
}

.unit {
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
}

@keyframes shimmer {
  0%,
  100% {
    opacity: 0.3;
    transform: scaleX(0.8);
  }
  50% {
    opacity: 0.6;
    transform: scaleX(1);
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 12px 16px;
  }

  .stat-item {
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .panel {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .divider-line {
    animation: none;
    opacity: 0.4;
  }
}
</style>
