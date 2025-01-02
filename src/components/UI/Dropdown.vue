<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn m-1">
      <slot />
    </div>
    <ul tabindex="0" class="z-20 dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
      <li v-for="(item, i) in options" :key="i" class="text-lg p-4 cursor-pointer" @click="callback(item)">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  options: string[];
  callback: (val: string) => void;
}>();
</script>

<style scoped></style>
