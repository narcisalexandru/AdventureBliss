<template>
  <header>
    <NavbarDesktop />
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarDesktop from '@/components/NavbarDesktop.vue'

</script>
