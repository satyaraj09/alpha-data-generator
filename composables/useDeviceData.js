// // // import { ref } from "vue";

// // // export const useDeviceData = () => {
// // //   const deviceId = ref("");
// // //   const interval = ref(5); // Interval in seconds
// // //   const isGenerating = ref(false);
// // //   let intervalId;
// // //   let currentTimestamp = new Date("2025-07-10T15:50:00+05:30");

// // //   const startGenerating = () => {
// // //     if (!deviceId.value || interval.value <= 0) return;

// // //     isGenerating.value = true;

// // //     intervalId = setInterval(() => {
// // //       if (currentTimestamp > new Date("2025-06-30T23:59:59+05:30")) {
// // //         stopGenerating();
// // //         return;
// // //       }

// // //       const data = generateRandomData(deviceId.value, currentTimestamp);
// // //       sendDataToServer(data);

// // //       // Increment the timestamp by 1 hour
// // //       currentTimestamp = new Date(
// // //         currentTimestamp.getTime() + 60 * 1000
// // //       );
// // //     }, interval.value * 1000);
// // //   };

// // //   const stopGenerating = () => {
// // //     clearInterval(intervalId);
// // //     isGenerating.value = false;
// // //   };

// // //   const generateRandomData = (deviceId, timestamp) => {
// // //     const getRandomInt = (min, max) =>
// // //       Math.floor(Math.random() * (max - min + 1)) + min;
// // //     const getRandomFloat = (min, max, decimals = 2) =>
// // //       parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

// // //     return {
// // //       deviceUid: Math.random().toString(16).substring(2, 14),
// // //       deviceId: deviceId,
// // //       fV: "v2.7.6_beta_produrl1_s",
// // //       pV: 1.0,
// // //       configT: getRandomInt(100, 500),
// // //       configL: getRandomInt(50, 200),
// // //       timestamp: Math.floor(timestamp.getTime() / 1000), // Convert to Unix timestamp in seconds
// // //       ldTimestamp: Math.floor(
// // //         new Date(timestamp.getTime() - 10).getTime() / 1000
// // //       ),
// // //       CI: getRandomInt(1, 10),
// // //       TC: getRandomInt(1, 10),
// // //       count: getRandomInt(0, 10),
// // //       kvStatus: 1025,
// // //       batteryVoltage: getRandomFloat(3.6, 4.2),
// // //       batteryPercentage: getRandomInt(50, 100),
// // //       battery_percentage_FG: getRandomInt(40, 100),
// // //       eventTimestamp: Math.floor(
// // //         new Date(timestamp.getTime() - 5).getTime() / 1000
// // //       ),
// // //       Checkpoint: `Checkpoint_${getRandomInt(1, 10)}`,
// // //       ResetReason: "Low Battery",
// // //       wifiMacs: JSON.stringify(
// // //         Array.from({ length: 28 }, () => getRandomInt(0, 255))
// // //       ),
// // //       wifiMacsCount: 5,
// // //       wifiMacsBytes: 35,
// // //       wifiSSIDs: JSON.stringify(["Vega calib", "VEGA", "vegacal", "TcY", ""]),
// // //       wakeupDur: JSON.stringify(
// // //         Array.from({ length: 1 }, () => getRandomInt(180, 9600))
// // //       ),
// // //       tI: JSON.stringify(
// // //         Array.from({ length: 1 }, () => getRandomInt(2000, 3100))
// // //       ),
// // //       hI: JSON.stringify(
// // //         Array.from({ length: 1 }, () => getRandomInt(6200, 6400))
// // //       ),
// // //       json_prefix: "false",
// // //       tP1: JSON.stringify(
// // //         Array.from({ length: 1 }, () => getRandomInt(2300, 3300))
// // //       ),
// // //     };
// // //   };

// // //   const sendDataToServer = async (data) => {
// // //     try {
// // //       await $fetch("/api/device-data", {
// // //         method: "POST",
// // //         body: data,
// // //       });
// // //     } catch (error) {
// // //       console.error("Error sending data:", error);
// // //     }
// // //   };

// // //   return {
// // //     deviceId,
// // //     interval,
// // //     isGenerating,
// // //     startGenerating,
// // //     stopGenerating,
// // //   };
// // // };

// // import { ref } from "vue";

// // export const useDeviceData = () => {
// //   const deviceId = ref("");
// //   const interval = ref(5); // seconds
// //   const isGenerating = ref(false);
// //   let intervalId = null;
// //   let currentTimestamp = new Date();

