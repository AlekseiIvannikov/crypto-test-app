<template>
  <tr class="cursor-pointer">
    <td v-for="(item, i) in orderedRow" :key="i">
      <div class="flex items-center gap-3">
        <div v-if="item?.type === 'image'" class="avatar">
          <div class="mask mask-squircle h-12 w-12">
            <img :src="`data:image/svg+xml;base64,${item?.value}`" alt="image" />
          </div>
        </div>

        <div v-else-if="item?.type === 'component'">
          <component :is="item.component" :type="item.value">
            {{ item.value }}
          </component>
        </div>

        <span v-else class="caret-blue-50">{{ item }}</span>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts" generic="T">
import { computed, inject } from 'vue';

const props = defineProps<{
  row: T;
  columns: string[];
}>();

const columnsMapper = inject('columnsMapper');

const orderedRow = computed(() => {
  //@ts-expect-error make ts happy later
  const row = props.columns.map((col) => props.row[columnsMapper[col]]);
  return Object.values(row);
});
</script>

<style scoped></style>
