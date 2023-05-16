<template>
  <NuxtLink
    :to="item.to"
    class="block items-center text-lg space-x-2 rounded-md px-5 py-2.5 hover:bg-gray-100 hover:text-blue-600"
  >
    <i :class="item.icon" />
    <span>{{ item.label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  item: NavigationItem;
}>();
</script>
