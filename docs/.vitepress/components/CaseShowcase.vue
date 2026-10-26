<!--
    CaseShowcase：模板案例展示卡片
    用途：接收案例数组，渲染二维码卡片网格（案例名 / 简介 / 标签 / 微信小程序码），
          网格末尾自动追加“更多案例上架中”空态占位卡片。
    用法：<CaseShowcase :cases="[{ name, desc, tags: [], qr, tip }]" />
-->
<script setup>
    // 模板案例展示组件：接收案例数组，渲染二维码卡片网格 + 空态占位卡片
    defineProps({
        cases: {
            type: Array,
            default: () => [],
        },
    });
</script>

<template>
    <div class="cases-grid">
        <div v-for="item in cases" :key="item.name" class="case-card">
            <div class="case-qr">
                <img :src="item.qr" :alt="`${item.name}微信小程序码`" loading="lazy" />
            </div>
            <div class="case-info">
                <p class="case-name">{{ item.name }}</p>
                <p class="case-desc">{{ item.desc }}</p>
                <div class="case-tags">
                    <span v-for="tag in item.tags" :key="tag" class="case-tag">{{ tag }}</span>
                </div>
            </div>
            <div class="case-footer">
                <svg class="scan-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                </svg>
                <span>{{ item.tip }}</span>
            </div>
        </div>
        <div class="case-card case-card-empty">
            <p class="empty-title">更多案例上架中</p>
            <p class="empty-desc">优秀模板案例持续更新，敬请期待</p>
        </div>
    </div>
</template>

<style scoped>
    .cases-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        gap: 20px;
        margin: 24px 0;
    }

    .case-card {
        display: flex;
        flex-direction: column;
        padding: 20px;
        background-color: var(--vp-c-bg-soft);
        border: 1px solid var(--vp-c-divider);
        border-radius: 12px;
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
    }

    .case-card:hover {
        transform: translateY(-4px);
        border-color: rgba(1, 190, 255, 0.5);
        box-shadow: 0 12px 32px rgba(1, 190, 255, 0.15);
    }

    .case-qr {
        display: flex;
        justify-content: center;
        padding: 8px 0 16px;
    }

    .case-qr img {
        width: 150px;
        height: 150px;
        border-radius: 8px;
        background-color: #ffffff;
        padding: 4px;
    }

    .case-info {
        flex: 1;
    }

    .case-name {
        margin: 0;
        font-size: 16px;
        font-weight: 700;
        color: var(--vp-c-text-1);
    }

    .case-desc {
        margin: 8px 0 12px;
        font-size: 13px;
        line-height: 1.7;
        color: var(--vp-c-text-2);
    }

    .case-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .case-tag {
        padding: 2px 10px;
        font-size: 12px;
        border-radius: 999px;
        background-color: rgba(1, 190, 255, 0.12);
        color: #0090d0;
    }

    .dark .case-tag {
        color: #01beff;
    }

    .case-footer {
        display: flex;
        gap: 6px;
        align-items: center;
        justify-content: center;
        margin-top: 16px;
        padding-top: 12px;
        font-size: 12px;
        color: var(--vp-c-text-2);
        border-top: 1px dashed var(--vp-c-divider);
    }

    .scan-icon {
        width: 14px;
        height: 14px;
        color: #07c160;
    }

    /* 空状态占位卡片 */
    .case-card-empty {
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border-style: dashed;
        text-align: center;
    }

    .case-card-empty:hover {
        transform: none;
        border-color: var(--vp-c-divider);
        box-shadow: none;
    }

    .empty-title {
        margin: 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--vp-c-text-2);
    }

    .empty-desc {
        margin: 6px 0 0;
        font-size: 12px;
        color: var(--vp-c-text-3);
    }
</style>
