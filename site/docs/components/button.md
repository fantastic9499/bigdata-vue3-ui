<!--
 * @Author: TuXunJia
 * @Date: 2025-07-28 19:41:58
 * @LastEditors: TuXunJia
 * @LastEditTime: 2025-08-01 10:09:49
-->
# 按钮 Button

<script setup>
import { onMounted, ref } from 'vue';
import { Button, TableSettingsModal } from '@yf-bigdata/vue3-ui';
const tableSettingsModalRef = ref();

const columns = [
  {title: "门店编码", isShow: true},
  {title: "门店名称", isShow: true},
  {title: "药店商品", isShow: true}
];

const onColumnsChange = (cols) => {
  console.log('onColumnsChange:', JSON.stringify(cols));
}

onMounted(() => {
  // 动态加载外部 CSS 文件
  const link = document.createElement('link')
  link.href = '/css/button.css' // 注意：路径相对于 public 目录
  link.rel = 'stylesheet'
  document.head.appendChild(link)  
});
</script>

<style scoped>  
  .btn-box-scoped {
    display: flex;
  }

.table-box {
  width: 100%;
  overflow-x: auto;
}

.table-box table {
  width: 100%;
  table-layout: fixed;
}  
</style>

<div class="bd-box">
  <div class="btn-box-scoped">
    <yf-button @click="tableSettingsModalRef.showModal(columns)">表格设置</yf-button>
    <yf-button type="primary" style="margin-left: 10px;">默认按钮</yf-button>
    <Button style="margin-left: 10px;">非默认按钮</Button>
  </div>
  <TableSettingsModal ref="tableSettingsModalRef" @change="onColumnsChange"/>
</div>

:::details 显示代码

```vue
<script setup>
import { onMounted, ref } from 'vue';
import { Button, TableSettingsModal } from '@yf-bigdata/vue3-ui';
const tableSettingsModalRef = ref();

const columns = [
  {title: "门店编码", isShow: true},
  {title: "门店名称", isShow: true},
  {title: "药店商品", isShow: true}
];

const onColumnsChange = (cols) => {
  console.log('onColumnsChange:', JSON.stringify(cols));
}

onMounted(() => {
  // 动态加载外部 CSS 文件
  const link = document.createElement('link')
  link.href = '/css/button.css' // 注意：路径相对于 public 目录
  link.rel = 'stylesheet'
  document.head.appendChild(link)  
});
</script>

<style scoped>  
  .btn-box-scoped {
    display: flex;
  }

.table-box {
  width: 100%;
  overflow-x: auto;
}

.table-box table {
  width: 100%;
  table-layout: fixed;
}  
</style>

<div class="bd-box">
  <div class="btn-box-scoped">
    <yf-button @click="tableSettingsModalRef.showModal(columns)">表格设置</yf-button>
    <yf-button type="primary" style="margin-left: 10px;">默认按钮</yf-button>
    <Button type="primary" style="margin-left: 10px;">默认按钮</Button>
  </div>
  <TableSettingsModal ref="tableSettingsModalRef" @change="onColumnsChange"/>
</div>
```
:::

| 属性          |      说明      |  类型 |  默认值 | 版本|
| ------------- | :-----------: | ----  | ----  | ----  |
| type          | 设置按钮类型      |  primary \| link \| text \| default |