<script setup lang="ts">
import { ref } from 'vue';


defineProps([ 'onSend' ])
const count = ref(0)
const model = defineModel();

</script>

<!-- <marquee></marquee> - faz andar -->

<template>
  <input v-model="model">
  <button @click="$emit(onSend, ++count)">Send Data!</button>
</template>

<style scoped>
</style>
