<template>
  <section class="pb-20 relative block bg-blueGray-800">
    <div class="container flex flex-wrap mx-auto px-4 lg:pt-24 lg:pb-64">
      <div class="flex flex-wrap text-center justify-center">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold text-gray-500">Build something</h2>
          <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
            Hello {{ hello }}
          </p>
          <!-- <p>W1 {{ pending }}</p> -->
          <p>W1 {{ temperatures }}</p>

          <!-- <button class="bg-emerald-600 p-2" @click="refresh()">Refresh</button> -->
        </div>
      </div>

      <div class="flex flex-wrap mt-12 justify-center gap-4">
        <div class="px-4 text-center">
          <div
            class="p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center"
          >
            <i class="ri-arrow-up-line"></i>
          </div>
          <h6 class="text-xl mt-5 font-semibold text-gray-500">CO2</h6>
          <p class="mt-2 mb-4 text-blueGray-400">
            {{ scd30?.co2Concentration }}
          </p>
        </div>
        <div class="px-4 text-center">
          <div
            class="p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center"
          >
            <i class="ri-arrow-up-line"></i>
          </div>
          <h5 class="text-xl mt-5 font-semibold text-gray-500">Temperature</h5>
          <p class="mt-2 mb-4 text-blueGray-400">
            {{ scd30?.temperature }}
          </p>
        </div>
        <div class="px-4 text-center">
          <div
            class="p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center"
          >
            <i class="ri-arrow-up-line"></i>
          </div>
          <h5 class="text-xl mt-5 font-semibold text-gray-500">
            Relative Humidity
          </h5>
          <p class="mt-2 mb-4 text-blueGray-400">
            {{ scd30?.relativeHumidity }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// const { data: scd30 } = await useAsyncData('scd30', () =>
//   useLazyFetch('/api/scd30')
// );
// const { data: w1 } = await useAsyncData(() => useFetch('/api/w1'));
const { data: temperatures } = await useLazyFetch('/api/wire1');
const { data: scd30 } = await useLazyFetch('/api/scd30');

const { data: hello } = useFetch('/api/hello');
</script>