// //   const startGenerating = () => {
// //     if (!deviceId.value || interval.value <= 0) return;

// //     isGenerating.value = true;

// //     intervalId = setInterval(() => {
// //       const data = generateRandomData(deviceId.value, currentTimestamp);
// //       sendDataToServer(data);

// //       // increment timestamp by 1 minute
// //       currentTimestamp = new Date(currentTimestamp.getTime() + 10000);
// //     }, interval.value * 1000);
// //   };

// //   const stopGenerating = () => {
// //     clearInterval(intervalId);
// //     isGenerating.value = false;
// //   };

// //   const generateRandomData = (deviceId, timestamp) => {
// //     const getRandomInt = (min, max) =>
// //       Math.floor(Math.random() * (max - min + 1)) + min;
// //     const getRandomFloat = (min, max, decimals = 2) =>
// //       parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

// //     return {
// //       deviceUid: Math.random().toString(16).substring(2, 14),
// //       deviceId,
// //       fV: "v2.7.6_beta_produrl1_s",
// //       pV: 1.0,
// //       configT: getRandomInt(100, 500),
// //       configL: getRandomInt(50, 200),
// //       timestamp: Math.floor(timestamp.getTime() / 1000),
// //       ldTimestamp: Math.floor((timestamp.getTime() - 10 * 1000) / 1000),
// //       CI: getRandomInt(1, 10),
// //       TC: getRandomInt(1, 10),
// //       count: getRandomInt(0, 10),
// //       kvStatus: 1025,
// //       batteryVoltage: getRandomFloat(3.6, 4.2),
// //       batteryPercentage: getRandomInt(50, 100),
// //       battery_percentage_FG: getRandomInt(40, 100),
// //       eventTimestamp: Math.floor((timestamp.getTime() - 5 * 1000) / 1000),
// //       Checkpoint: `Checkpoint_${getRandomInt(1, 10)}`,
// //       ResetReason: "Low Battery",
// //       wifiMacs: JSON.stringify(
// //         Array.from({ length: 28 }, () => getRandomInt(0, 255))
// //       ),
// //       wifiMacsCount: 5,
// //       wifiMacsBytes: 35,
// //       wifiSSIDs: JSON.stringify(["Vega calib", "VEGA", "vegacal", "TcY", ""]),
// //       wakeupDur: JSON.stringify([getRandomInt(180, 9600)]),
// //       // tI: JSON.stringify([getRandomInt(2200, 2800)]),
// //       tI: JSON.stringify([getRandomInt(1500, 2300)]),
// //       hI: JSON.stringify([getRandomInt(4400, 5600)]),
// //       json_prefix: "false",
// //       tP1: JSON.stringify([getRandomInt(1500, 2300)]),
// //     };
// //   };

// //   const sendDataToServer = async (data) => {
// //     try {
// //       await $fetch("/api/device-data", {
// //         method: "POST",
// //         body: data,
// //       });
// //       console.log("✅ Data sent:", data.deviceId, data.timestamp);
// //     } catch (error) {
// //       console.error("❌ Error sending data:", error);
// //     }
// //   };

// //   return {
// //     deviceId,
// //     interval,
// //     isGenerating,
// //     startGenerating,
// //     stopGenerating,
// //   };
// // };

// // import { ref, reactive } from "vue";

// // export const useDeviceData = () => {
// //   const deviceId = ref("");
// //   const interval = ref(5);
// //   const isGenerating = ref(false);
// //   let intervalId = null;
// //   let currentTimestamp = new Date();

// //   // Only 3 editable sensors
// //   const sensorConfig = reactive({
// //     tI: { enabled: true, min: 1500, max: 2300, label: "Temperature" },
// //     hI: { enabled: true, min: 4400, max: 5600, label: "Humidity" },
// //     tP1: { enabled: true, min: 1500, max: 2300, label: "Temperature 1" },
// //   });

// //   const startGenerating = () => {
// //     if (!deviceId.value || interval.value <= 0) return;

// //     isGenerating.value = true;

// //     intervalId = setInterval(() => {
// //       const data = generateRandomData(deviceId.value, currentTimestamp);
// //       sendDataToServer(data);
// //       currentTimestamp = new Date(currentTimestamp.getTime() + 10000);
// //     }, interval.value * 1000);
// //   };

