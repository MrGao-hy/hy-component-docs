<template>
  <div v-if="props.type==2">
    <div class="tn-color__wrap">
      <template v-for="(item, index) in colorList" :key="index">
        <div :class="['tn-bg-' + item.color]" class="tn-color__item">
          <div class="tn-color__item--main">
            <div class="tn-color__item--main__info">
              <div class="tn-color__item--main__info__title">{{ item.name }}({{ item.color }})</div>
              <div class="tn-color__item--main__info__color-value">{{ item.value.normal }}</div>
            </div>
          </div>
          <div class="tn-color__item--children">
            <div :class="['tn-bg-' + item.color + '--dark']" class="tn-color__item--children--item">
              <div class="tn-color__item--children--item__info">
                <div class="tn-color__item--children--item__info__title">dark</div>
                <div class="tn-color__item--children--item__info__color-value">{{ item.value.dark }}</div>
              </div>
            </div>
            <div :class="['tn-bg-' + item.color + '--disabled']" class="tn-color__item--children--item">
              <div class="tn-color__item--children--item__info">
                <div class="tn-color__item--children--item__info__title">disabled</div>
                <div class="tn-color__item--children--item__info__color-value">{{ item.value.disabled }}</div>
              </div>
            </div>
            <div :class="['tn-bg-' + item.color + '--light']" class="tn-color__item--children--item">
              <div class="tn-color__item--children--item__info">
                <div class="tn-color__item--children--item__info__title">light</div>
                <div class="tn-color__item--children--item__info__color-value">{{ item.value.light }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";

const props = defineProps({
  type: {
    type: Number,
    default: 2
  }
})
const colorList = ref([{
  name: '红色',
  color: 'red',
  value: {
    normal: '#E83A30',
    dark: '#BA2E26',
    disabled: '#F39C97',
    light: '#FAD8D6'
  }
},
  {
    name: '紫红色',
    color: 'purplered',
    value: {
      normal: '#E72F8C',
      dark: '#B9276F',
      disabled: '#F397C5',
      light: '#FAD5E8'
    }
  },
  {
    name: '紫色',
    color: 'purple',
    value: {
      normal: '#892FE8',
      dark: '#6E27BA',
      disabled: '#C497F3',
      light: '#E7D5FA'
    }
  },
  {
    name: '蓝紫色',
    color: 'bluepurple',
    value: {
      normal: '#5F4FD9',
      dark: '#4C3FAE',
      disabled: '#AFA7EC',
      light: '#DFDCF7'
    }
  },
  {
    name: '海蓝色',
    color: 'aquablue',
    value: {
      normal: '#3646FF',
      dark: '#2B38CC',
      disabled: '#9AA2FF',
      light: '#D7DAFF'
    }
  },
  {
    name: '蓝色',
    color: 'blue',
    value: {
      normal: '#3D7EFF',
      dark: '#3465CC',
      disabled: '#9EBEFF',
      light: '#D8E5FF'
    }
  },
  {
    name: '靛蓝色',
    color: 'indigo',
    value: {
      normal: '#31C9E8',
      dark: '#28A1BA',
      disabled: '#98E4F3',
      light: '#D6F4FA'
    }
  },
  {
    name: '青色',
    color: 'cyan',
    value: {
      normal: '#2DE88D',
      dark: '#24BA97',
      disabled: '#96F3DE',
      light: '#D5FAF2'
    }
  },
  {
    name: '青绿色',
    color: 'teal',
    value: {
      normal: '#24F083',
      dark: '#1DC069',
      disabled: '#91F7C1',
      light: '#D3FCE6'
    }
  },
  {
    name: '绿色',
    color: 'green',
    value: {
      normal: '#31E749',
      dark: '#28B93D',
      disabled: '#98F3A4',
      light: '#D6FADB'
    }
  },
  {
    name: '黄绿色',
    color: 'yellowgreen',
    value: {
      normal: '#A4E82F',
      dark: '#82BA27',
      disabled: '#D1F397',
      light: '#EDFAD5'
    }
  },
  {
    name: '酸橙色',
    color: 'lime',
    value: {
      normal: '#D5EB00',
      dark: '#AABC00',
      disabled: '#E9F57F',
      light: '#F7FBCC'
    }
  },
  {
    name: '黄色',
    color: 'yellow',
    value: {
      normal: '#FFF420',
      dark: '#CCC21A',
      disabled: '#FFF88F',
      light: '#FFFDD2'
    }
  },
  {
    name: '橘黄色',
    color: 'orangeyellow',
    value: {
      normal: '#FFCA28',
      dark: '#CCA220',
      disabled: '#FFE493',
      light: '#FFF4D4'
    }
  },
  {
    name: '橙色',
    color: 'orange',
    value: {
      normal: '#FFA726',
      dark: '#CC851E',
      disabled: '#FFD392',
      light: '#FFEDD4'
    }
  },
  {
    name: '橘红色',
    color: 'orangered',
    value: {
      normal: '#FF7043',
      dark: '#CC5A36',
      disabled: '#FFB7A1',
      light: '#FFE2D9'
    }
  },
  {
    name: '棕色',
    color: 'brown',
    value: {
      normal: '#914F2C',
      dark: '#743F23',
      disabled: '#C8A795',
      light: '#E9DCD5'
    }
  },
  {
    name: '玄灰色',
    color: 'grey',
    value: {
      normal: '#78909C',
      dark: '#5F7E8B',
      disabled: '#C6D1D8',
      light: '#E4E9EC'
    }
  },
  {
    name: '灰色',
    color: 'gray',
    value: {
      normal: '#AAAAAA',
      dark: '#838383',
      disabled: '#E6E6E6',
      light: '#F8F7F8'
    }
  }
]);
</script>

<style lang="scss" scoped>

.tn-color__wrap {
  display: flex;
  flex-wrap: wrap;

  .tn-color__item {
    position: relative;
    flex: 0 0 28.5%;
    height: 130px;
    min-width: 300px;
    padding: 5px 25px;
    border-radius: 5px;
    overflow: hidden;
    margin-left: 2%;
    margin-bottom: 35px;

    &--no-child {
      padding: 20px 25px !important;
      height: 80px !important;
    }

    &--main {
      &__info {
        color: #FFFFFFDD;

        &__title {
          font-size: 18px;
        }

        &__color-value {
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }

    &--children {
      display: flex;
      flex-direction: row;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;

      &--item {
        flex: 1;
        padding: 10px 0;

        &__info {
          color: #080808DD;
          margin-left: 10px;

          &__title {
            font-size: 14px;
          }

          &__color-value {
            font-size: 12px;
          }
        }

        &:first-of-type {
          .tn-color__item--children--item__info {
            color: #FFFFFFDD !important;
          }
        }
      }
    }

  }
}
</style>
