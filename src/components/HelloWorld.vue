<template>
  <div class="container">
    <h2 class="title">Gas Leak Detection System</h2>

    <!-- Row for Gauges -->
    <div class="gauge-row">
      <!-- Temperature Gauge -->
      <div class="gauge-item">
        <div class="gauge">
          <svg viewBox="0 0 36 36" class="circular-chart">
            <path
              class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="circle"
              :stroke-dasharray="calcPercentage(temperature, 45) + ', 100'"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.5" class="gauge-text">
              {{ temperature }}°C
            </text>
          </svg>
          <div class="label">Temperature</div>
        </div>
      </div>

      <!-- Gas Level Gauge -->
      <div class="gauge-item">
        <div class="gauge">
          <svg viewBox="0 0 36 36" class="circular-chart">
            <path
              class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="circle"
              :stroke-dasharray="calcPercentage(gasLevel, 150) + ', 100'"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.5" class="gauge-text">
              {{ gasLevel }}
            </text>
          </svg>
          <div class="label">Gas Detection</div>
        </div>
      </div>

      <!-- Humidity Gauge -->
      <div class="gauge-item">
        <div class="gauge">
          <svg viewBox="0 0 36 36" class="circular-chart">
            <path
              class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="circle"
              :stroke-dasharray="calcPercentage(humidity, 100) + ', 100'"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.5" class="gauge-text">
              {{ humidity }}%
            </text>
          </svg>
          <div class="label">Humidity</div>
        </div>
      </div>
    </div>

    <!-- Servo Motor Control -->
    <div class="servo-control">
      <h3>Control Servo Motor</h3>
      <label class="switch">
        <input type="checkbox" v-model="servoOn" @change="controlServo" />
        <span class="slider"></span>
      </label>
      <span class="servo-status">Servo {{ servoOn ? "On" : "Off" }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temperature: 25,
      gasLevel: 80,
      humidity: 65,
      servoOn: false
    };
  },
  methods: {
    controlServo() {
      console.log(this.servoOn ? "Servo On" : "Servo Off");
      // Add your servo control logic here
    },
    calcPercentage(value, max) {
      return ((value / max) * 100).toFixed(2);
    }
  }
};
</script>

<style scoped>
/* General Container */
.container {
  font-family: Arial, sans-serif;
  margin: 20px;
  text-align: center;
}

/* Title */
.title {
  color: #333;
  margin-bottom: 30px;
}

/* Row for Gauges (Display gauges horizontally) */
.gauge-row {
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
}

/* Individual Gauge Item */
.gauge-item {
  flex: 1;
  max-width: 200px;
  text-align: center;
  margin: 0 10px;
}

/* Circular Gauge Styling */
.circular-chart {
  width: 100px;
  height: 100px;
  position: relative;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke: #4caf50;
  stroke-width: 2.8;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
  transition: stroke-dasharray 0.3s ease;
}

/* Gauge Text Inside Circle */
.gauge-text {
  font-size: 0.4em;
  fill: #333;
  font-weight: bold;
  text-anchor: middle;
  dominant-baseline: middle;
}

/* Label under each gauge */
.label {
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  color: #333;
}

/* Servo Control Section */
.servo-control {
  margin-top: 20px;
}

/* Toggle Switch */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  border-radius: 50%;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #4caf50;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

/* Servo Status */
.servo-status {
  font-size: 18px;
  margin-left: 10px;
}
</style>
