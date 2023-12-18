<script setup lang="ts">
defineProps({
  label: { type: String, required: true },
  modelValue: { type: String }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="container">
    <label :for="label">{{ label }}:</label>
    <input :id="label" :value="modelValue" @input="$emit('update:modelValue', $event.target?.value)" />
  </div>
</template>

<style scoped>
.container {
  border: 1px dashed;
  margin: 4px;
}
</style>


