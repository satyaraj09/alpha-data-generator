<template>
  <form @submit.prevent="startGenerating">
    <label for="deviceId">Device ID:</label>
    <input v-model="deviceId" type="text" id="deviceId" required />

    <label for="interval">Interval (seconds):</label>
    <input v-model.number="interval" type="number" id="interval" min="1" required />

    <button type="submit" :disabled="isGenerating">Start Generating</button>
    <button v-if="isGenerating" @click="stopGenerating">Stop</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useDeviceData } from "~/composables/useDeviceData"
const { startGenerating, intervalId, deviceId, interval, isGenerating } = useDeviceData()
console.log(intervalId);

startGenerating();
const sendDataToServer = async (data) => {
  try {
    await $fetch('/api/device-data', {
      method: 'POST',
      body: intervalId,
    });
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
</script>