<!--
 * @Author: TuXunJia
 * @Date: 2025-07-30 17:23:46
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-08-02 20:59:49
 * @Description: 表格字段设置Modal，基于ant-design-vue封装
-->
<template>
  <a-modal v-bind="modalProps">
    <VueDraggable v-model="columns" :animation="150" ghostClass="ghost" class="column_container">
      <div v-for="(item, index) in columns" :key="item.title" class="customColumnMain">
        <div class="column">
          <div class="index">{{ index + 1 }}</div>
          <span class="name">{{ item.title }}</span>
          <a-switch v-model:checked="item.isShow" class="switch" size="small" />
          <MenuOutlined class="icon" />
        </div>
      </div>
    </VueDraggable>
  </a-modal>
</template>

<script setup lang="ts">
import { MenuOutlined } from '@ant-design/icons-vue';
import { Modal, ModalProps, Switch } from 'ant-design-vue';
// import { ModalProps } from 'ant-design-vue';
// import Modal from 'ant-design-vue/es/modal';
// import Switch from 'ant-design-vue/es/switch';

import 'ant-design-vue/es/modal/style/index.d.ts';
import 'ant-design-vue/es/switch/style/index.d.ts';
import { cloneDeep } from 'lodash-es';
import { computed, ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import './style/index.less';

export interface ITableSettingsModalProps {}

defineOptions({
  name: 'TableSettingsModal',
  components: { 'a-modal': Modal, 'a-switch': Switch },
});

const props = defineProps<ITableSettingsModalProps>();
const emit = defineEmits(['change']);

const visible = ref(false);
const showModal = (
  cols: Array<{
    title: string;
    isShow: boolean;
  }>
) => {
  columns.value = cloneDeep(cols);
  visible.value = true;
};

const columns = ref<
  Array<{
    title: string;
    isShow: boolean;
  }>
>([]);

const modalProps = computed<ModalProps>(() => {
  return {
    title: '表格字段设置',
    visible: visible.value,
    width: '520px',
    bodyStyle: { minHeight: '450px' },
    onCancel: () => (visible.value = false),
    onOk: () => {
      emit('change', cloneDeep(columns.value));
      visible.value = false;
    },
  };
});

defineExpose({
  showModal,
});
</script>
