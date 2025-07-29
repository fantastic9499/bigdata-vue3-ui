<!--
 * @Author: TuXunJia
 * @Date: 2025-07-25 16:14:06
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-07-29 17:44:32
-->
<template>
  <button class="yf-button" :class="buttonStyle">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import "./style/index.less";

export interface IButtonProps {
  type?: "primary" | "success" | "warning" | "danger" | "info" | "text";
}
const props = defineProps<IButtonProps>();

defineOptions({
  name: "YfButton",
});

const buttonStyle = computed(() => {
  return { [`yf-button--${props.type}`]: props.type };
});
</script>

<!-- <style scoped lang="less">
@import "./style/index.less";
</style> -->
