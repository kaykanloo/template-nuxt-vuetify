<script setup lang="ts">
import { ref } from 'vue'
const links = ref([
  {
    text: 'Dashboard',
    href: '/',
  },
  {
    text: 'Storybook',
    href: '/storybook',
  },
])
</script>

<template>
  <NuxtLayout>
    <v-app>
      <AppBar :links="links" />
      <v-main>
        <v-container>
          <NuxtPage />
        </v-container>
      </v-main>
    </v-app>
  </NuxtLayout>
</template>
