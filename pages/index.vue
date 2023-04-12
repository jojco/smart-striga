<template>
  <div class="container">
    <div class="flex flex-column align-items-center mt-1">
      <h2>Hello {{ hello }}</h2>
      <h2>Hello {{ daco }}</h2>
      <h2>co2Concentration: {{ scd30?.co2Concentration }}</h2>
      <h2>temperature: {{ scd30?.temperature }}</h2>
      <h2>relativeHumidity: {{ scd30?.relativeHumidity }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: scd30 } = await useAsyncData('scd30', () => $fetch('/api/scd30'));
const { data: hello } = await useFetch('/api/hello');
const { data: daco } = await useFetch('/api/w1');
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
