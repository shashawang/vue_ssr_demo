<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>hi, 皮卡皮卡丘</h1>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
