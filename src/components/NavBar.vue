<template>
  <div class="navbar">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Crypto APP</a>
    </div>
    <div class="flex-none">
      <Dropdown :options="THEMES" :callback="setUserTheme">
        <ThemesIcon />
      </Dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import ThemesIcon from '@/assets/icons/ThemesIcon.vue';
import { setUserTheme } from '@/assets/scripts';
import Dropdown from '@/components/UI/Dropdown.vue';
import { THEMES } from '@/consts/themes';
</script>

<style scoped></style>
