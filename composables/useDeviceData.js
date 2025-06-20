import { ref } from 'vue';

export const useDeviceData = () => {
  const deviceId = ref('');
  const interval = ref(5); // Interval in seconds
  const isGenerating = ref(false);
  let intervalId;
  let currentTimestamp = new Date('2025-01-01T00:00:00+05:30'); // Start date in IST

  const startGenerating = () => {
    if (!deviceId.value || interval.value <= 0) return;

    isGenerating.value = true;

    intervalId = setInterval(() => {
      if (currentTimestamp > new Date('2025-02-15T23:59:59+05:30')) {
        stopGenerating();
        return;
      }

      const data = generateRandomData(deviceId.value, currentTimestamp);
      sendDataToServer(data);

      // Increment the timestamp by 1 hour
      currentTimestamp = new Date(currentTimestamp.getTime() + 60 * 60 * 1000);
    }, interval.value * 1000);
  };

  const stopGenerating = () => {
    clearInterval(intervalId);
    isGenerating.value = false;
  };

  const generateRandomData = (deviceId, timestamp) => {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomFloat = (min, max, decimals = 2) =>
      parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

    return {
      deviceUid: Math.random().toString(16).substring(2, 14),
      deviceId: deviceId,
      fV: 'v2.7.6_beta_produrl1_s',
      pV: 1.0,
      configT: getRandomInt(100, 500),
      configL: getRandomInt(50, 200),
      timestamp: Math.floor(timestamp.getTime() / 1000), // Convert to Unix timestamp in seconds
      ldTimestamp: Math.floor(new Date(timestamp.getTime() - 10).getTime() / 1000),
      CI: getRandomInt(1, 10),
      TC: getRandomInt(1, 10),
      count: getRandomInt(0, 10),
      kvStatus: 1025,
      batteryVoltage: getRandomFloat(3.6, 4.2),
      batteryPercentage: getRandomInt(50, 100),
      battery_percentage_FG: getRandomInt(40, 100),
      eventTimestamp: Math.floor(new Date(timestamp.getTime() - 5).getTime() / 1000),
      Checkpoint: `Checkpoint_${getRandomInt(1, 10)}`,
      ResetReason: 'Low Battery',
      wifiMacs: JSON.stringify(Array.from({ length: 28 }, () => getRandomInt(0, 255))),
      wifiMacsCount: 5,
      wifiMacsBytes: 35,
      wifiSSIDs: JSON.stringify(['Vega calib', 'VEGA', 'vegacal', 'TcY', '']),
      wakeupDur: JSON.stringify(Array.from({ length: 1 }, () => getRandomInt(180, 9600))),
      tI: JSON.stringify(Array.from({ length: 1 }, () => getRandomInt(2000, 3100))),
      hI: JSON.stringify(Array.from({ length: 1 }, () => getRandomInt(6200, 6400))),
      json_prefix: 'false',
      tP1: JSON.stringify(Array.from({ length: 1 }, () => getRandomInt(2300, 3300)))
    };
  };

  const sendDataToServer = async (data) => {
    try {
      await $fetch('/api/device-data', {
        method: 'POST',
        body: data
      });
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return {
    deviceId,
    interval,
    isGenerating,
    startGenerating,
    stopGenerating
  };
};
