<!-- <template>
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
</script> -->
<!-- 
<template>
  <form @submit.prevent="startGenerating">
    <label for="deviceId">Device ID:</label>
    <input v-model="deviceId" type="text" id="deviceId" required />

    <label for="interval">Interval (seconds):</label>
    <input
      v-model.number="interval"
      type="number"
      id="interval"
      min="1"
      required
    />

    <button type="submit" :disabled="isGenerating">Start Generating</button>
    <button v-if="isGenerating" type="button" @click="stopGenerating">
      Stop
    </button>
  </form>
</template>

<script setup>
import { useDeviceData } from "~/composables/useDeviceData";

const { deviceId, interval, isGenerating, startGenerating, stopGenerating } =
  useDeviceData();
</script> -->

<!-- <template>
  <div class="page-container">
    <div class="content-wrapper">
      <h1 class="page-title">Device Data Generator</h1>

      <div class="card">
        <h2 class="card-title">Device Configuration</h2>
        <form @submit.prevent="startGenerating" class="device-form">
          <div class="input-row">
            <div class="input-group">
              <label>Device ID</label>
              <input
                v-model="deviceId"
                type="text"
                placeholder="Enter device ID"
                required
              />
            </div>
            <div class="input-group">
              <label>Interval (seconds)</label>
              <input
                v-model.number="interval"
                type="number"
                min="1"
                placeholder="5"
                required
              />
            </div>
          </div>

          <div class="button-row">
            <button
              type="submit"
              :disabled="isGenerating || !deviceId"
              class="btn btn-start"
            >
              {{ isGenerating ? "Generating..." : "Start Generating" }}
            </button>

            <button
              v-if="isGenerating"
              type="button"
              @click="stopGenerating"
              class="btn btn-stop"
            >
              Stop
            </button>
          </div>
        </form>
      </div>

      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Sensor Configuration</h2>
          <button @click="resetSensorConfig" class="btn btn-reset">
            Reset All
          </button>
        </div>

        <div class="sensor-list">
          <div
            v-for="(config, sensorName) in sensorConfig"
            :key="sensorName"
            class="sensor-card"
          >
            <div class="sensor-info">
              <div class="sensor-toggle">
                <input
                  :id="sensorName"
                  type="checkbox"
                  v-model="config.enabled"
                />
                <label :for="sensorName" class="toggle-label"></label>
              </div>
              <h3 class="sensor-name">{{ config.label }}</h3>
            </div>

            <div class="sensor-ranges" :class="{ disabled: !config.enabled }">
              <div class="range-input">
                <label>Min</label>
                <input
                  v-model.number="config.min"
                  type="number"
                  :disabled="!config.enabled"
                />
              </div>
              <div class="range-input">
                <label>Max</label>
                <input
                  v-model.number="config.max"
                  type="number"
                  :disabled="!config.enabled"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isGenerating" class="card status-card">
        <div class="status-content">
          <div class="status-dot"></div>
          <div class="status-text">
            <h3>Data Generation Active</h3>
            <p><strong>Device:</strong> {{ deviceId }}</p>
            <p><strong>Interval:</strong> {{ interval }}s</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDeviceData } from "~/composables/useDeviceData";

const {
  deviceId,
  interval,
  isGenerating,
  sensorConfig,
  startGenerating,
  stopGenerating,
  resetSensorConfig,
} = useDeviceData();
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 1rem;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  text-align: center;
  color: white;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.card-title {
  color: #2d3748;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.device-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  color: #4a5568;
  font-weight: 600;
  font-size: 0.9rem;
}

