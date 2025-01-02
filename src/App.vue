<template>
  <router-view v-show="loaded" />
  <transition name="fade">
    <span v-if="!loaded" class="loading loading-ring loading-lg"> </span>
  </transition>
  <span v-if="!loaded" class="loading loading-ring loading-lg"> </span>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { autoDetectTheme } from '@/assets/scripts';

const loaded = ref(false);

onMounted(() => {
  autoDetectTheme();

  window.addEventListener('load', () => {
    loaded.value = true;
  });
});
</script>
