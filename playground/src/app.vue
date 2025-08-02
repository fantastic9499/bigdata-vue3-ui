<!--
 * @Author: TuXunJia
 * @Date: 2025-07-25 15:09:12
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-08-01 08:57:15
-->
<template>
  <a-space>
    <Button @click="showModal">幻影</Button>
    <Button type="primary">幻影</Button>
    <yf-button type="primary">幻影</yf-button>
    <a-button type="primary">ant design</a-button>
    <a-switch>ant design</a-switch>
  </a-space>
  <TableSettingsModal ref="tableSettingsModalRef" @change="onColumnChange" />
</template>

<script setup lang="ts">
import { Button, TableSettingsModal } from "@yf-bigdata/vue3-ui";
import { ref } from 'vue';
// import { Button } from "@yf-bigdata/vue3-ui";

const tableSettingsModalRef = ref<InstanceType<typeof TableSettingsModal>>();
const showModal = () => {
  tableSettingsModalRef.value?.showModal([
    { title: "门店名称", isShow: true },
    { title: "门店编码", isShow: true },
    { title: "药店商品", isShow: true }
  ]);
}

const onColumnChange = (cols) => {
  console.log('onColumnChange:', JSON.stringify(cols));
}
</script>

<style scoped lang="less"></style>
