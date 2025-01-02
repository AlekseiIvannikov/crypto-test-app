<template>
  <div class="overflow-x-auto h-96 border border-amber-50 border-opacity-50">
    <table class="table table-zebra table-pin-rows table-md">
      <Loader v-if="!data" />
      <thead>
        <tr>
          <th v-for="(col, i) in columns" :key="i">
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody class="h-96">
        <TableRow v-for="(currency, i) in data" :key="i" :row="currency" :columns="columns" />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts" generic="T">
import TableRow from '@/components/Table/TableRow.vue';
import Loader from '@/components/UI/Loader.vue';

interface Props {
  data: T[];
  columns: string[];
}

defineProps<Props>();
</script>

<style scoped></style>
