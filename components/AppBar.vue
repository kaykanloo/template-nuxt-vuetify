<script setup lang="ts">
import type { PropType } from 'vue';
type Link = {
  text: string;
  href: string;
};
defineProps({
  links: { type: Array as PropType<Link[]>, required: true },
})

import { useTheme } from 'vuetify'
const theme = useTheme()
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-icon icon="mdi-alpha-t-box-outline" size="36" />

      <v-btn v-for="link in links" :key="link.text" :text="link.text" :href="link.href" variant="text"></v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="320">
        <v-text-field density="compact" flat hide-details label="Search" rounded="lg" single-line
          variant="solo-filled"></v-text-field>
      </v-responsive>
      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
    </v-container>
  </v-app-bar>
</template>

<style scoped></style>


