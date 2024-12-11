<script setup lang="ts">
import { ref } from 'vue';
import MyComponent from './components/MyComponent.vue'

/** Hooks
 * defineProps
 * -v-bind
 * -v-if
 * -v-else
 * -v-else-if
 * -v-for
 *
 * menos importante
 * -v-show
 * -v-text
 * -v-html
 * -v-once
 */

const model = defineModel();
const texts = ref(["My text", "hello world", model]);

const list = ref([
  {
    id: 1,
    text: model
  },
  {
    id: 2,
    text: "Hello world"
  }
])

const sum = ref(0)


</script>

<template>
  {{ sum }}

  <div v-for="value in list" v-bind:key="value.id">
    {{ value.text }}
  </div>

  <MyComponent
    v-model="texts[0]"
    @onSend="sum += $event"
  />

  <input v-model="model">

</template>

<style scoped>
</style>
