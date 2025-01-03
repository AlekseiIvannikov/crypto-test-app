<template>
  <div class="stat place-items-center text-center">
    <div class="stat-title text-xs sm:text-sm md:text-base">{{ title }}</div>
    <div class="stat-value text-sm sm:text-base md:text-lg font-bold">{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  value: string | number;
}>();
</script>

<style scoped></style>
