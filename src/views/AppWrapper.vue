<template>
  <div class="flex flex-col gap-10">
    <NavBar />

    <div class="p-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<style></style>
