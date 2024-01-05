<script setup lang="ts">
defineProps({
  tooltip: { type: String, required: true },
})
</script>

<template>
  <v-sheet border class="mt-2 mb-2">
    <v-tooltip :key="tooltip" activator="parent">{{ tooltip }}</v-tooltip>
    <slot></slot>
  </v-sheet>
</template>

<style scoped></style>


