<template>
  <span
    class="badge text-white"
    :class="{
      badge: true,
      'badge-primary': type === 'Primary',
      'badge-secondary': type === 'Secondary',
    }"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
defineProps({
  type: { type: String, default: 'Primary' },
});
</script>

<style scoped></style>
