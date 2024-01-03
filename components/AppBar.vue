<script setup lang="ts">
import type { PropType } from 'vue';
type Link = {
  text: string;
  href: string;
};
defineProps({
  links: { type: Array as PropType<Link[]>, required: true },
})
</script>

<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-avatar class="me-4 " color="grey-darken-1" size="32"></v-avatar>

      <v-btn v-for="link in links" :key="link.text" :text="link.text" :href="link.href" variant="text"></v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="320">
        <v-text-field density="compact" flat hide-details label="Search" rounded="lg" single-line
          variant="solo-filled"></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<style scoped></style>


