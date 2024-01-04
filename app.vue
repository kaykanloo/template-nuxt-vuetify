<script setup lang="ts">
import { ref } from 'vue'
const links = ref([
  {
    text: 'Vuetify Components',
    href: '/',
  },
  {
    text: 'Virtual Components',
    href: '/virtual',
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
      <v-layout>
        <AppBar :links="links" />
        <v-main>
          <v-container>
            <NuxtPage />
          </v-container>
        </v-main>
      </v-layout>
    </v-app>
  </NuxtLayout>
</template>
