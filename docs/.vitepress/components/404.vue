<template>
  <div class="not-found-body">
    <!-- 粒子背景 -->
    <canvas ref="particleCanvas" class="particle-canvas"></canvas>

    <div class="container" @mousemove="handleMouseMove">
      <!-- 3D 404 文字 -->
      <div
          class="error-code"
          :style="errorTextStyle"
      >
        404
      </div>

      <!-- 信息卡片 -->
      <div
          class="content-card"
          :style="cardStyle"
      >
        <h1>噢！页面迷失在星空中</h1>
        <p>
          你访问的地址可能已经被删除、重命名，或者由于时空波动暂时无法访问。<br />
          建议您回到安全的基站重新出发。
        </p>

        <div class="btn-group">
          <button class="btn btn-primary" @click="goHome">返回首页</button>
          <button class="btn btn-outline" @click="goBack">返回上一页</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, type CSSProperties } from 'vue';

// --- 类型定义 ---
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

// --- 状态与引用 ---
const particleCanvas = ref<HTMLCanvasElement | null>(null);
const mousePos = ref({ x: 0, y: 0 });
let animationId: number;
let particles: Particle[] = [];

// --- 3D 视差计算 ---
const handleMouseMove = (e: MouseEvent) => {
  const { clientX, clientY } = e;
  // 计算相对于屏幕中心的偏移量 (-0.5 到 0.5)
  mousePos.value = {
    x: (clientX - window.innerWidth / 2) / 25,
    y: (clientY - window.innerHeight / 2) / 25
  };
};

const cardStyle = computed<CSSProperties>(() => ({
  transform: `rotateY(${-mousePos.value.x}deg) rotateX(${mousePos.value.y}deg)`
}));

const errorTextStyle = computed<CSSProperties>(() => ({
  transform: `translateX(${mousePos.value.x * 1.5}px) translateY(${mousePos.value.y * 1.5}px)`
}));

// --- 粒子系统逻辑 ---
const initParticles = (canvas: HTMLCanvasElement) => {
  const width = canvas.width = window.innerWidth;
  const height = canvas.height = window.innerHeight;
  particles = [];

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random()
    });
  }
};

const animate = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';

  particles.forEach(p => {
    ctx.globalAlpha = p.opacity;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
  });

  animationId = requestAnimationFrame(() => animate(ctx, canvas));
};

// --- 导航逻辑 ---
const goHome = () => {
  // 这里可以替换为 router.push('/')
  window.location.href = '/';
};

const goBack = () => {
  window.history.back();
};

const handleResize = () => {
  if (particleCanvas.value) {
    initParticles(particleCanvas.value);
  }
};

// --- 生命周期 ---
onMounted(() => {
  const canvas = particleCanvas.value;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      initParticles(canvas);
      animate(ctx, canvas);
    }
  }
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped lang="scss">
$primary-color: #00d2ff;
$secondary-color: #3a7bd5;
$bg-color: var(--vp-c-bg);
$text-color: #ffffff;


.not-found-body {
  width: 100%;
  flex: 1;
  overflow: hidden;
  background-color: $bg-color;
  font-family: 'Segoe UI', Roboto, sans-serif;
  display: flex;

  .particle-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .container {
    z-index: 10;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    perspective: 1000px;

    .error-code {
      height: 210px;
      line-height: 210px;
      font-size: 15rem;
      font-weight: 900;
      letter-spacing: 20px;
      background: linear-gradient(to bottom, #fff, $primary-color);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 10px 30px rgba(0, 210, 255, 0.3);
      margin-bottom: 20px;
      pointer-events: none;
      transition: transform 0.1s ease-out;
      user-select: none;
    }

    .content-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 40px 60px;
      border-radius: 24px;
      text-align: center;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
      transform-style: preserve-3d;
      transition: transform 0.1s ease-out;

      h1 {
        font-size: 2.5rem;
        margin-bottom: 15px;
        font-weight: 300;
      }

      p {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 30px;
        line-height: 1.6;
      }

      .btn-group {
        display: flex;
        gap: 20px;
        justify-content: center;

        .btn {
          padding: 12px 35px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
          outline: none;

          &-primary {
            background: linear-gradient(135deg, $primary-color, $secondary-color);
            color: white;
            box-shadow: 0 10px 20px rgba(58, 123, 213, 0.3);

            &:hover {
              transform: translateY(-3px);
              box-shadow: 0 15px 30px rgba(58, 123, 213, 0.5);
            }
          }

          &-outline {
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;

            &:hover {
              background: rgba(255, 255, 255, 0.1);
              border-color: white;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .not-found-body .container {
    .error-code {
      font-size: 8rem;
      letter-spacing: 10px;
    }
    .content-card {
      padding: 30px 20px;
      width: 90%;
      h1 { font-size: 1.5rem; }
    }
  }
}
</style>