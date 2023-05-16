<template>
  <div class="container flex flex-col mx-auto">
    <div v-for="sensor in w1?.sensors" class="flex w-full gap-4">
      <WidgetTemperature
        :name="sensor.sensor"
        :temperature="sensor.temperature"
      />
    </div>

    <div class="flex flex-wrap mt-12 justify-center gap-4">
      <div class="px-4 text-center">
        <h6 class="text-xl mt-5 font-semibold text-gray-500">CO2</h6>
        <p class="mt-2 mb-4 text-blueGray-400">
          {{ scd30?.co2Concentration }}
        </p>
      </div>
      <div class="px-4 text-center">
        <h5 class="text-xl mt-5 font-semibold text-gray-500">Temperature</h5>
        <p class="mt-2 mb-4 text-blueGray-400">
          {{ scd30?.temperature }}
        </p>
      </div>
      <div class="px-4 text-center">
        <h5 class="text-xl mt-5 font-semibold text-gray-500">
          Relative Humidity
        </h5>
        <p class="mt-2 mb-4 text-blueGray-400">
          {{ scd30?.relativeHumidity }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: w1, refresh: refreshW1 } = await useFetch('/api/wire1');
const { data: scd30, refresh: refreshSCD30 } = await useFetch('/api/scd30');
const { data: hello } = useFetch('/api/hello');

setInterval(function () {
  refreshW1();
}, 3000);

setInterval(function () {
  refreshSCD30();
}, 5000);

onMounted(() => {});
</script>
