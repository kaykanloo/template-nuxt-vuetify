<script setup lang="ts"></script>

<template>
  <Sheet :tooltip="'v-btn'">
    <v-btn>
      Button
    </v-btn>
  </Sheet>

  <Sheet :tooltip="'v-checkbox'">
    <v-checkbox label="Checkbox"></v-checkbox>
  </Sheet>

  <Sheet :tooltip="'v-radio-group'">
    <v-radio-group>
      <v-radio label="Radio One" value="one"></v-radio>
      <v-radio label="Radio Two" value="two"></v-radio>
      <v-radio label="Radio Three" value="three"></v-radio>
    </v-radio-group>
  </Sheet>

  <Sheet :tooltip="'v-chip-group'">
    <v-chip-group>
      <v-chip>Chip 1</v-chip>

      <v-chip>Chip 2</v-chip>

      <v-chip>Chip 3</v-chip>
    </v-chip-group>
  </Sheet>

  <Sheet :tooltip="'v-text-field'">
    <v-text-field label="Label"></v-text-field>
  </Sheet>

  <Sheet :tooltip="'v-select'">
    <v-select label="Select" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-select>
  </Sheet>

  <Sheet :tooltip="'v-date-picker'">
    <v-date-picker></v-date-picker>
  </Sheet>
</template>

<style scoped></style>
