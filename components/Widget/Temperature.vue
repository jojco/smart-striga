<template>
  <div class="bg-slate-200 rounded-2xl w-96 h-32 flex flex-col p-4">
    <span>Name: {{ name }}</span>
    <span>Name: {{ temperature }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name?: string;
  temperature?: number;
}>();
</script>

<style scoped></style>
