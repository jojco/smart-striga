<template>
  <div class="flex bg-slate-200 rounded-2xl flex-col p-4">
    <span class="text-xl">{{ name }}</span>
    <span>{{ temperature }}</span>
    <span class="flex bottom-4 h-4 w-full bg-slate-500 rounded-sm"></span>
    <span
      class="flex bottom-4 h-4 bg-rose-500 rounded-sm"
      :style="{ width: `${temperature}%` }"
    ></span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  temperature: number;
}>();
</script>

<style scoped></style>
