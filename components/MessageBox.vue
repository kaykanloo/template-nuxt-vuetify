<script setup lang="ts">
defineProps({
  message: { type: String, required: true },
})
</script>

<template>
  <div class="container">
    <p class="content">{{ message }}</p>
  </div>
</template>

<style scoped>
.container {
  border: 1px dashed;
  margin: 4px;
}

.content {
  text-align: center;
}
</style>


