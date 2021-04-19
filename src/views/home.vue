<!--
 * @Author: your name
 * @Date: 2021-04-19 09:47:42
 * @LastEditTime: 2021-04-19 13:46:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\src\views\home.vue
-->
<template>
  <div>
    <p>home</p>
    <el-button>btn</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {ElButton} from 'element-plus'
export default defineComponent({
  name: 'home',
  components:{ElButton}
})
</script>
