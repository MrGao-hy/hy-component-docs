<!--
    TheIconList：iconfont 图标列表（按 IconPark 官方风格分类）
    用途：按分类分组网格展示组件库全部内置图标（图标预览 / 中文名 / 常量名），
          点击任意图标复制其常量名，并通过 ant-design-vue notification 弹出复制成功提示。
    维护：新增图标时在下方 iconGroups 对应分类的 list 中补充（icon: 类名后缀, label: 中文名, name: 常量名）。
-->
<template>
    <div class="container">
        <section v-for="group in iconGroups" :key="group.title" class="group">
            <h3 class="group-title">
                {{ group.title }}
                <span class="group-count">{{ group.list.length }}</span>
            </h3>
            <div class="grid">
                <div
                    v-for="item in group.list"
                    :key="item.icon"
                    class="container-box"
                    @click="copyIconValFn(item.name)"
                >
                    <i :class="['iconfont', `hy-icon-${item.icon}`]"></i>
                    <text class="name">{{ item.label }}</text>
                    <text class="value">{{ item.name }}</text>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
    import { reactive } from 'vue';
    import { notification } from 'ant-design-vue';

    // 图标分类集合
    const iconGroups = reactive([
        {
            title: '方向指示',
            list: [
                {
                    icon: 'up',
                    label: '上',
                    name: 'UP',
                },
                {
                    icon: 'up-fill',
                    label: '上-实心',
                    name: 'UP_FILL',
                },
                {
                    icon: 'down',
                    label: '下',
                    name: 'DOWN',
                },
                {
                    icon: 'down-fill',
                    label: '下-实心',
                    name: 'DOWN_FILL',
                },
                {
                    icon: 'left',
                    label: '左',
                    name: 'LEFT',
                },
                {
                    icon: 'left-fill',
                    label: '左-实心',
                    name: 'LEFT_FILL',
                },
                {
                    icon: 'right',
                    label: '右',
                    name: 'RIGHT',
                },
                {
                    icon: 'right-fill',
                    label: '右-实心',
                    name: 'RIGHT_FILL',
                },
                {
                    icon: 'arrow-up',
                    label: '箭头向上',
                    name: 'ARROW_UP',
                },
                {
                    icon: 'arrow-down',
                    label: '箭头向下',
                    name: 'ARROW_DOWN',
                },
                {
                    icon: 'arrow-left',
                    label: '箭头向左',
                    name: 'ARROW_LEFT',
                },
                {
                    icon: 'arrow-right',
                    label: '箭头向右',
                    name: 'ARROW_RIGHT',
                },
                {
                    icon: 'arrow-left-up',
                    label: '箭头左上',
                    name: 'ARROW_LEFT_UP',
                },
                {
                    icon: 'arrow-left-down',
                    label: '箭头左下',
                    name: 'ARROW_LEFT_DOWN',
                },
                {
                    icon: 'arrow-right-up',
                    label: '箭头右上',
                    name: 'ARROW_RIGHT_UP',
                },
                {
                    icon: 'arrow-right-down',
                    label: '箭头右下',
                    name: 'ARROW_RIGHT_DOWN',
                },
                {
                    icon: 'arrow-circle-up',
                    label: '圆圈向上',
                    name: 'ARROW_CIRCLE_UP',
                },
                {
                    icon: 'arrow-circle-down',
                    label: '圆圈向下',
                    name: 'ARROW_CIRCLE_DOWN',
                },
                {
                    icon: 'arrow-circle-left',
                    label: '圆圈向左',
                    name: 'ARROW_CIRCLE_LEFT',
                },
                {
                    icon: 'arrow-circle-right',
                    label: '圆圈向右',
                    name: 'ARROW_CIRCLE_RIGHT',
                },
                {
                    icon: 'double-up',
                    label: '双箭头向上',
                    name: 'DOUBLE_UP',
                },
                {
                    icon: 'double-down',
                    label: '双箭头向下',
                    name: 'DOUBLE_DOWN',
                },
                {
                    icon: 'double-left',
                    label: '双箭头向左',
                    name: 'DOUBLE_LEFT',
                },
                {
                    icon: 'double-right',
                    label: '双箭头向右',
                    name: 'DOUBLE_RIGHT',
                },
                {
                    icon: 'back',
                    label: '返回',
                    name: 'BACK',
                },
                {
                    icon: 'expand-down',
                    label: '下拉展开',
                    name: 'EXPAND_DOWN',
                },
                {
                    icon: 'fold-up',
                    label: '收起',
                    name: 'FOLD_UP',
                },
                {
                    icon: 'go-top',
                    label: '回到顶部',
                    name: 'GO_TOP',
                },
                {
                    icon: 'go-bottom',
                    label: '回到底部',
                    name: 'GO_BOTTOM',
                },
                {
                    icon: 'go-start',
                    label: '回到开始',
                    name: 'GO_START',
                },
                {
                    icon: 'go-end',
                    label: '回到结束',
                    name: 'GO_END',
                },
                {
                    icon: 'to-top',
                    label: '置顶',
                    name: 'TO_TOP',
                },
                {
                    icon: 'to-bottom',
                    label: '置底',
                    name: 'TO_BOTTOM',
                },
                {
                    icon: 'to-left',
                    label: '跳转左侧',
                    name: 'TO_LEFT',
                },
                {
                    icon: 'to-right',
                    label: '跳转右侧',
                    name: 'TO_RIGHT',
                },
            ],
        },
        {
            title: '提示建议',
            list: [
                {
                    icon: 'add-circle',
                    label: '添加-圈',
                    name: 'ADD_CIRCLE',
                },
                {
                    icon: 'add-circle-fill',
                    label: '添加-圈-实心',
                    name: 'ADD_CIRCLE_FILL',
                },
                {
                    icon: 'minus',
                    label: '减',
                    name: 'MINUS',
                },
                {
                    icon: 'plus',
                    label: '加',
                    name: 'PLUS',
                },
                {
                    icon: 'reduce',
                    label: '减少',
                    name: 'REDUCE',
                },
                {
                    icon: 'reduce-fill',
                    label: '减少-实心',
                    name: 'REDUCE_FILL',
                },
                {
                    icon: 'check',
                    label: '勾选',
                    name: 'CHECK',
                },
                {
                    icon: 'check-circle',
                    label: '勾选-圈',
                    name: 'CHECK_CIRCLE',
                },
                {
                    icon: 'check-circle-fill',
                    label: '勾选-圈-实心',
                    name: 'CHECK_CIRCLE_FILL',
                },
                {
                    icon: 'check-square',
                    label: '勾选-方框',
                    name: 'CHECK_SQUARE',
                },
                {
                    icon: 'check-square-fill',
                    label: '勾选-方框-实心',
                    name: 'CHECK_SQUARE_FILL',
                },
                {
                    icon: 'close',
                    label: '关闭',
                    name: 'CLOSE',
                },
                {
                    icon: 'close-circle',
                    label: '关闭圆圈',
                    name: 'CLOSE_CIRCLE',
                },
                {
                    icon: 'close-circle-fill',
                    label: '关闭圆圈-实心',
                    name: 'CLOSE_CIRCLE_FILL',
                },
                {
                    icon: 'success',
                    label: '成功',
                    name: 'SUCCESS',
                },
                {
                    icon: 'success-fill',
                    label: '成功-实心',
                    name: 'SUCCESS_FILL',
                },
                {
                    icon: 'info',
                    label: '信息',
                    name: 'INFO',
                },
                {
                    icon: 'info-fill',
                    label: '信息-实心',
                    name: 'INFO_FILL',
                },
                {
                    icon: 'attention',
                    label: '注意',
                    name: 'ATTENTION',
                },
                {
                    icon: 'attention-fill',
                    label: '注意-实心',
                    name: 'ATTENTION_FILL',
                },
                {
                    icon: 'caution',
                    label: '警告',
                    name: 'CAUTION',
                },
                {
                    icon: 'caution-fill',
                    label: '警告-实心',
                    name: 'CAUTION_FILL',
                },
                {
                    icon: 'help',
                    label: '帮助',
                    name: 'HELP',
                },
                {
                    icon: 'help-fill',
                    label: '帮助-实心',
                    name: 'HELP_FILL',
                },
                {
                    icon: 'remind',
                    label: '提醒',
                    name: 'REMIND',
                },
                {
                    icon: 'remind-fill',
                    label: '提醒-实体',
                    name: 'REMIND_FILL',
                },
            ],
        },
        {
            title: '编辑操作',
            list: [
                {
                    icon: 'edit',
                    label: '编辑',
                    name: 'EDIT',
                },
                {
                    icon: 'edit-fill',
                    label: '编辑-实心',
                    name: 'EDIT_FILL',
                },
                {
                    icon: 'edit-name',
                    label: '编辑名称',
                    name: 'EDIT_NAME',
                },
                {
                    icon: 'write',
                    label: '撰写',
                    name: 'WRITE',
                },
                {
                    icon: 'copy',
                    label: '复制',
                    name: 'COPY',
                },
                {
                    icon: 'copy-fill',
                    label: '复制-实心',
                    name: 'COPY_FILL',
                },
                {
                    icon: 'save',
                    label: '保存',
                    name: 'SAVE',
                },
                {
                    icon: 'delete',
                    label: '删除',
                    name: 'DELETE',
                },
                {
                    icon: 'delete-fill',
                    label: '删除-实心',
                    name: 'DELETE_FILL',
                },
                {
                    icon: 'del',
                    label: '删除',
                    name: 'DEL',
                },
                {
                    icon: 'del-fill',
                    label: '删除-实心',
                    name: 'DEL_FILL',
                },
                {
                    icon: 'search',
                    label: '搜索',
                    name: 'SEARCH',
                },
                {
                    icon: 'search-fill',
                    label: '搜索-实心',
                    name: 'SEARCH_FILL',
                },
                {
                    icon: 'doc-search',
                    label: '文档搜索',
                    name: 'DOC_SEARCH',
                },
                {
                    icon: 'filter',
                    label: '筛选',
                    name: 'FILTER',
                },
                {
                    icon: 'filter-fill',
                    label: '筛选-实心',
                    name: 'FILTER_FILL',
                },
                {
                    icon: 'sort',
                    label: '排序',
                    name: 'SORT',
                },
                {
                    icon: 'file-addition',
                    label: '添加文件',
                    name: 'FILE_ADDITION',
                },
                {
                    icon: 'file-addition-fill',
                    label: '添加文件-实心',
                    name: 'FILE_ADDITION_FILL',
                },
                {
                    icon: 'file-editing',
                    label: '文件编辑',
                    name: 'FILE_EDITING',
                },
                {
                    icon: 'file-conversion',
                    label: '文件转换',
                    name: 'FILE_CONVERSION',
                },
                {
                    icon: 'file-pdf',
                    label: 'pdf 文件',
                    name: 'FILE_PDF',
                },
                {
                    icon: 'file-zip',
                    label: 'zip 文件',
                    name: 'FILE_ZIP',
                },
                {
                    icon: 'document-folder',
                    label: '文档文件夹',
                    name: 'DOCUMENT_FOLDER',
                },
                {
                    icon: 'upload',
                    label: '上传',
                    name: 'UPLOAD',
                },
                {
                    icon: 'download',
                    label: '下载',
                    name: 'DOWNLOAD',
                },
                {
                    icon: 'cloud-upload',
                    label: '云端上传',
                    name: 'CLOUD_UPLOAD',
                },
                {
                    icon: 'cloud-download',
                    label: '云端下载',
                    name: 'CLOUD_DOWNLOAD',
                },
                {
                    icon: 'down-picture',
                    label: '下载图片',
                    name: 'DOWN_PICTURE',
                },
                {
                    icon: 'text-recognition',
                    label: '文本识别',
                    name: 'TEXT_RECOGNITION',
                },
                {
                    icon: 'translate',
                    label: '翻译',
                    name: 'TRANSLATE',
                },
                {
                    icon: 'transfer-data',
                    label: '数据传输',
                    name: 'TRANSFER_DATA',
                },
                {
                    icon: 'zoom-in',
                    label: '放大',
                    name: 'ZOOM_IN',
                },
                {
                    icon: 'zoom-out',
                    label: '缩小',
                    name: 'ZOOM_OUT',
                },
            ],
        },
        {
            title: '媒体影音',
            list: [
                {
                    icon: 'play',
                    label: '播放',
                    name: 'PLAY',
                },
                {
                    icon: 'play-circle',
                    label: '播放-圈',
                    name: 'PLAY_CIRCLE',
                },
                {
                    icon: 'play-circle-fill',
                    label: '播放-圈-实心',
                    name: 'PLAY_CIRCLE_FILL',
                },
                {
                    icon: 'play-cycle',
                    label: '列表循环',
                    name: 'PLAY_CYCLE',
                },
                {
                    icon: 'replay-music',
                    label: '单曲循环',
                    name: 'REPLAY_MUSIC',
                },
                {
                    icon: 'pause',
                    label: '暂停',
                    name: 'PAUSE',
                },
                {
                    icon: 'pause-circle',
                    label: '暂停-圈',
                    name: 'PAUSE_CIRCLE',
                },
                {
                    icon: 'pause-circle-fill',
                    label: '暂停-圈-实心',
                    name: 'PAUSE_CIRCLE_FILL',
                },
                {
                    icon: 'voice',
                    label: '语音',
                    name: 'VOICE',
                },
                {
                    icon: 'voice-fill',
                    label: '语音-实心',
                    name: 'VOICE_FILL',
                },
                {
                    icon: 'voice-off',
                    label: '关闭语音',
                    name: 'VOICE_OFF',
                },
                {
                    icon: 'volume-up',
                    label: '高音量',
                    name: 'VOLUME_UP',
                },
                {
                    icon: 'volume-up-fill',
                    label: '高音量-实心',
                    name: 'VOLUME_UP_FILL',
                },
                {
                    icon: 'volume-down',
                    label: '低音量',
                    name: 'VOLUME_DOWN',
                },
                {
                    icon: 'volume-down-fill',
                    label: '低音量-实心',
                    name: 'VOLUME_DOWN_FILL',
                },
                {
                    icon: 'volume-small',
                    label: '小音量',
                    name: 'VOLUME_SMALL',
                },
                {
                    icon: 'volume-small-fill',
                    label: '小音量-实心',
                    name: 'VOLUME_SMALL_FILL',
                },
                {
                    icon: 'volume-mute',
                    label: '静音',
                    name: 'VOLUME_MUTE',
                },
                {
                    icon: 'volume-mute-fill',
                    label: '静音-实心',
                    name: 'VOLUME_MUTE_FILL',
                },
                {
                    icon: 'volume-notice',
                    label: '音量提示',
                    name: 'VOLUME_NOTICE',
                },
                {
                    icon: 'volume-notice-fill',
                    label: '音量提示-实心',
                    name: 'VOLUME_NOTICE_FILL',
                },
                {
                    icon: 'headset',
                    label: '耳机',
                    name: 'HEADSET',
                },
                {
                    icon: 'equalizer',
                    label: '均衡器',
                    name: 'EQUALIZER',
                },
                {
                    icon: 'waves-left',
                    label: '声波-左',
                    name: 'WAVES_LEFT',
                },
                {
                    icon: 'camera',
                    label: '相机',
                    name: 'CAMERA',
                },
                {
                    icon: 'pic',
                    label: '图片',
                    name: 'PIC',
                },
                {
                    icon: 'pic-fill',
                    label: '图片-实心',
                    name: 'PIC_FILL',
                },
                {
                    icon: 'add-picture',
                    label: '添加图片',
                    name: 'ADD_PICTURE',
                },
                {
                    icon: 'picture-album',
                    label: '相册',
                    name: 'PICTURE_ALBUM',
                },
            ],
        },
        {
            title: '通信连接',
            list: [
                {
                    icon: 'phone',
                    label: '手机',
                    name: 'PHONE',
                },
                {
                    icon: 'phone-fill',
                    label: '电话-实心',
                    name: 'PHONE_FILL',
                },
                {
                    icon: 'phone-incoming',
                    label: '来电',
                    name: 'PHONE_INCOMING',
                },
                {
                    icon: 'phone-outgoing',
                    label: '拨出电话',
                    name: 'PHONE_OUTGOING',
                },
                {
                    icon: 'phone-off',
                    label: '挂断电话',
                    name: 'PHONE_OFF',
                },
                {
                    icon: 'phone-telephone',
                    label: '座机',
                    name: 'PHONE_TELEPHONE',
                },
                {
                    icon: 'phone-telephone-fill',
                    label: '座机-实心',
                    name: 'PHONE_TELEPHONE_FILL',
                },
                {
                    icon: 'mail',
                    label: '邮件',
                    name: 'MAIL',
                },
                {
                    icon: 'send',
                    label: '发送',
                    name: 'SEND',
                },
                {
                    icon: 'at-sign',
                    label: '艾特',
                    name: 'AT_SIGN',
                },
                {
                    icon: 'message',
                    label: '消息',
                    name: 'MESSAGE',
                },
                {
                    icon: 'message-fill',
                    label: '消息-实心',
                    name: 'MESSAGE_FILL',
                },
                {
                    icon: 'comment',
                    label: '信息',
                    name: 'COMMENT',
                },
                {
                    icon: 'comment-fill',
                    label: '评论-实心',
                    name: 'COMMENT_FILL',
                },
                {
                    icon: 'comments',
                    label: '评论',
                    name: 'COMMENTS',
                },
                {
                    icon: 'comments-fill',
                    label: '评论-实心',
                    name: 'COMMENTS_FILL',
                },
                {
                    icon: 'wifi',
                    label: '无线网络',
                    name: 'WIFI',
                },
                {
                    icon: 'close-wifi',
                    label: '关闭无线',
                    name: 'CLOSE_WIFI',
                },
                {
                    icon: 'signal',
                    label: '信号',
                    name: 'SIGNAL',
                },
                {
                    icon: 'bluetooth',
                    label: '蓝牙',
                    name: 'BLUETOOTH',
                },
                {
                    icon: 'turn-off-bluetooth',
                    label: '关闭蓝牙',
                    name: 'TURN_OFF_BLUETOOTH',
                },
                {
                    icon: 'location',
                    label: '定位',
                    name: 'LOCATION',
                },
                {
                    icon: 'location-fill',
                    label: '定位-实心',
                    name: 'LOCATION_FILL',
                },
                {
                    icon: 'local',
                    label: '本地',
                    name: 'LOCAL',
                },
                {
                    icon: 'local-fill',
                    label: '本地-实心',
                    name: 'LOCAL_FILL',
                },
                {
                    icon: 'navigation',
                    label: '导航',
                    name: 'NAVIGATION',
                },
                {
                    icon: 'navigation-fill',
                    label: '导航-实心',
                    name: 'NAVIGATION_FILL',
                },
                {
                    icon: 'aiming',
                    label: '瞄准',
                    name: 'AIMING',
                },
                {
                    icon: 'radar',
                    label: '雷达',
                    name: 'RADAR',
                },
                {
                    icon: 'earth',
                    label: '地球',
                    name: 'EARTH',
                },
            ],
        },
        {
            title: '界面交互',
            list: [
                {
                    icon: 'home',
                    label: '首页',
                    name: 'HOME',
                },
                {
                    icon: 'home-fill',
                    label: '首页-实心',
                    name: 'HOME_FILL',
                },
                {
                    icon: 'all-application',
                    label: '全部应用',
                    name: 'ALL_APPLICATION',
                },
                {
                    icon: 'all-application-fill',
                    label: '全部应用-实心',
                    name: 'ALL_APPLICATION_FILL',
                },
                {
                    icon: 'more-app',
                    label: '更多应用',
                    name: 'MORE_APP',
                },
                {
                    icon: 'more-app-fill',
                    label: '更多应用-实心',
                    name: 'MORE_APP_FILL',
                },
                {
                    icon: 'more',
                    label: '更多',
                    name: 'MORE',
                },
                {
                    icon: 'more-circle',
                    label: '更多-圈',
                    name: 'MORE_CIRCLE',
                },
                {
                    icon: 'more-circle-fill',
                    label: '更多-圈-实心',
                    name: 'MORE_CIRCLE_FILL',
                },
                {
                    icon: 'more-vertical',
                    label: '更多-竖排',
                    name: 'MORE_VERTICAL',
                },
                {
                    icon: 'list',
                    label: '列表',
                    name: 'LIST',
                },
                {
                    icon: 'tag',
                    label: '标签',
                    name: 'TAG',
                },
                {
                    icon: 'tag-fill',
                    label: '标签-实心',
                    name: 'TAG_FILL',
                },
                {
                    icon: 'link',
                    label: '链接',
                    name: 'LINK',
                },
                {
                    icon: 'setting',
                    label: '设置',
                    name: 'SETTING',
                },
                {
                    icon: 'setting-fill',
                    label: '设置-实体',
                    name: 'SETTING_FILL',
                },
                {
                    icon: 'system',
                    label: '系统',
                    name: 'SYSTEM',
                },
                {
                    icon: 'system-fill',
                    label: '系统-实心',
                    name: 'SYSTEM_FILL',
                },
                {
                    icon: 'tool',
                    label: '工具',
                    name: 'TOOL',
                },
                {
                    icon: 'tool-fill',
                    label: '工具-实心',
                    name: 'TOOL_FILL',
                },
                {
                    icon: 'eye-open',
                    label: '眼睛-睁开',
                    name: 'EYE_OPEN',
                },
                {
                    icon: 'eye-close',
                    label: '眼睛-关闭',
                    name: 'EYE_CLOSE',
                },
                {
                    icon: 'preview-close',
                    label: '预览关闭',
                    name: 'PREVIEW_CLOSE',
                },
                {
                    icon: 'lock',
                    label: '空心锁',
                    name: 'LOCK',
                },
                {
                    icon: 'lock-fill',
                    label: '实心锁',
                    name: 'LOCK_FILL',
                },
                {
                    icon: 'unlock',
                    label: '解锁',
                    name: 'UNLOCK',
                },
                {
                    icon: 'unlock-fill',
                    label: '解锁-实心',
                    name: 'UNLOCK_FILL',
                },
                {
                    icon: 'scan',
                    label: '扫码',
                    name: 'SCAN',
                },
                {
                    icon: 'qr-code',
                    label: '二维码',
                    name: 'QR_CODE',
                },
                {
                    icon: 'pay-code',
                    label: '付款码',
                    name: 'PAY_CODE',
                },
                {
                    icon: 'calendar',
                    label: '日历',
                    name: 'CALENDAR',
                },
                {
                    icon: 'alarm-clock',
                    label: '闹钟',
                    name: 'ALARM_CLOCK',
                },
                {
                    icon: 'time',
                    label: '时间',
                    name: 'TIME',
                },
                {
                    icon: 'history',
                    label: '历史',
                    name: 'HISTORY',
                },
                {
                    icon: 'share',
                    label: '分享',
                    name: 'SHARE',
                },
                {
                    icon: 'share-fill',
                    label: '分享-实心',
                    name: 'SHARE_FILL',
                },
                {
                    icon: 'share-one',
                    label: '分享-单',
                    name: 'SHARE_ONE',
                },
                {
                    icon: 'share-external',
                    label: '外部分享',
                    name: 'SHARE_EXTERNAL',
                },
                {
                    icon: 'share-link',
                    label: '分享链接',
                    name: 'SHARE_LINK',
                },
                {
                    icon: 'rss',
                    label: '订阅',
                    name: 'RSS',
                },
                {
                    icon: 'rss-fill',
                    label: '订阅-实心',
                    name: 'RSS_FILL',
                },
                {
                    icon: 'power',
                    label: '电源',
                    name: 'POWER',
                },
                {
                    icon: 'switch',
                    label: '转换',
                    name: 'SWITCH',
                },
                {
                    icon: 'shake',
                    label: '摇一摇',
                    name: 'SHAKE',
                },
            ],
        },
        {
            title: '商务金融',
            list: [
                {
                    icon: 'shop',
                    label: '商城',
                    name: 'SHOP',
                },
                {
                    icon: 'shop-fill',
                    label: '商城-实心',
                    name: 'SHOP_FILL',
                },
                {
                    icon: 'mall-bag',
                    label: '购物袋',
                    name: 'MALL_BAG',
                },
                {
                    icon: 'mall-bag-fill',
                    label: '购物袋-实心',
                    name: 'MALL_BAG_FILL',
                },
                {
                    icon: 'shopping',
                    label: '购物',
                    name: 'SHOPPING',
                },
                {
                    icon: 'shopping-fill',
                    label: '购物-实心',
                    name: 'SHOPPING_FILL',
                },
                {
                    icon: 'shopping-cart-add',
                    label: '添加购物车',
                    name: 'SHOPPING_CART_ADD',
                },
                {
                    icon: 'shopping-cart-add-fill',
                    label: '添加购物车-实心',
                    name: 'SHOPPING_CART_ADD_FILL',
                },
                {
                    icon: 'order',
                    label: '订单',
                    name: 'ORDER',
                },
                {
                    icon: 'order-fill',
                    label: '订单-实心',
                    name: 'ORDER_FILL',
                },
                {
                    icon: 'transaction-order',
                    label: '交易订单',
                    name: 'TRANSACTION_ORDER',
                },
                {
                    icon: 'transaction-order-fill',
                    label: '交易订单-实心',
                    name: 'TRANSACTION_ORDER_FILL',
                },
                {
                    icon: 'wallet',
                    label: '钱包',
                    name: 'WALLET',
                },
                {
                    icon: 'wallet-fill',
                    label: '钱包-实心',
                    name: 'WALLET_FILL',
                },
                {
                    icon: 'bank-card',
                    label: '银行卡',
                    name: 'BANK_CARD',
                },
                {
                    icon: 'bank-card-fill',
                    label: '银行卡-实心',
                    name: 'BANK_CARD_FILL',
                },
                {
                    icon: 'coupon',
                    label: '优惠券',
                    name: 'COUPON',
                },
                {
                    icon: 'coupon-fill',
                    label: '优惠券-实心',
                    name: 'COUPON_FILL',
                },
                {
                    icon: 'ticket',
                    label: '票券',
                    name: 'TICKET',
                },
                {
                    icon: 'ticket-fill',
                    label: '票券-实心',
                    name: 'TICKET_FILL',
                },
                {
                    icon: 'vip',
                    label: '会员',
                    name: 'VIP',
                },
                {
                    icon: 'vip-fill',
                    label: '会员-实心',
                    name: 'VIP_FILL',
                },
                {
                    icon: 'gift',
                    label: '礼物',
                    name: 'GIFT',
                },
                {
                    icon: 'gift-fill',
                    label: '礼物-实心',
                    name: 'GIFT_FILL',
                },
                {
                    icon: 'chart-pie',
                    label: '饼图',
                    name: 'CHART_PIE',
                },
                {
                    icon: 'chart-pie-fill',
                    label: '饼图-实心',
                    name: 'CHART_PIE_FILL',
                },
                {
                    icon: 'certificate',
                    label: '证书',
                    name: 'CERTIFICATE',
                },
                {
                    icon: 'id-card',
                    label: '身份证',
                    name: 'ID_CARD',
                },
                {
                    icon: 'truck',
                    label: '货车',
                    name: 'TRUCK',
                },
            ],
        },
        {
            title: '用户社交',
            list: [
                {
                    icon: 'user',
                    label: '用户',
                    name: 'USER',
                },
                {
                    icon: 'me',
                    label: '我的',
                    name: 'ME',
                },
                {
                    icon: 'people',
                    label: '人群',
                    name: 'PEOPLE',
                },
                {
                    icon: 'people-fill',
                    label: '人群-实心',
                    name: 'PEOPLE_FILL',
                },
                {
                    icon: 'male',
                    label: '男性',
                    name: 'MALE',
                },
                {
                    icon: 'female',
                    label: '女性',
                    name: 'FEMALE',
                },
                {
                    icon: 'address-book',
                    label: '通讯录',
                    name: 'ADDRESS_BOOK',
                },
                {
                    icon: 'topic',
                    label: '话题',
                    name: 'TOPIC',
                },
                {
                    icon: 'like',
                    label: '点赞',
                    name: 'LIKE',
                },
                {
                    icon: 'like-fill',
                    label: '点赞-实心',
                    name: 'LIKE_FILL',
                },
                {
                    icon: 'dislike',
                    label: '点踩',
                    name: 'DISLIKE',
                },
                {
                    icon: 'good',
                    label: '好评',
                    name: 'GOOD',
                },
                {
                    icon: 'good-fill',
                    label: '好评-实心',
                    name: 'GOOD_FILL',
                },
                {
                    icon: 'bad',
                    label: '差评',
                    name: 'BAD',
                },
                {
                    icon: 'bad-fill',
                    label: '差评-实心',
                    name: 'BAD_FILL',
                },
                {
                    icon: 'star',
                    label: '空星',
                    name: 'STAR',
                },
                {
                    icon: 'star-fill',
                    label: '实星',
                    name: 'STAR_FILL',
                },
                {
                    icon: 'bookmark',
                    label: '书签',
                    name: 'BOOKMARK',
                },
                {
                    icon: 'bookmark-fill',
                    label: '书签-实心',
                    name: 'BOOKMARK_FILL',
                },
                {
                    icon: 'emotion-happy',
                    label: '开心',
                    name: 'EMOTION_HAPPY',
                },
                {
                    icon: 'emotion-happy-fill',
                    label: '开心-实心',
                    name: 'EMOTION_HAPPY_FILL',
                },
                {
                    icon: 'emotion-unhappy',
                    label: '难过',
                    name: 'EMOTION_UNHAPPY',
                },
                {
                    icon: 'emotion-unhappy-fill',
                    label: '难过-实心',
                    name: 'EMOTION_UNHAPPY_FILL',
                },
                {
                    icon: 'ios-face-recognition',
                    label: '人脸识别',
                    name: 'IOS_FACE_RECOGNITION',
                },
            ],
        },
        {
            title: '通用符号',
            list: [
                {
                    icon: 'circle',
                    label: '圆形',
                    name: 'CIRCLE',
                },
                {
                    icon: 'square',
                    label: '方形',
                    name: 'SQUARE',
                },
                {
                    icon: 'sun',
                    label: '太阳',
                    name: 'SUN',
                },
                {
                    icon: 'sun-fill',
                    label: '太阳-实心',
                    name: 'SUN_FILL',
                },
                {
                    icon: 'moon',
                    label: '月亮',
                    name: 'MOON',
                },
                {
                    icon: 'moon-fill',
                    label: '月亮-实心',
                    name: 'MOON_FILL',
                },
                {
                    icon: 'protect',
                    label: '保护',
                    name: 'PROTECT',
                },
                {
                    icon: 'protect-fill',
                    label: '保护-实心',
                    name: 'PROTECT_FILL',
                },
                {
                    icon: 'shield-add',
                    label: '盾牌加',
                    name: 'SHIELD_ADD',
                },
                {
                    icon: 'shield-add-fill',
                    label: '盾牌加-实心',
                    name: 'SHIELD_ADD_FILL',
                },
                {
                    icon: 'fingerprint',
                    label: '指纹',
                    name: 'FINGERPRINT',
                },
            ],
        },
    ]);

    // 复制icon值
    const copyIconValFn = async (value: string) => {
        await navigator.clipboard.writeText(value);
        notification.success({
            message: `“${value}”已复制到剪贴板！`,
        });
    };
