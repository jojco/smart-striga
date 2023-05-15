<template>
  <!-- page -->
  <main class="min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
    <!-- header page -->
    <header
      class="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2"
    >
      <!-- logo -->
      <div class="flex items-center space-x-2">
        <button type="button" class="text-3xl">
          <i class="bx bx-menu"></i>
        </button>
        <div>Logo</div>
      </div>
    </header>

    <div class="flex">
      <!-- aside -->
      <aside
        class="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
        style="height: 90.5vh"
        x-show="asideOpen"
      >
        <a
          href="#"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-home"></i></span>
          <span>Dashboard</span>
        </a>

        <a
          href="#"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-cart"></i></span>
          <span>Cart</span>
        </a>

        <a
          href="#"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-shopping-bag"></i></span>
          <span>Shopping</span>
        </a>

        <a
          href="#"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-heart"></i></span>
          <span>My Favourite</span>
        </a>

        <a
          href="#"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-user"></i></span>
          <span>Profile</span>
        </a>
      </aside>

      <!-- main content page -->
      <slot />
    </div>
  </main>
</template>