// //   const stopGenerating = () => {
// //     clearInterval(intervalId);
// //     isGenerating.value = false;
// //   };

// //   const generateRandomData = (deviceId, timestamp) => {
// //     const getRandomInt = (min, max) =>
// //       Math.floor(Math.random() * (max - min + 1)) + min;
// //     const getRandomFloat = (min, max, decimals = 2) =>
// //       parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

// //     const getSensorValue = (sensorName) => {
// //       const config = sensorConfig[sensorName];
// //       if (!config.enabled) return null;
// //       return getRandomInt(config.min, config.max);
// //     };

// //     return {
// //       deviceUid: Math.random().toString(16).substring(2, 14),
// //       deviceId,
// //       fV: "v2.7.6_beta_produrl1_s",
// //       pV: 1.0,
// //       configT: getRandomInt(100, 500),
// //       configL: getRandomInt(50, 200),
// //       timestamp: Math.floor(timestamp.getTime() / 1000),
// //       ldTimestamp: Math.floor((timestamp.getTime() - 10 * 1000) / 1000),
// //       CI: getRandomInt(1, 10),
// //       TC: getRandomInt(1, 10),
// //       count: getRandomInt(0, 10),
// //       kvStatus: 1025,
// //       batteryVoltage: getRandomFloat(3.6, 4.2),
// //       batteryPercentage: getRandomInt(50, 100),
// //       battery_percentage_FG: getRandomInt(40, 100),
// //       eventTimestamp: Math.floor((timestamp.getTime() - 5 * 1000) / 1000),
// //       Checkpoint: `Checkpoint_${getRandomInt(1, 10)}`,
// //       ResetReason: "Low Battery",
// //       wifiMacs: JSON.stringify(
// //         Array.from({ length: 28 }, () => getRandomInt(0, 255))
// //       ),
// //       wifiMacsCount: 5,
// //       wifiMacsBytes: 35,
// //       wifiSSIDs: JSON.stringify(["Vega calib", "VEGA", "vegacal", "TcY", ""]),
// //       wakeupDur: JSON.stringify([getRandomInt(180, 9600)]),
// //       tI: sensorConfig.tI.enabled
// //         ? JSON.stringify([getSensorValue("tI")])
// //         : null,
// //       hI: sensorConfig.hI.enabled
// //         ? JSON.stringify([getSensorValue("hI")])
// //         : null,
// //       json_prefix: "false",
// //       tP1: sensorConfig.tP1.enabled
// //         ? JSON.stringify([getSensorValue("tP1")])
// //         : null,
// //     };
// //   };

// //   const sendDataToServer = async (data) => {
// //     try {
// //       await $fetch("/api/device-data", {
// //         method: "POST",
// //         body: data,
// //       });
// //       console.log("✅ Data sent:", data.deviceId, data.timestamp);
// //     } catch (error) {
// //       console.error("❌ Error sending data:", error);
// //     }
// //   };

// //   const resetSensorConfig = () => {
// //     sensorConfig.tI = {
// //       enabled: true,
// //       min: 2500,
// //       max: 4000,
// //       label: "Temperature",
// //     };
// //     sensorConfig.hI = {
// //       enabled: true,
// //       min: 6000,
// //       max: 7000,
// //       label: "Humidity",
// //     };
// //     sensorConfig.tP1 = {
// //       enabled: true,
// //       min: 2500,
// //       max: 2000,
// //       label: "Temperature 1",
// //     };
// //   };

// //   return {
// //     deviceId,
// //     interval,
// //     isGenerating,
// //     sensorConfig,
// //     startGenerating,
// //     stopGenerating,
// //     resetSensorConfig,
// //   };
// // };

// // Generating the data from the starting to ending
// import { ref } from "vue";

// export const useDeviceData = () => {
//   const deviceId = ref("");
//   const startTime = ref("");
//   const endTime = ref("");
//   const isGenerating = ref(false);
//   let intervalId = null;
//   let currentTimestamp = null;
//   let endTimestamp = null;

//   // Sensor configuration
//   const sensorConfig = ref({
//     temperature: { label: "Temperature", enabled: true, min: 20, max: 35 },
//     humidity: { label: "Humidity", enabled: true, min: 40, max: 80 },
//     pressure: { label: "Pressure", enabled: true, min: 1000, max: 1050 },
//     battery: { label: "Battery", enabled: true, min: 50, max: 100 },
//   });

