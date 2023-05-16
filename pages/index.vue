<template>
  <section class="pb-20 relative block bg-blueGray-800">
    <div class="container flex flex-wrap mx-auto px-4 lg:pt-24 lg:pb-64">
      <WidgetTemperature />
      <div class="flex flex-wrap text-center justify-center">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold text-gray-500">Build something</h2>
          <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
            Hello {{ hello?.meno }}
          </p>
          <!-- <p>W1 {{ pending }}</p> -->

          <div class="p-4 rounded-2xl bg-slate-200 border-slate-400 border">
            w1 {{ w1?.sensors }}
            <button
              class="bg-slate-600 py-2.5 px-5 rounded-xl text-slate-50 transition-all duration-300 hover:bg-slate-500 ring-0 ring-slate-400 focus:ring-4"
              @click="refresh()"
            >
              Refresh
            </button>
          </div>
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
            Relativedasdasdasdsaasdasdasdasdasd
          </h5>
          <p class="mt-2 mb-4 text-blueGray-400">
            {{ scd30?.temperature }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: w1, refresh } = await useFetch('/api/wire1');
// const { data: w1, refresh } = await useLazyFetch('/api/wire1');

const { data: scd30 } = await useLazyFetch('/api/scd30');
const { data: hello } = useFetch('/api/hello');
</script>
