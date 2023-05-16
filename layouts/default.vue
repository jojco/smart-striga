<template>
  <!-- page -->
  <main class="min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
    <div class="flex">
      <!-- aside -->
      <aside
        class="flex w-72 flex-col space-y-2 border-r border-gray-200 bg-white p-2"
        style="height: 90.5vh"
        x-show="asideOpen"
      >
        <div v-for="item in navigationItems">
          <NavigationItem :item="item" />
        </div>
      </aside>

      <!-- main content page -->
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
const { navigationItems } = useNavigationService();
</script>