//   const startGenerating = () => {
//     if (!deviceId.value || !startTime.value || !endTime.value) return;

//     // Parse start and end times
//     currentTimestamp = new Date(startTime.value);
//     endTimestamp = new Date(endTime.value);

//     // Validate time range
//     if (currentTimestamp >= endTimestamp) {
//       alert("Start time must be before end time");
//       return;
//     }

//     isGenerating.value = true;

//     // Generate data immediately for the start time
//     const data = generateRandomData(deviceId.value, currentTimestamp);
//     sendDataToServer(data);

//     // Set up interval for subsequent data generation (every 5 seconds in real-time)
//     intervalId = setInterval(() => {
//       // Increment timestamp by 10 minutes for each data point
//       currentTimestamp = new Date(currentTimestamp.getTime() + 10 * 60 * 1000);

//       // Check if we've reached the end time
//       if (currentTimestamp > endTimestamp) {
//         stopGenerating();
//         return;
//       }

//       const data = generateRandomData(deviceId.value, currentTimestamp);
//       sendDataToServer(data);
//     }, 5000); // Generate every 5 seconds in real-time, but with 10-minute timestamp increments
//   };

//   const stopGenerating = () => {
//     if (intervalId) {
//       clearInterval(intervalId);
//       intervalId = null;
//     }
//     isGenerating.value = false;
//   };

//   const generateRandomData = (deviceId, timestamp) => {
//     const getRandomInt = (min, max) =>
//       Math.floor(Math.random() * (max - min + 1)) + min;
//     const getRandomFloat = (min, max, decimals = 2) =>
//       parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

//     // Use sensor configuration for generating data
//     const tempConfig = sensorConfig.value.temperature;
//     const humidityConfig = sensorConfig.value.humidity;
//     const batteryConfig = sensorConfig.value.battery;

//     return {
//       deviceUid: "cc8da2210b58",
//       deviceId,
//       fV: "v3",
//       pV: 1.0,
//       configT: getRandomInt(100, 500),
//       configL: getRandomInt(50, 200),
//       timestamp: Math.floor(timestamp.getTime() / 1000),
//       ldTimestamp: Math.floor((timestamp.getTime() - 10 * 1000) / 1000),
//       CI: 10,
//       TC: 10,
//       count: getRandomInt(0, 10),
//       kvStatus: 1025,
//       batteryVoltage: 3800,
//       batteryPercentage: batteryConfig.enabled
//         ? getRandomInt(batteryConfig.min, batteryConfig.max)
//         : getRandomInt(50, 100),
//       battery_percentage_FG: getRandomInt(40, 100),
//       eventTimestamp: Math.floor((timestamp.getTime() - 5 * 1000) / 1000),
//       Checkpoint: `Checkpoint_${getRandomInt(1, 10)}`,
//       ResetReason: "Low Battery",
//       wifiMacs: JSON.stringify(
//         Array.from({ length: 28 }, () => getRandomInt(0, 255))
//       ),
//       wifiMacsCount: 5,
//       wifiMacsBytes: 35,
//       wifiSSIDs: JSON.stringify(["Vega calib", "VEGA", "vegacal", "TcY", ""]),
//       wakeupDur: JSON.stringify([getRandomInt(180, 9600)]),
//       tI: tempConfig.enabled
//         ? JSON.stringify([
//             getRandomInt(tempConfig.min * 100, tempConfig.max * 100),
//           ])
//         : JSON.stringify([getRandomInt(1500, 2300)]),
//       hI: humidityConfig.enabled
//         ? JSON.stringify([
//             getRandomInt(humidityConfig.min * 100, humidityConfig.max * 100),
//           ])
//         : JSON.stringify([getRandomInt(4400, 5600)]),
//       json_prefix: "false",
//       // tP1: null,
//     };
//   };

//   const sendDataToServer = async (data) => {
//     //For Local Insertion
//     // try {
//     //   await $fetch("/api/device-data", {
//     //     method: "POST",
//     //     body: data,
//     //   });
//     //   console.log(
//     //     "✅ Data sent:",
//     //     data.deviceId,
//     //     new Date(data.timestamp * 1000).toLocaleString()
//     //   );
//     // } catch (error) {
//     //   console.error("❌ Error sending data:", error);
//     // }

//     // For Live Database Insertion
//     try {
//       const response = await axios.post(
//         "https://vegadataloggers.online/anchor_logs",
//         data,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       console.log("✅ Data sent successfully:", response.status);
//     } catch (error) {
//       console.error("❌ Failed to send data:", error.message);
//     }
//   };

