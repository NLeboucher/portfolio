<template>
  <div>
    <div class="card elevation">
      <canvas
        class="canvas elevation"
        ref="canvasRef"
        id="canvas"
        width="280"
        height="280"
        @mousedown="canvasMouseDown"
        @mousemove="canvasMouseMove"
      ></canvas>

      <div class="button" @mousedown="clearCanvas">CLEAR</div>

      <div class="predictions">
        <div v-for="number in predictions" :key="'prediction-' + number" :id="'prediction-' + number" class="prediction-col">
          <div class="prediction-bar-container">
            <div class="prediction-bar"></div>
          </div>
          <div class="prediction-number">{{ number }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
console.log('Script started');
import { Tensor, InferenceSession } from "onnxjs";
import * as ort from 'onnxruntime-web';

const CANVAS_SIZE = 280;
const CANVAS_SCALE = 0.5;
export default {
  data() {
    return {
      predictions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'd', 'e', 'f', 'g', 'h', 'n', 'q', 'r', 't'],
      isMouseDown: false,
      hasIntroText: true,
      lastX: 0,
      lastY: 0,
      ctx: null,
    };
  },
  async mounted() {

    // Set up the canvas context after the component is mounted
    this.setupCanvas();
    /*
    try {
      const response = await this.$http.get('/onnx_model.onnx');
      // Process the model using response.data
    } catch (error) {
      console.error('Error loading the model:', error);
    } */

    // Load the model
    this.loadModel();
  },
  methods: {
    async loadModel() {
      console.log('Loading Model');

      this.session = await ort.InferenceSession.create('/models/onnx_model.onnx')
      console.log('Loaded Model');
      console.log(this.session);

      if (!this.session) {
    console.error('Error: Session not initialized');
      }

    console.log('Model Loaded');
    },
    clearCanvas() {
      console.log('Clearing Canvas');
      this.ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      this.predictions.forEach((_, i) => {
        const element = document.getElementById(`prediction-${i}`);
        element.className = "prediction-col";
        element.children[0].children[0].style.height = "0";
      });
      console.log('Cleared Canvas');
    },
    drawLine(fromX, fromY, toX, toY) {
      this.ctx.beginPath();
      this.ctx.moveTo(fromX, fromY);
      this.ctx.lineTo(toX, toY);
      this.ctx.closePath();
      this.ctx.stroke();
      this.updatePredictions();
    },
      async updatePredictions() {
      console.log('updating predictions');

      const imgData = this.ctx.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      const input = new ort.Tensor(new Float32Array(imgData.data), "float32");
      console.log('getting session');

      const outputMap = await session.run({ 'input': input });

      console.log('got session');

      const outputTensor = outputMap.values().next().value;
      const predictions = outputTensor.data;
      const maxPrediction = Math.max(...predictions);

      for (let i = 0; i < predictions.length; i++) {
        const element = document.getElementById(`prediction-${i}`);
        element.children[0].children[0].style.height = `${predictions[i] * 100}%`;
        element.className =
          predictions[i] === maxPrediction
            ? "prediction-col top-prediction"
            : "prediction-col";
      }
      console.log('updated predictions');

    },
    canvasMouseDown(event) {
      this.isMouseDown = true;
      if (this.hasIntroText) {
        this.clearCanvas();
        this.hasIntroText = false;sess
      }
      const x = event.offsetX / CANVAS_SCALE;
      const y = event.offsetY / CANVAS_SCALE;
      this.lastX = x + 0.001;
      this.lastY = y + 0.001;
      this.canvasMouseMove(event);
    },
    canvasMouseMove(event) {
      const x = event.offsetX / CANVAS_SCALE;
      const y = event.offsetY / CANVAS_SCALE;
      if (this.isMouseDown) {
        this.drawLine(this.lastX, this.lastY, x, y);
      }
      this.lastX = x;
      this.lastY = y;
    },
    bodyMouseUp() {
      this.isMouseDown = false;
    },
    bodyMouseOut(event) {
      if (!event.relatedTarget || event.relatedTarget.nodeName === "HTML") {
        this.isMouseDown = false;
      }
    },
    setupCanvas() {
      console.log('Setting up Canvas');
      this.canvas = this.$refs.canvasRef;
      this.ctx = this.canvas.getContext("2d");

      // Add 'Draw a number here!' to the canvas.
      this.ctx.lineWidth = 28;
      this.ctx.lineJoin = "round";
      this.ctx.font = "28px sans-serif";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.fillStyle = "#212121";
      this.ctx.fillText("Loading...", CANVAS_SIZE / 2, CANVAS_SIZE / 2);

      // Set the line color for the canvas.
      this.ctx.strokeStyle = "#212121";

      // Attach event listeners
      this.$el.addEventListener("mouseup", this.bodyMouseUp);
      this.$el.addEventListener("mouseout", this.bodyMouseOut);
      console.log('Setup Canvas Finished');
    },
  },
};
console.log('Script Finished');
</script>

<style scoped>
*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

body {
  align-items: center;
  background: #fafafa;
  color: #212121;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  justify-content: center;
  margin: 0;
}

.elevation {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.card {
  background: #fff;
  border-radius: 4px;
  padding: 16px;
}

.canvas {
  border-radius: 4px;
  height: 140px;
  width: 140px;
}

.button {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12), inset 0 0 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.25px;
  line-height: 36px;
  margin: 16px 0;
  text-align: center;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  width: 140px;
}

.button:hover {
  background: #f5f5f5;
}

.button:active {
  box-shadow: 0 0 rgba(0, 0, 0, 0.2), 0 0 rgba(0, 0, 0, 0.14),
    0 0 rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.05s cubic-bezier(0.4, 0, 0.2, 1);
}

.predictions {
  display: flex;
}

.prediction-col {
  padding: 0 2px;
}

.prediction-bar-container {
  background: #f5f5f5;
  height: 140px;
  width: 10px;
  position: relative;
}

.prediction-bar {
  background: #e0e0e0;
  bottom: 0;
  position: absolute;
  width: 100%;
}

.prediction-number {
  color: #bdbdbd;
  font-size: 14px;
  text-align: center;
}

.top-prediction .prediction-bar {
  background: #00f0ff;
}

.top-prediction .prediction-number {
  color: #00f0ff;
  font-weight: bold;
}
</style>
