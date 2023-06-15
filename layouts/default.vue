<template>
  <div>
    <header>Head</header>
      <!-- page -->
    <main class="min-h-screen w-full bg-gray-100 text-gray-700">
      <div class="flex">
        <!-- aside -->
        <aside class="sticky top-0 flex w-72 flex-col space-y-2  bg-white p-2">
          <div v-for="item in navigationItems">
            <NavigationItem :item="item" />
          </div>
        </aside>

        <!-- main content page -->
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const { navigationItems } = useNavigationService();
</script>