.input-group input {
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.input-group input:focus {
  outline: none;
  border-color: #667eea;
}

.button-row {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.btn-start {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  flex: 1;
}

.btn-start:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn-start:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn-stop {
  background: #e53e3e;
  color: white;
}

.btn-stop:hover {
  background: #c53030;
  transform: translateY(-2px);
}

.btn-reset {
  background: #edf2f7;
  color: #4a5568;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
}

.btn-reset:hover {
  background: #e2e8f0;
}

.sensor-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sensor-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.3s;
}

.sensor-card:hover {
  border-color: #cbd5e0;
}

.sensor-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sensor-name {
  color: #2d3748;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  min-width: 120px;
}

.sensor-toggle {
  position: relative;
}

.sensor-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-label {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  background: #cbd5e0;
  border-radius: 24px;
  cursor: pointer;
  transition: 0.3s;
}

.toggle-label:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background: white;
  border-radius: 50%;
  transition: 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.sensor-toggle input:checked + .toggle-label {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.sensor-toggle input:checked + .toggle-label:before {
  transform: translateX(20px);
}

.sensor-ranges {
  display: flex;
  gap: 1rem;
  transition: opacity 0.3s;
}

.sensor-ranges.disabled {
  opacity: 0.4;
}

.range-input {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 80px;
}

.range-input label {
  color: #718096;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.range-input input {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
  transition: border-color 0.3s;
}

.range-input input:focus {
  outline: none;
  border-color: #667eea;
}

.range-input input:disabled {
  background: #f1f5f9;
  cursor: not-allowed;
}

/* Status Card */
.status-card {
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid #48bb78;
}

.status-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.status-dot {
  width: 12px;
  height: 12px;
  background: #48bb78;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(72, 187, 120, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(72, 187, 120, 0);
  }
}

.status-text h3 {
  color: #2d3748;
  margin: 0;
  font-size: 1rem;
}

.status-text p {
  color: #4a5568;
  margin: 0.2rem 0;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-container {
    padding: 1rem 0.5rem;
  }

  .page-title {
    font-size: 1.8rem;
  }

  .input-row {
    grid-template-columns: 1fr;
  }

  .button-row {
    flex-direction: column;
  }

  .card-header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .sensor-card {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .sensor-info {
    justify-content: space-between;
  }

  .sensor-ranges {
    justify-content: center;
  }
}
</style> -->

<template>
  <div class="page-container">
    <div class="content-wrapper">
      <h1 class="page-title">Device Data Generator</h1>

      <div class="main-content">
        <!-- Left Side - Configuration -->
        <div class="left-panel">
          <!-- Device Configuration -->
          <div class="card">
            <h2 class="card-title">Device Configuration</h2>
            <form @submit.prevent="startGenerating" class="device-form">
              <div class="input-row">
                <div class="input-group">
                  <label>Device ID</label>
                  <input
                    v-model="deviceId"
                    type="text"
                    placeholder="Enter device ID (e.g., AA4543)"
                    required
                  />
                </div>
                <div class="input-group">
                  <label>Device UID</label>
                  <input
                    v-model="deviceUid"
                    type="text"
                    placeholder="Enter device UID"
                    required
                  />
                </div>
              </div>

              <!-- Interval Configuration -->
              <div class="input-row">
                <div class="input-group">
                  <label>Recording Interval (CI)</label>
                  <input
                    v-model.number="recordingInterval"
                    type="number"
                    min="1"
                    max="10"
                    placeholder="Data points per second"
                    required
                  />
                  <small>Data points collected per second</small>
                </div>
                <div class="input-group">
                  <label>Sending Interval (TC)</label>
                  <input
                    v-model.number="sendingInterval"
                    type="number"
                    min="1"
                    max="60"
                    placeholder="Seconds between sends"
                    required
                  />
                  <small>Seconds between data transmissions</small>
                </div>
              </div>

              <!-- Data Interval Configuration -->
              <div class="input-row">
                <div class="input-group">
                  <label>Data Interval (Minutes)</label>
                  <input
                    v-model.number="dataInterval"
                    type="number"
                    min="1"
                    max="60"
                    placeholder="Minutes between data points"
                    required
                  />
                  <small>Time between data point timestamps</small>
                </div>
              </div>

              <!-- Date Time Range -->
              <div class="input-row">
                <div class="input-group">
                  <label>Start Time</label>
                  <input
                    v-model="startTime"
                    type="datetime-local"
                    required
                  />
                </div>
                <div class="input-group">
                  <label>End Time</label>
                  <input
                    v-model="endTime"
                    type="datetime-local"
                    required
                  />
                </div>
              </div>

              <!-- Time Info -->
              <div class="time-info" v-if="startTime && endTime">
                <div class="info-item">
                  <span class="info-label">Duration:</span>
                  <span class="info-value">{{ calculateDuration }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Data Points:</span>
                  <span class="info-value">{{ calculateDataPoints }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Data Interval:</span>
                  <span class="info-value">{{ dataInterval }} minutes</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Send Every:</span>
                  <span class="info-value">{{ sendingInterval }}s</span>
                </div>
              </div>

              <div class="button-row">
                <button
                  type="submit"
                  :disabled="isGenerating || !deviceId || !deviceUid || !startTime || !endTime"
                  class="btn btn-start"
                >
                  {{ isGenerating ? "Generating..." : "Start Generating" }}
                </button>

                <button
                  v-if="isGenerating"
                  type="button"
                  @click="stopGenerating"
                  class="btn btn-stop"
                >
                  Stop Generation
                </button>
              </div>
            </form>
          </div>

          <!-- Sensor Configuration -->
          <div class="card">
            <div class="card-header">
              <h2 class="card-title">Sensor Configuration</h2>
              <button @click="resetSensorConfig" class="btn btn-reset">
                Reset All
              </button>
            </div>

            <div class="sensor-list">
              <div
                v-for="(config, sensorName) in sensorConfig"
                :key="sensorName"
                class="sensor-card"
              >
                <div class="sensor-info">
                  <div class="sensor-toggle">
                    <input
                      :id="sensorName"
                      type="checkbox"
                      v-model="config.enabled"
                    />
                    <label :for="sensorName" class="toggle-label"></label>
                  </div>
                  <h3 class="sensor-name">{{ config.label }}</h3>
                </div>

                <div class="sensor-ranges" :class="{ disabled: !config.enabled }">
                  <div class="range-input">
                    <label>Min</label>
                    <input
                      v-model.number="config.min"
                      type="number"
                      :disabled="!config.enabled"
                    />
                  </div>
                  <div class="range-input">
                    <label>Max</label>
                    <input
                      v-model.number="config.max"
                      type="number"
                      :disabled="!config.enabled"
                    />
                  </div>
                  <div v-if="config.arrayLength !== undefined" class="range-input">
                    <label>Array Length</label>
                    <input
                      v-model.number="config.arrayLength"
                      type="number"
                      min="1"
                      max="20"
                      :disabled="!config.enabled"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Status Display -->
          <div v-if="isGenerating" class="card status-card">
            <div class="status-content">
              <div class="status-dot"></div>
              <div class="status-text">
                <h3>Data Generation Active</h3>
                <p><strong>Device:</strong> {{ deviceId }}</p>
                <p><strong>Device UID:</strong> {{ deviceUid }}</p>
                <p><strong>Data Count:</strong> {{ dataCount }}</p>
                <p><strong>Progress:</strong> {{ generationProgress }}%</p>
                <p><strong>Next data in:</strong> {{ nextDataCountdown }}s</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Live Data Status -->
        <div class="right-panel">
          <div class="card live-data-card">
            <div class="card-header">
              <h2 class="card-title">Live Data Status</h2>
              <div class="status-badge">
                {{ liveDataHistory.length }} / 5 Records
              </div>
            </div>

            <div class="live-data-container">
              <div v-if="liveDataHistory.length === 0" class="no-data">
                <div class="no-data-icon">📊</div>
                <p>No data generated yet</p>
                <small>Start generation to see live status</small>
              </div>

              <div v-else class="data-history">
                <div
                  v-for="item in liveDataHistory"
                  :key="item.id"
                  class="data-item"
                  :class="{
                    'status-sending': item.status === 'sending',
                    'status-success': item.status === 'success',
                    'status-error': item.status === 'error'
                  }"
                >
                  <div class="data-header">
                    <div class="data-info">
                      <strong>{{ item.deviceId }}</strong>
                      <span class="data-count">#{{ item.count }}</span>
                    </div>
                    <div class="data-status">
                      <span class="status-icon">
                        <span v-if="item.status === 'sending'" class="loading-spinner"></span>
                        <span v-else-if="item.status === 'success'">✅</span>
                        <span v-else-if="item.status === 'error'">❌</span>
                      </span>
                      <span class="status-text">
                        {{ item.status === 'sending' ? 'Sending...' : 
                           item.status === 'success' ? 'Success' : 'Failed' }}
                      </span>
                    </div>
                  </div>

                  <div class="data-details">
                    <div class="detail-row">
                      <span class="label">UID:</span>
                      <span class="value">{{ item.deviceUid }}</span>
                    </div>
                    <div class="detail-row">
                      <span class="label">Time:</span>
                      <span class="value">{{ item.time }}</span>
                    </div>
                    <div class="detail-row">
                      <span class="label">Timestamp:</span>
                      <span class="value">{{ new Date(item.timestamp * 1000).toLocaleTimeString() }}</span>
                    </div>
                  </div>

                  <div class="sensor-data">
                    <div class="sensor-row" v-if="item.data.tI.length > 0">
                      <span class="sensor-label">Temp:</span>
                      <span class="sensor-values">{{ item.data.tI.slice(0, 3).join(', ') }}{{ item.data.tI.length > 3 ? '...' : '' }}</span>
                    </div>
                    <div class="sensor-row" v-if="item.data.hI.length > 0">
                      <span class="sensor-label">Humid:</span>
                      <span class="sensor-values">{{ item.data.hI.slice(0, 3).join(', ') }}{{ item.data.hI.length > 3 ? '...' : '' }}</span>
                    </div>
                    <div class="sensor-row" v-if="item.data.tP1.length > 0">
                      <span class="sensor-label">Press:</span>
                      <span class="sensor-values">{{ item.data.tP1.slice(0, 3).join(', ') }}{{ item.data.tP1.length > 3 ? '...' : '' }}</span>
                    </div>
                    <div class="sensor-row">
                      <span class="sensor-label">Battery:</span>
                      <span class="sensor-values">{{ item.data.batteryVoltage }}</span>
                    </div>
                  </div>

                  <div v-if="item.error" class="error-details">
                    <small>Error: {{ item.error }}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useDeviceData } from "~/composables/useDeviceData";

const {
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
} = useDeviceData();

// Reactive tracking for progress and countdown
const generationProgress = ref(0);
const nextDataCountdown = ref(0);

// Computed properties for time calculations
const calculateDuration = computed(() => {
  if (!startTime.value || !endTime.value) return "0 hours";
  
  const start = new Date(startTime.value);
  const end = new Date(endTime.value);
  const diffMs = end - start;
  const diffHours = Math.round(diffMs / (1000 * 60 * 60) * 10) / 10;
  
  return `${diffHours} hours`;
});

const calculateDataPoints = computed(() => {
  if (!startTime.value || !endTime.value) return 0;
  
  const start = new Date(startTime.value);
  const end = new Date(endTime.value);
  const diffMs = end - start;
  const diffMinutes = diffMs / (1000 * 60);
  
  return Math.floor(diffMinutes / dataInterval.value) + 1;
});

// Watch for generation status to update progress and countdown
watch(isGenerating, (newVal) => {
  if (newVal) {
    generationProgress.value = 0;
    nextDataCountdown.value = sendingInterval.value;
    
    // Progress tracking
    const progressInterval = setInterval(() => {
      if (!isGenerating.value) {
        clearInterval(progressInterval);
        return;
      }
      
      const now = Date.now();
      const start = new Date(startTime.value).getTime();
      const end = new Date(endTime.value).getTime();
      const elapsed = now - start;
      const total = end - start;
      
      generationProgress.value = Math.min(Math.round((elapsed / total) * 100), 100);
    }, 1000);

    // Countdown for next data
    const countdownInterval = setInterval(() => {
      if (!isGenerating.value) {
        clearInterval(countdownInterval);
        return;
      }
      
      nextDataCountdown.value--;
      if (nextDataCountdown.value <= 0) {
        nextDataCountdown.value = sendingInterval.value;
      }
    }, 1000);
  }
});
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 1rem;
}

.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.page-title {
  text-align: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.main-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.left-panel {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.right-panel {
  display: flex;
  flex-direction: column;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.live-data-card {
  height: fit-content;
  max-height: 80vh;
  position: sticky;
  top: 2rem;
}

.card-title {
  color: #2d3748;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.status-badge {
  background: #667eea;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Device Form */
.device-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.input-row:nth-child(3) {
  grid-template-columns: 1fr;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  color: #4a5568;
  font-weight: 600;
  font-size: 0.9rem;
}

.input-group small {
  color: #718096;
  font-size: 0.8rem;
}

.input-group input {
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.input-group input:focus {
  outline: none;
  border-color: #667eea;
}

/* Time Info */
.time-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-label {
  color: #718096;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.info-value {
  color: #2d3748;
  font-weight: 600;
  font-size: 0.9rem;
}

.button-row {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.btn-start {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  flex: 1;
}

.btn-start:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn-start:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn-stop {
  background: #e53e3e;
  color: white;
}

.btn-stop:hover {
  background: #c53030;
  transform: translateY(-2px);
}

.btn-reset {
  background: #edf2f7;
  color: #4a5568;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
}

.btn-reset:hover {
  background: #e2e8f0;
}

/* Sensor Configuration */
.sensor-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sensor-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.3s;
}

.sensor-card:hover {
  border-color: #cbd5e0;
}

.sensor-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sensor-name {
  color: #2d3748;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  min-width: 160px;
}

/* Toggle Switch */
.sensor-toggle {
  position: relative;
}

.sensor-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-label {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  background: #cbd5e0;
  border-radius: 24px;
  cursor: pointer;
  transition: 0.3s;
}

.toggle-label:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background: white;
  border-radius: 50%;
  transition: 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.sensor-toggle input:checked + .toggle-label {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.sensor-toggle input:checked + .toggle-label:before {
  transform: translateX(20px);
}

/* Range Inputs */
.sensor-ranges {
  display: flex;
  gap: 1rem;
  transition: opacity 0.3s;
}

.sensor-ranges.disabled {
  opacity: 0.4;
}

.range-input {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 80px;
}

.range-input label {
  color: #718096;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.range-input input {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
  transition: border-color 0.3s;
}

.range-input input:focus {
  outline: none;
  border-color: #667eea;
}

.range-input input:disabled {
  background: #f1f5f9;
  cursor: not-allowed;
}

/* Status Card */
.status-card {
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid #48bb78;
}

.status-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.status-dot {
  width: 12px;
  height: 12px;
  background: #48bb78;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7); }
  70% { box-shadow: 0 0 0 8px rgba(72, 187, 120, 0); }
  100% { box-shadow: 0 0 0 0 rgba(72, 187, 120, 0); }
}

.status-text h3 {
  color: #2d3748;
  margin: 0;
  font-size: 1rem;
}

.status-text p {
  color: #4a5568;
  margin: 0.2rem 0;
  font-size: 0.9rem;
}

/* Live Data Status */
.live-data-container {
  max-height: 60vh;
  overflow-y: auto;
}

.no-data {
  text-align: center;
  padding: 2rem;
  color: #718096;
}

.no-data-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.data-history {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.data-item {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  background: #f8fafc;
  transition: all 0.3s;
}

.data-item.status-sending {
  border-color: #fbbf24;
  background: #fef3c7;
}

.data-item.status-success {
  border-color: #10b981;
  background: #d1fae5;
}

.data-item.status-error {
  border-color: #ef4444;
  background: #fee2e2;
}

.data-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.data-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.data-count {
  background: #667eea;
  color: white;
  padding: 0.125rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.data-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-text {
  font-size: 0.8rem;
  font-weight: 600;
}

.loading-spinner {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid #fbbf24;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.data-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
}

.label {
  color: #718096;
  font-weight: 600;
}

.value {
  color: #2d3748;
  font-family: monospace;
}

.sensor-data {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.sensor-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
}

.sensor-label {
  color: #718096;
  font-weight: 600;
  min-width: 50px;
}

.sensor-values {
  color: #2d3748;
  font-family: monospace;
}

.error-details {
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: #fecaca;
  border-radius: 4px;
  color: #dc2626;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
  }
  
  .right-panel {
    order: -1;
  }

  .live-data-card {
    position: static;
    max-height: 40vh;
  }
}

@media (max-width: 768px) {
  .page-container {
    padding: 1rem 0.5rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .input-row {
    grid-template-columns: 1fr;
  }

  .button-row {
    flex-direction: column;
  }

  .sensor-card {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .sensor-info {
    justify-content: space-between;
  }

  .sensor-ranges {
    justify-content: center;
  }

  .time-info {
    grid-template-columns: 1fr;
  }

  .data-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
}
</style>
