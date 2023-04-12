<template>
  <section class="pb-20 relative block bg-blueGray-800">
    <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
      <div class="flex flex-wrap text-center justify-center">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold text-white">Build something</h2>
          <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
            Hello {{ hello }} Hello {{ daco }}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap mt-12 justify-center">
        <div class="w-full lg:w-3/12 px-4 text-center">
          <div
            class="text-lightBlue-300 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
          >
            <i class="fas fa-medal text-xl"></i>
          </div>
          <h6 class="text-xl mt-5 font-semibold text-white">CO2</h6>
          <p class="mt-2 mb-4 text-blueGray-400">
            {{ scd30?.co2Concentration }}
          </p>
        </div>
        <div class="w-full lg:w-3/12 px-4 text-center">
          <div
            class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
          >
            <i class="fas fa-poll text-xl"></i>
          </div>
          <h5 class="text-xl mt-5 font-semibold text-white">Temperature</h5>
          <p class="mt-2 mb-4 text-blueGray-400">
            {{ scd30?.temperature }}
          </p>
        </div>
        <div class="w-full lg:w-3/12 px-4 text-center">
          <div
            class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
          >
            <i class="fas fa-poll text-xl"></i>
          </div>
          <h5 class="text-xl mt-5 font-semibold text-white">humidity</h5>
          <p class="mt-2 mb-4 text-blueGray-400">
            {{ scd30?.relativeHumidity }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: scd30 } = await useAsyncData('scd30', () => $fetch('/api/scd30'));
const { data: hello } = await useFetch('/api/hello');
const { data: daco } = await useFetch('/api/w1');
</script>
