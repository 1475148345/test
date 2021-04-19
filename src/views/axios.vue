<!--
 * @Author: your name
 * @Date: 2021-04-19 09:47:42
 * @LastEditTime: 2021-04-19 10:13:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\src\views\home.vue
-->
<template>
  axios
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../utils/axios'
export default defineComponent({
  name: 'axios',
  setup() {
    axios
      .get('/users/XPoet')
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }
})
</script>