//   const resetSensorConfig = () => {
//     sensorConfig.value = {
//       temperature: { label: "Temperature", enabled: true, min: 20, max: 35 },
//       humidity: { label: "Humidity", enabled: true, min: 40, max: 80 },
//       // pressure: { label: "Pressure", enabled: true, min: 1000, max: 1050 },
//       // battery: { label: "Battery", enabled: true, min: 50, max: 100 },
//     };
//   };

//   // Set default start and end times (current time and 2 hours later)
//   const now = new Date();
//   const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000);

//   startTime.value = now.toISOString().slice(0, 16);
//   endTime.value = twoHoursLater.toISOString().slice(0, 16);

//   return {
//     deviceId,
//     startTime,
//     endTime,
//     isGenerating,
//     sensorConfig,
//     startGenerating,
//     stopGenerating,
//     resetSensorConfig,
//   };
// };

import { ref } from "vue";
import axios from "axios";

export const useDeviceData = () => {
  // Reactive state variables
  const deviceId = ref("");
  const deviceUid = ref("");
  const startTime = ref("");
  const endTime = ref("");
  const dataInterval = ref(10); // Data interval in minutes (now editable)
  const isGenerating = ref(false);
  const recordingInterval = ref(10);
  const sendingInterval = ref(10);
  const dataCount = ref(1);

  // Live data tracking - keep latest 5 insertions
  const liveDataHistory = ref([]);

  // Non-reactive variables
  let intervalId = null;
  let currentTimestamp = null;
  let endTimestamp = null;

  // Sensor configuration
  const sensorConfig = ref({
    temperature: {
      label: "Temperature (tI)",
      enabled: true,
      min: 2600,
      max: 4400,
      arrayLength: 1,
    },
    humidity: {
      label: "Humidity (hI)",
      enabled: true,
      min: 6100,
      max: 7900,
      arrayLength: 1,
    },
    pressure: {
      label: "Pressure (tP1)",
      enabled: true,
      min: 1200,
      max: 2300,
      arrayLength: 1,
    },
    battery: {
      label: "Battery",
      enabled: true,
      min: 3700,
      max: 4200,
    },
  });

  // Helper functions
  const getRandomArray = (length, min, max) => {
    return Array.from(
      { length },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const addToLiveHistory = (payload, status, error = null) => {
    const historyItem = {
      id: Date.now() + Math.random(),
      deviceId: payload.entity.data.deviceId,
      deviceUid: payload.entity.data.deviceUid,
      count: payload.entity.data.count,
      timestamp: payload.entity.data.timestamp,
      status: status, // 'sending', 'success', 'error'
      error: error,
      time: new Date().toLocaleTimeString(),
      data: {
        tI: payload.entity.data.tI,
        hI: payload.entity.data.hI,
        tP1: payload.entity.data.tP1,
        batteryVoltage: payload.entity.data.batteryVoltage,
      },
    };

    // Add to beginning and keep only latest 5
    liveDataHistory.value.unshift(historyItem);
    if (liveDataHistory.value.length > 5) {
      liveDataHistory.value.pop();
    }

    return historyItem.id;
  };

  const updateHistoryStatus = (id, status, error = null) => {
    const item = liveDataHistory.value.find((item) => item.id === id);
    if (item) {
      item.status = status;
      item.error = error;
    }
  };

  // Main functions
  const startGenerating = () => {
    if (
      !deviceId.value ||
      !deviceUid.value ||
      !startTime.value ||
      !endTime.value
    )
      return;

    currentTimestamp = new Date(startTime.value);
    endTimestamp = new Date(endTime.value);

    if (currentTimestamp >= endTimestamp) {
      alert("Start time must be before end time");
      return;
    }

    isGenerating.value = true;
    dataCount.value = 1;
    liveDataHistory.value = []; // Clear history when starting

    const data = generateRandomData(deviceId.value, currentTimestamp);
    sendDataToServer(data);

    intervalId = setInterval(() => {
      // Increment timestamp by configurable data interval
      currentTimestamp = new Date(
        currentTimestamp.getTime() + dataInterval.value * 60 * 1000
      );

      if (currentTimestamp > endTimestamp) {
        stopGenerating();
        return;
      }

      const data = generateRandomData(deviceId.value, currentTimestamp);
      sendDataToServer(data);
      dataCount.value++;
    }, sendingInterval.value * 1000);
  };

  const stopGenerating = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    isGenerating.value = false;
  };

  const generateRandomData = (deviceId, timestamp) => {
    const unixTimestamp = Math.floor(timestamp.getTime() / 1000);
    const ldTimestamp = unixTimestamp - 10;

    const tempConfig = sensorConfig.value.temperature;
    const humidityConfig = sensorConfig.value.humidity;
    const pressureConfig = sensorConfig.value.pressure;
    const batteryConfig = sensorConfig.value.battery;

    const payload = {
      entity: {
        data: {
          deviceId: deviceId,
          deviceUid: deviceUid.value,
          fV: "v3",
          pV: 1,
          configT: 439,
          configL: 127,
          CI: recordingInterval.value,
          TC: sendingInterval.value,
          count: dataCount.value,
          kvStatus: 1025,
          batteryVoltage: batteryConfig.enabled
            ? getRandomInt(batteryConfig.min, batteryConfig.max)
            : 4198,
          batteryPercentage: batteryConfig.enabled
            ? Math.floor(
                getRandomInt(batteryConfig.min, batteryConfig.max) / 42
              )
            : 98,
          battery_percentage_FG: getRandomInt(1, 10),
          eventTimestamp: unixTimestamp,
          Checkpoint: getRandomItem(["Start", "Mid", "End", "Checkpoint_10"]),
          ResetReason: getRandomItem([
            "Low Battery",
            "Manual Reset",
            "OTA Update",
          ]),
          wifiMacs: [
            "00:1A:2B:3C:4D:5E",
            "11:22:33:44:55:66",
            "AA:BB:CC:DD:EE:FF",
          ],
          wifiMacsCount: 3,
          wifiMacsBytes: getRandomInt(30, 100),
          wifiSSIDs: ["zion", "VegaCEXT", "vegacal"],
          wakeupDur: [],
          json_prefix: "",
          timestamp: unixTimestamp,
          ldTimestamp: ldTimestamp,
          tI: tempConfig.enabled
            ? getRandomArray(
                tempConfig.arrayLength,
                tempConfig.min,
                tempConfig.max
              )
            : [],
          hI: humidityConfig.enabled
            ? getRandomArray(
                humidityConfig.arrayLength,
                humidityConfig.min,
                humidityConfig.max
              )
            : [],
          tP1: pressureConfig.enabled
            ? getRandomArray(
                pressureConfig.arrayLength,
                pressureConfig.min,
                pressureConfig.max
              )
            : [],
        },
      },
    };

    return payload;
  };

  const sendDataToServer = async (payload) => {
    const historyId = addToLiveHistory(payload, "sending");

    try {
      const response = await axios.post(
        "https://vegadataloggers.online/anchor_logs",
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      updateHistoryStatus(historyId, "success");
      console.log(
        "✅ Data sent successfully:",
        response.status,
        "Device:",
        payload.entity.data.deviceId,
        "Count:",
        payload.entity.data.count,
        "Time:",
        new Date(payload.entity.data.timestamp * 1000).toLocaleString()
      );
    } catch (error) {
      updateHistoryStatus(historyId, "error", error.message);
      console.error("❌ Failed to send data:", error.message);
    }
  };

  const resetSensorConfig = () => {
    sensorConfig.value = {
      temperature: {
        label: "Temperature (tI)",
        enabled: true,
        min: 2600,
        max: 4400,
        arrayLength: 5,
      },
      humidity: {
        label: "Humidity (hI)",
        enabled: true,
        min: 6100,
        max: 7900,
        arrayLength: 5,
      },
      pressure: {
        label: "Pressure (tP1)",
        enabled: true,
        min: 1200,
        max: 2300,
        arrayLength: 5,
      },
      battery: {
        label: "Battery",
        enabled: true,
        min: 3700,
        max: 4200,
      },
    };
  };

  // Initialize default times
  const now = new Date();
  const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000);

  startTime.value = now.toISOString().slice(0, 16);
  endTime.value = twoHoursLater.toISOString().slice(0, 16);

  // Return all reactive properties and functions
  return {
    deviceId,
    deviceUid,
    startTime,
    endTime,
    dataInterval,
    recordingInterval,
    sendingInterval,
    isGenerating,
    sensorConfig,
    dataCount,
    liveDataHistory,
    startGenerating,
    stopGenerating,
    resetSensorConfig,
  };
};
