<script setup lang="ts">
import { ref } from 'vue'
const name = ref('World')
const msg = computed(() => `Hello ${capitalizeStr(name.value)}!`)
</script>

<template>
  <TextBox label="Your Name" v-model="name" />
  <MessageBox :message="msg"></MessageBox>
</template>

<style scoped></style>
