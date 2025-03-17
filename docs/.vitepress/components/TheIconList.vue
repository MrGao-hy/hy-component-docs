<template>
  <div class="container">
    <template v-for="item in icon" :key="item.icon">
      <div class="container-box" @click="copyIconValFn(item.name)">
        <i :class="['iconfont', `hy-icon-${item.icon}`]"></i>
        <text class="name">{{item.label}}</text>
        <text class="value">{{item.name}}</text>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";

// 图标集合
const icon = reactive([
  {
    icon: "jiazai",
    label: "加载动画",
    name: "LOADING"
  },
  {
    icon: "close",
    label: "关闭",
    name: "CLOSE"
  },
  {
    icon: "collect",
    label: "空星",
    name: "STAR"
  },
  {
    icon: "collect-fill",
    label: "实星",
    name: "STAR_FILL"
  },
  {
    icon: "smile",
    label: "微笑",
    name: "SMILE"
  },
  {
    icon: "smile-fill",
    label: "微笑-实心",
    name: "SMILE_FILL"
  },
  {
    icon: "cry-fill",
    label: "难过-实心",
    name: "CRY_FILL"
  },
  {
    icon: "check-mask",
    label: "打勾，勾选",
    name: "CHECK_MASK"
  },
  {
    icon: "edit",
    label: "编辑",
    name: "EDIT"
  },
  {
    icon: "shop",
    label: "商城",
    name: "SHOP"
  },
  {
    icon: "lock-fill",
    label: "实心锁",
    name: "LOCK_FILL"
  },
  {
    icon: "lock-open-fill",
    label: "打开实心锁",
    name: "LOCK_OPEN_FILL"
  },
  {
    icon: "lock",
    label: "空心锁",
    name: "LOCK"
  },
  {
    icon: "map",
    label: "地点",
    name: "MAP"
  },
  {
    icon: "map-fill",
    label: "地点-实心",
    name: "MAP_FILL"
  },
  {
    icon: "shopping-cart",
    label: "购物车",
    name: "SHOPPING_CART"
  },
  {
    icon: "shopping-cart-fill",
    label: "购物车-实心",
    name: "SHOPPING_CART_FILL"
  },
  {
    icon: "shopping-cart-add",
    label: "添加购物车",
    name: "SHOPPING_CART_ADD"
  },
  {
    icon: "shopping-bag",
    label: "购物袋",
    name: "SHOPPING_BAG"
  },
  {
    icon: "refresh",
    label: "刷新",
    name: "REFRESH"
  },
  {
    icon: "task",
    label: "任务",
    name: "TASK"
  },
  {
    icon: "tag",
    label: "标签",
    name: "TAG"
  },
  {
    icon: "left",
    label: "左",
    name: "LEFT"
  },
  {
    icon: "right",
    label: "右",
    name: "RIGHT"
  },
  {
    icon: "up",
    label: "上",
    name: "UP"
  },
  {
    icon: "down",
    label: "下",
    name: "DOWN"
  },
  {
    icon: "arrow-up-fill",
    label: "向上-实心",
    name: "ARROW_UP_FILL"
  },
  {
    icon: "arrow-down-fill",
    label: "向下-实心",
    name: "ARROW_DOWN_FILL"
  },
  {
    icon: "arrow-left-fill",
    label: "向左-实心",
    name: "ARROW_LEFT_FILL"
  },
  {
    icon: "arrow-right-fill",
    label: "向右-实心",
    name: "ARROW_RIGHT_FILL"
  },
  {
    icon: "arrow-double-left",
    label: "向左双箭头",
    name: "ARROW_DOUBLE_LEFT"
  },
  {
    icon: "arrow-double-right",
    label: "向右双箭头",
    name: "ARROW_DOUBLE_RIGHT"
  },
  {
    icon: "arrow-leftward",
    label: "箭头向左",
    name: "ARROW_LEFTWARD"
  },
  {
    icon: "arrow-rightward",
    label: "箭头向右",
    name: "ARROW_RIGHTWARD"
  },
  {
    icon: "history",
    label: "历史",
    name: "HISTORY"
  },
  {
    icon: "time",
    label: "时间",
    name: "TIME"
  },
  {
    icon: "network",
    label: "网络",
    name: "NETWORK"
  },
  {
    icon: "list-dot",
    label: "列表",
    name: "LIST_DOT"
  },
  {
    icon: "menu",
    label: "菜单",
    name: "MENU"
  },
  {
    icon: "search",
    label: "搜索",
    name: "SEARCH"
  },
  {
    icon: "plus",
    label: "加",
    name: "PLUS"
  },
  {
    icon: "minus",
    label: "减",
    name: "MINUS"
  },
  {
    icon: "remind",
    label: "提醒",
    name: "REMIND"
  },
  {
    icon: "warning",
    label: "警告",
    name: "WARNING"
  },
  {
    icon: "delete",
    label: "删除",
    name: "DELETE"
  },
  {
    icon: "screen",
    label: "筛选",
    name: "SCREEN"
  },
  {
    icon: "class",
    label: "分类",
    name: "CLASS"
  },
  {
    icon: "class-fill",
    label: "应用",
    name: "CLASS_FILL"
  },
  {
    icon: "home",
    label: "首页",
    name: "HOME"
  },
  {
    icon: "home-fill",
    label: "首页-实心",
    name: "HOME_FILL"
  },
  {
    icon: "mine",
    label: "我的",
    name: "MINE"
  },
  {
    icon: "mine-fill",
    label: "我的-实心",
    name: "MINE_FILL"
  },
  {
    icon: "setting",
    label: "设置",
    name: "SETTING"
  },
  {
    icon: "close-circle",
    label: "关闭-圈",
    name: "CLOSE_CIRCLE"
  },
  {
    icon: "notice",
    label: "注意",
    name: "NOTICE"
  },
  {
    icon: "checked",
    label: "选中",
    name: "CHECKED"
  },
  {
    icon: "success",
    label: "成功",
    name: "SUCCESS"
  },
  {
    icon: "help",
    label: "帮助",
    name: "HELP"
  },
  {
    icon: "upload",
    label: "上传",
    name: "UPLOAD"
  },
  {
    icon: "switch",
    label: "转换",
    name: "SWITCH"
  },
  {
    icon: "download",
    label: "下载",
    name: "DOWNLOAD"
  },
  {
    icon: "security",
    label: "保护",
    name: "SECURITY"
  },
  {
    icon: "scan",
    label: "扫码",
    name: "SCAN"
  },
  {
    icon: "save",
    label: "保存",
    name: "SAVE"
  },
  {
    icon: "picture",
    label: "图片",
    name: "PHOTO"
  },
  {
    icon: "pdf",
    label: "pdf",
    name: "PDF"
  },
  {
    icon: "navigation",
    label: "导航",
    name: "NAVIGATION"
  },
  {
    icon: "print",
    label: "打印",
    name: "PRINT"
  },
  {
    icon: "layers",
    label: "layers",
    name: "LAYERS"
  },
  {
    icon: "link",
    label: "链接",
    name: "LINK"
  },
  {
    icon: "export",
    label: "导出",
    name: "EXPORT"
  },
  {
    icon: "ellipsis",
    label: "省略号",
    name: "ELLIPSIS"
  },
  {
    icon: "customer-service",
    label: "客服",
    name: "CUSTOMER_SERVICE"
  },
  {
    icon: "comment",
    label: "信息",
    name: "COMMENT"
  },
  {
    icon: "attachment",
    label: "附件",
    name: "ATTACHMENT"
  },
  {
    icon: "camera",
    label: "相机",
    name: "CAMERA"
  },
  {
    icon: "eye",
    label: "眼睛",
    name: "EYE"
  },
  {
    icon: "calendar",
    label: "日历",
    name: "CALENDAR"
  },
  {
    icon: "copy",
    label: "复制",
    name: "COPY"
  },
  {
    icon: "order",
    label: "订单",
    name: "ORDER"
  }
])

// 复制icon值
const copyIconValFn = async (value: string) => {
  await navigator.clipboard.writeText(value);
  alert(`“${value}”已复制到剪贴板！`);
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  &-box {
    width: 20%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--vp-c-divider);
    border-radius: 2px;
    padding: 10px;
    &:hover {
      border-color: var(--vp-c-brand-1);
      box-shadow: 0 0 10rpx 10rpx rgba(0, 0, 0, 0.51);
    }
    .iconfont {
      font-size: 40px;
    }
    .name {
      margin-top: 20px;
    }
    .value {
      width: 100%;
      overflow: hidden; //超出的文本隐藏
      text-overflow: ellipsis; //用省略号显示
      white-space: nowrap; //不换行
      text-align: center;
    }
  }
}
</style>