</script>

<style lang="scss" scoped>
    @import 'https://at.alicdn.com/t/c/font_5253979_h3y43dquntv.css';
    .container {
        .group {
            margin-bottom: 32px;
            &:last-child {
                margin-bottom: 0;
            }
            &-title {
                display: flex;
                align-items: center;
                margin: 24px 0 16px;
                font-size: 20px;
                font-weight: 600;
                color: var(--vp-c-text-1);
                &:first-child {
                    margin-top: 0;
                }
                .group-count {
                    margin-left: 8px;
                    padding: 0 8px;
                    height: 20px;
                    line-height: 20px;
                    font-size: 12px;
                    font-weight: 400;
                    color: var(--vp-c-brand-1);
                    background: var(--vp-c-brand-soft);
                    border-radius: 10px;
                }
            }
            .grid {
                display: flex;
                flex-wrap: wrap;
            }
        }
        &-box {
            width: 16.5%;
            height: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--vp-c-divider);
            border-radius: 2px;
            padding: 10px;
            transition:
                border-color 0.25s ease,
                box-shadow 0.25s ease;
            &:hover {
                border-color: var(--vp-c-brand-1);
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            }
            .iconfont {
                font-size: 30px;
                color: var(--vp-c-text-2);
            }
            .name {
                margin-top: 20px;
                font-size: 12px;
                line-height: 14px;
            }
            .value {
                font-size: 12px;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: center;
            }
        }

        /* 平板端：每行 4 个 */
        @media (max-width: 960px) {
            .group-title {
                font-size: 18px;
            }

            .container-box {
                width: 24.5%;
            }
        }

        /* 移动端：每行 3 个，缩小尺寸并去除触屏 hover 残留 */
        @media (max-width: 768px) {
            .group-title {
                margin: 16px 0 12px;
                font-size: 16px;
            }

            .container-box {
                width: 33.33%;
                height: 100px;
                padding: 8px;

                &:hover {
                    border-color: var(--vp-c-divider);
                    box-shadow: none;
                }

                .iconfont {
                    font-size: 26px;
                }

                .name {
                    margin-top: 12px;
                }
            }
        }
    }
</style>
