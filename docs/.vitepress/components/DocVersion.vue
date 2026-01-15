<template>
  <div class="tag">{{version}}</div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const getLatestVer = async pkg =>
    fetch(`https://registry.npmjs.org/${pkg}/latest`)
        .then(r => r.json())
        .then(d => d.version);
const version = ref("");

getLatestVer('hy-app').then(res => {
  version.value = res;
});
</script>

<style lang="scss" scoped>
.tag {
  margin-left: 8px;
  padding: 0 4px;
  height: 20px;
  line-height: 20px;
  border-radius: 4px;
  border: 1px solid rgb(64, 158, 255);
  font-size: 12px;
  color: rgb(64, 158, 255);
}
</style>