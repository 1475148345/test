<!--
 * @Author: your name
 * @Date: 2021-04-19 09:47:42
 * @LastEditTime: 2021-04-19 10:05:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\src\views\home.vue
-->
<template>
  <div>
    <p>vuex</p>
    <p>count:{{count}}</p>
    <button @click="add">add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent ,computed} from 'vue'
import {useStore} from 'vuex'
export default defineComponent({
  name: 'vuex',
  setup(){
    const store = useStore()
    const count = computed(() => store.state.count)
    
    const add = () => {
      store.dispatch('increment')
    }

    return {
      count,
      add
    }
  }
})
</script>
