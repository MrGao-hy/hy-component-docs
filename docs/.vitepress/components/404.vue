<template>
  <div
    class="not-found-body"
    :class="{ 'is-dark': isDark, 'is-light': !isDark }"
  >
    <canvas ref="particleCanvas" class="particle-canvas"></canvas>

    <!-- 暗色：星空背景 -->
    <div v-if="isDark" class="stars-bg"></div>

    <!-- 亮色：云朵装饰 -->
    <div v-else class="clouds-bg">
      <div class="cloud cloud-1"></div>
      <div class="cloud cloud-2"></div>
      <div class="cloud cloud-3"></div>
      <div class="cloud cloud-4"></div>
      <div class="sun"></div>
    </div>

    <div class="container" @mousemove="handleMouseMove">
      <!-- 暗色：轨道装饰 -->
      <div v-if="isDark" class="orbit-container">
        <div class="orbit-ring orbit-ring-1"></div>
        <div class="orbit-ring orbit-ring-2"></div>
        <div class="orbit-ring orbit-ring-3"></div>
        <div class="orbit-planet"></div>
      </div>

      <!-- 亮色：纸张飞机装饰 -->
      <div v-else class="paper-plane-container">
        <div class="paper-plane">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 2L11 13"></path>
            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
          </svg>
        </div>
        <div class="plane-trail"></div>
      </div>

      <div class="error-code-container">
        <div class="error-code" :style="errorTextStyle">
          <span class="digit digit-1">4</span>
          <span class="digit digit-0">0</span>
          <span class="digit digit-4">4</span>
        </div>
        <div class="error-glow"></div>
      </div>

      <div class="content-card" :style="cardStyle">
        <div class="card-glow card-glow-top"></div>
        <div class="card-glow card-glow-bottom"></div>

        <h1 class="title">
          <span class="title-line">{{
            isDark ? "页面迷失在" : "糟糕，页面走丢了"
          }}</span>
          <span class="title-highlight">{{
            isDark ? "星空中" : "云端之上"
          }}</span>
        </h1>

        <p class="description">
          {{
            isDark
              ? "你访问的地址可能已经被删除、重命名，或者由于时空波动暂时无法访问。"
              : "你访问的页面可能已经被移动或删除，或者暂时无法访问。"
          }}
          <br />
          <span class="highlight-text">{{
            isDark
              ? "建议您回到安全的基站重新出发。"
              : "别担心，试试返回首页或上一页吧。"
          }}</span>
        </p>

        <div class="btn-group">
          <button class="btn btn-primary" @click="goHome">
            <svg
              class="btn-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6"></path>
              <polyline points="15 11 12 8 9 11"></polyline>
              <line x1="12" y1="18" x2="12" y2="8"></line>
            </svg>
            <span>返回首页</span>
          </button>
          <button class="btn btn-outline" @click="goBack">
            <svg
              class="btn-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="11 19 3 12 11 5"></polyline>
              <polyline points="23 19 15 12 23 5"></polyline>
            </svg>
            <span>返回上一页</span>
          </button>
        </div>
      </div>

      <!-- 暗色：星星和小行星 -->
      <div v-if="isDark" class="floating-elements">
        <div class="floating-star floating-star-1"></div>
        <div class="floating-star floating-star-2"></div>
        <div class="floating-star floating-star-3"></div>
        <div class="floating-asteroid floating-asteroid-1"></div>
        <div class="floating-asteroid floating-asteroid-2"></div>
      </div>

      <!-- 亮色：小鸟装饰 -->
      <div v-else class="floating-elements light-floats">
        <div class="bird bird-1"></div>
        <div class="bird bird-2"></div>
        <div class="bird bird-3"></div>
      </div>
    </div>

    <div class="noise-overlay"></div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  onUnmounted,
  computed,
  watch,
  type CSSProperties,
} from "vue";
import { useData } from "vitepress";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  brightness: number;
}

const { isDark } = useData();
const particleCanvas = ref<HTMLCanvasElement | null>(null);
const mousePos = ref({ x: 0, y: 0 });
let animationId: number;
let particles: Particle[] = [];
let time = ref(0);

const handleMouseMove = (e: MouseEvent) => {
  mousePos.value = {
    x: (e.clientX - window.innerWidth / 2) / 30,
    y: (e.clientY - window.innerHeight / 2) / 30,
  };
};

const cardStyle = computed<CSSProperties>(() => ({
  transform: `rotateY(${-mousePos.value.x}deg) rotateX(${mousePos.value.y}deg)`,
}));

const errorTextStyle = computed<CSSProperties>(() => ({
  transform: `translateX(${mousePos.value.x * 1.2}px) translateY(${mousePos.value.y * 1.2}px)`,
}));

const initParticles = (canvas: HTMLCanvasElement) => {
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);
  particles = [];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.7 + 0.3,
      brightness: Math.random(),
    });
  }
};

const animate = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  time.value++;
  if (!isDark.value) {
    animationId = requestAnimationFrame(() => animate(ctx, canvas));
    return;
  }

  particles.forEach((p) => {
    p.brightness = (Math.sin(time.value * 0.002 + p.x * 0.01) + 1) / 2;
    ctx.globalAlpha = p.opacity * (0.5 + p.brightness * 0.5);

    const gradient = ctx.createRadialGradient(
      p.x,
      p.y,
      0,
      p.x,
      p.y,
      p.size * 2,
    );
    gradient.addColorStop(0, "#ffffff");
    gradient.addColorStop(0.5, "rgba(0, 210, 255, 0.5)");
    gradient.addColorStop(1, "rgba(0, 210, 255, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
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

const goHome = () => {
  window.location.href = "/";
};

const goBack = () => {
  window.history.back();
};

const handleResize = () => {
  if (particleCanvas.value) {
    initParticles(particleCanvas.value);
  }
};

onMounted(() => {
  const canvas = particleCanvas.value;
  if (canvas) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      initParticles(canvas);
      animate(ctx, canvas);
    }
  }
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700;800&display=swap");

$neon-blue: #00f0ff;
$neon-purple: #bf00ff;

/* ==================== 公共样式 ==================== */
.not-found-body {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  font-family: "Space Mono", monospace;
  display: flex;
  position: relative;
  transition: background 0.6s ease;

  .noise-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
    z-index: 100;
  }

  .particle-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .container {
    z-index: 10;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    perspective: 1200px;
    overflow: hidden;
  }
}

/* ==================== 暗色主题：夜空 ==================== */
.not-found-body.is-dark {
  background: linear-gradient(135deg, #050510 0%, #1a1a3e 50%, #0d0d2b 100%);

  .stars-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      radial-gradient(
        2px 2px at 20px 30px,
        rgba(255, 255, 255, 0.8),
        transparent
      ),
      radial-gradient(
        2px 2px at 40px 70px,
        rgba(255, 255, 255, 0.5),
        transparent
      ),
      radial-gradient(
        1px 1px at 90px 40px,
        rgba(255, 255, 255, 0.6),
        transparent
      ),
      radial-gradient(
        2px 2px at 160px 120px,
        rgba(255, 255, 255, 0.7),
        transparent
      ),
      radial-gradient(
        1px 1px at 230px 80px,
        rgba(255, 255, 255, 0.4),
        transparent
      ),
      radial-gradient(
        2px 2px at 300px 150px,
        rgba(255, 255, 255, 0.8),
        transparent
      ),
      radial-gradient(
        1px 1px at 350px 200px,
        rgba(255, 255, 255, 0.5),
        transparent
      ),
      radial-gradient(
        2px 2px at 420px 60px,
        rgba(255, 255, 255, 0.6),
        transparent
      ),
      radial-gradient(
        1px 1px at 500px 180px,
        rgba(255, 255, 255, 0.7),
        transparent
      ),
      radial-gradient(
        2px 2px at 600px 100px,
        rgba(255, 255, 255, 0.5),
        transparent
      );
    background-repeat: repeat;
    background-size: 650px 250px;
    animation: twinkle 8s ease-in-out infinite;
    z-index: 1;
  }

  .orbit-container {
    position: absolute;
    width: 500px;
    height: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0.3;

    .orbit-ring {
      position: absolute;
      border: 1px solid rgba(0, 210, 255, 0.2);
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform-origin: center;
      &-1 {
        width: 400px;
        height: 400px;
        margin-left: -200px;
        margin-top: -200px;
        animation: orbitRotate1 60s linear infinite;
      }
      &-2 {
        width: 300px;
        height: 300px;
        margin-left: -150px;
        margin-top: -150px;
        animation: orbitRotate2 45s linear infinite;
      }
      &-3 {
        width: 200px;
        height: 200px;
        margin-left: -100px;
        margin-top: -100px;
        animation: orbitRotate3 30s linear infinite;
      }
    }

    .orbit-planet {
      position: absolute;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, $neon-blue, $neon-purple);
      border-radius: 50%;
      top: 50%;
      left: 50%;
      margin-left: -10px;
      margin-top: -210px;
      box-shadow:
        0 0 20px $neon-blue,
        0 0 40px $neon-purple;
      animation: orbitPlanet 20s ease-in-out infinite;
    }
  }

  .error-code-container .error-code {
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      $neon-blue 40%,
      $neon-purple 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: codeGlow 3s ease-in-out infinite;
  }

  .error-code-container .error-glow {
    background: radial-gradient(
      ellipse,
      rgba(0, 240, 255, 0.2) 0%,
      transparent 70%
    );
  }

  .content-card {
    background: rgba(10, 10, 30, 0.6);
    border: 1px solid rgba(0, 240, 255, 0.2);
    box-shadow:
      0 0 60px rgba(0, 240, 255, 0.1),
      0 25px 50px rgba(0, 0, 0, 0.5),
      inset 0 0 60px rgba(0, 240, 255, 0.05);

    .card-glow {
      background: linear-gradient(
        90deg,
        transparent,
        rgba(0, 240, 255, 0.3),
        transparent
      );
    }

    .title .title-highlight {
      background: linear-gradient(90deg, $neon-blue, $neon-purple);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .description .highlight-text {
      color: rgba(0, 240, 255, 0.9);
    }

    .btn-primary {
      background: linear-gradient(135deg, $neon-blue, $neon-purple);
      color: white;
      box-shadow: 0 10px 30px rgba(0, 240, 255, 0.3);

      &:hover {
        box-shadow:
          0 20px 40px rgba(0, 240, 255, 0.4),
          0 0 30px rgba(0, 240, 255, 0.3);
      }
    }

    .btn-outline {
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.3);
      color: #ffffff;

      &:hover {
        background: rgba(0, 240, 255, 0.1);
        border-color: $neon-blue;
        box-shadow: 0 0 30px rgba(0, 240, 255, 0.2);
      }
    }
  }

  .floating-star {
    background: #ffffff;
    box-shadow:
      0 0 10px #ffffff,
      0 0 20px rgba(0, 240, 255, 0.5);
  }
}

/* ==================== 亮色主题：白天 ==================== */
.not-found-body.is-light {
  background: linear-gradient(
    180deg,
    #87ceeb 0%,
    #b0e0f6 30%,
    #e0f0ff 60%,
    #f0f8ff 100%
  );

  .clouds-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;

    .sun {
      position: absolute;
      top: 8%;
      right: 15%;
      width: 80px;
      height: 80px;
      background: radial-gradient(
        circle,
        #ffd700 0%,
        #ffa500 60%,
        transparent 70%
      );
      border-radius: 50%;
      box-shadow:
        0 0 60px rgba(255, 215, 0, 0.4),
        0 0 120px rgba(255, 165, 0, 0.2);
      animation: sunPulse 4s ease-in-out infinite;
    }

    .cloud {
      position: absolute;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

      &::before,
      &::after {
        content: "";
        position: absolute;
        background: inherit;
        border-radius: 50%;
      }

      &-1 {
        width: 160px;
        height: 50px;
        top: 15%;
        left: -5%;
        animation: cloudFloat1 30s linear infinite;
        &::before {
          width: 70px;
          height: 70px;
          top: -35px;
          left: 25px;
        }
        &::after {
          width: 90px;
          height: 80px;
          top: -40px;
          left: 55px;
        }
      }

      &-2 {
        width: 200px;
        height: 55px;
        top: 25%;
        left: 30%;
        animation: cloudFloat2 40s linear infinite;
        opacity: 0.7;
        &::before {
          width: 80px;
          height: 80px;
          top: -40px;
          left: 30px;
        }
        &::after {
          width: 100px;
          height: 90px;
          top: -45px;
          left: 75px;
        }
      }

      &-3 {
        width: 140px;
        height: 45px;
        top: 10%;
        left: 60%;
        animation: cloudFloat3 35s linear infinite;
        opacity: 0.8;
        &::before {
          width: 60px;
          height: 60px;
          top: -30px;
          left: 20px;
        }
        &::after {
          width: 80px;
          height: 70px;
          top: -35px;
          left: 50px;
        }
      }

      &-4 {
        width: 180px;
        height: 48px;
        top: 35%;
        left: 80%;
        animation: cloudFloat1 45s linear infinite reverse;
        opacity: 0.6;
        &::before {
          width: 75px;
          height: 75px;
          top: -38px;
          left: 28px;
        }
        &::after {
          width: 95px;
          height: 85px;
          top: -42px;
          left: 68px;
        }
      }
    }
  }

  .paper-plane-container {
    position: absolute;
    width: 500px;
    height: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0.25;

    .paper-plane {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 40px;
      height: 40px;
      color: #64748b;
      animation: planeFly 12s ease-in-out infinite;
    }

    .plane-trail {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200px;
      height: 2px;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(100, 116, 139, 0.3),
        transparent
      );
      transform-origin: left center;
      animation: trailFade 12s ease-in-out infinite;
    }
  }

  .error-code-container .error-code {
    background: linear-gradient(180deg, #1e293b 0%, #3b82f6 40%, #6366f1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: codeFloat 4s ease-in-out infinite;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  }

  .error-code-container .error-glow {
    background: radial-gradient(
      ellipse,
      rgba(59, 130, 246, 0.15) 0%,
      transparent 70%
    );
  }

  .content-card {
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(148, 163, 184, 0.3);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.08),
      0 2px 8px rgba(0, 0, 0, 0.04);

    .card-glow {
      background: linear-gradient(
        90deg,
        transparent,
        rgba(59, 130, 246, 0.15),
        transparent
      );
    }

    .title {
      color: #1e293b;

      .title-highlight {
        background: linear-gradient(90deg, #3b82f6, #6366f1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .description {
      color: #64748b;

      .highlight-text {
        color: #3b82f6;
      }
    }

    .btn-primary {
      background: linear-gradient(135deg, #3b82f6, #6366f1);
      color: white;
      box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);

      &:hover {
        box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
      }
    }

    .btn-outline {
      background: rgba(255, 255, 255, 0.8);
      border: 2px solid rgba(100, 116, 139, 0.3);
      color: #475569;

      &:hover {
        background: rgba(59, 130, 246, 0.08);
        border-color: #3b82f6;
        box-shadow: 0 4px 14px rgba(59, 130, 246, 0.15);
      }
    }
  }

  .light-floats .bird {
    position: absolute;
    width: 0;
    height: 0;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 12px;
      height: 3px;
      background: #64748b;
      border-radius: 50%;
      top: 0;
    }

    &::before {
      left: 0;
      transform: rotate(-20deg);
      transform-origin: right center;
      animation: birdWing 0.6s ease-in-out infinite;
    }

    &::after {
      left: 10px;
      transform: rotate(20deg);
      transform-origin: left center;
      animation: birdWing 0.6s ease-in-out infinite 0.1s;
    }

    &-1 {
      top: 18%;
      left: 10%;
      animation: birdFly1 18s linear infinite;
    }
    &-2 {
      top: 22%;
      left: 40%;
      animation: birdFly2 22s linear infinite;
    }
    &-3 {
      top: 12%;
      left: 70%;
      animation: birdFly3 25s linear infinite;
    }
  }
}

/* ==================== 公共组件样式 ==================== */
.error-code-container {
  position: relative;
  margin-bottom: 30px;

  .error-code {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(8rem, 20vw, 18rem);
    font-weight: 900;
    letter-spacing: -0.08em;
    pointer-events: none;
    transition: transform 0.15s ease-out;
    user-select: none;

    .digit {
      display: inline-block;
      animation: digitFloat 6s ease-in-out infinite;
      &-1 {
        animation-delay: 0s;
      }
      &-0 {
        animation-delay: 0.2s;
      }
      &-4 {
        animation-delay: 0.4s;
      }
    }
  }

  .error-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 30%;
    filter: blur(60px);
    animation: glowPulse 4s ease-in-out infinite;
  }
}

.content-card {
  position: relative;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 50px 70px;
  border-radius: 30px;
  text-align: center;
  transform-style: preserve-3d;
  transition:
    transform 0.15s ease-out,
    background 0.6s ease,
    border-color 0.6s ease,
    box-shadow 0.6s ease;
  overflow: hidden;

  .card-glow {
    position: absolute;
    width: 200%;
    height: 50px;
    filter: blur(20px);

    &-top {
      top: 0;
      animation: cardGlowTop 3s ease-in-out infinite;
    }
    &-bottom {
      bottom: 0;
      animation: cardGlowBottom 3s ease-in-out infinite 1.5s;
    }
  }

  .title {
    font-size: clamp(1.5rem, 4vw, 3rem);
    margin-bottom: 20px;
    font-weight: 700;
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: color 0.6s ease;

    .title-line {
      animation: fadeInUp 0.8s ease-out;
    }
    .title-highlight {
      animation: fadeInUp 0.8s ease-out 0.2s both;
      -webkit-background-clip: text;
    }
  }

  .description {
    font-size: clamp(0.9rem, 2vw, 1.2rem);
    margin-bottom: 40px;
    line-height: 1.8;
    transition: color 0.6s ease;

    .highlight-text {
      font-weight: 600;
    }
  }

  .btn-group {
    display: flex;
    gap: 25px;
    justify-content: center;
    flex-wrap: wrap;

    .btn {
      position: relative;
      padding: 15px 40px;
      border-radius: 50px;
      cursor: pointer;
      font-weight: 700;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      letter-spacing: 2px;
      font-size: clamp(0.8rem, 1.5vw, 1rem);
      outline: none;
      overflow: hidden;
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: "Space Mono", monospace;

      .btn-icon {
        width: 18px;
        height: 18px;
        transition: transform 0.3s ease;
      }

      &-primary:hover {
        transform: translateY(-5px) scale(1.02);
        .btn-icon {
          transform: scale(1.2);
        }
        &:active {
          transform: translateY(-2px) scale(0.98);
        }
      }

      &-outline:hover {
        transform: translateY(-3px);
        .btn-icon {
          transform: scale(1.1);
        }
      }
    }
  }
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;

  .floating-star {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    &-1 {
      top: 10%;
      left: 15%;
      animation: floatStar1 10s ease-in-out infinite;
    }
    &-2 {
      top: 25%;
      right: 10%;
      animation: floatStar2 12s ease-in-out infinite;
    }
    &-3 {
      bottom: 20%;
      left: 20%;
      animation: floatStar3 15s ease-in-out infinite;
    }
  }

  .floating-asteroid {
    position: absolute;
    width: 30px;
    height: 20px;
    background: linear-gradient(
      135deg,
      rgba(100, 100, 120, 0.3),
      rgba(80, 80, 100, 0.1)
    );
    border-radius: 50% 30% 50% 70%;
    border: 1px solid rgba(150, 150, 180, 0.2);
    &-1 {
      top: 35%;
      left: 5%;
      animation: floatAsteroid1 20s linear infinite;
    }
    &-2 {
      bottom: 30%;
      right: 8%;
      animation: floatAsteroid2 25s linear infinite;
      transform: scale(0.8);
    }
  }
}

/* ==================== 暗色动画 ==================== */
@keyframes twinkle {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes codeGlow {
  0%,
  100% {
    filter: brightness(1) drop-shadow(0 0 60px rgba(0, 240, 255, 0.5));
  }
  50% {
    filter: brightness(1.2) drop-shadow(0 0 80px rgba(0, 240, 255, 0.7));
  }
}

@keyframes orbitRotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes orbitRotate2 {
  from {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
@keyframes orbitRotate3 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes orbitPlanet {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-8px) translateX(5px);
  }
  50% {
    transform: translateY(0) translateX(8px);
  }
  75% {
    transform: translateY(8px) translateX(-5px);
  }
}

/* ==================== 亮色动画 ==================== */
@keyframes sunPulse {
  0%,
  100% {
    box-shadow:
      0 0 60px rgba(255, 215, 0, 0.4),
      0 0 120px rgba(255, 165, 0, 0.2);
    transform: scale(1);
  }
  50% {
    box-shadow:
      0 0 80px rgba(255, 215, 0, 0.5),
      0 0 150px rgba(255, 165, 0, 0.3);
    transform: scale(1.05);
  }
}

@keyframes cloudFloat1 {
  from {
    transform: translateX(-200px);
  }
  to {
    transform: translateX(calc(100vw + 200px));
  }
}
@keyframes cloudFloat2 {
  from {
    transform: translateX(calc(100vw + 200px));
  }
  to {
    transform: translateX(-300px);
  }
}
@keyframes cloudFloat3 {
  from {
    transform: translateX(-250px);
  }
  to {
    transform: translateX(calc(100vw + 250px));
  }
}

@keyframes codeFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes planeFly {
  0% {
    transform: translate(-100px, 50px) rotate(-15deg);
  }
  25% {
    transform: translate(100px, -80px) rotate(-5deg);
  }
  50% {
    transform: translate(200px, 30px) rotate(-20deg);
  }
  75% {
    transform: translate(50px, -60px) rotate(-8deg);
  }
  100% {
    transform: translate(-100px, 50px) rotate(-15deg);
  }
}

@keyframes trailFade {
  0%,
  100% {
    opacity: 0;
    transform: rotate(-15deg) scaleX(0.5);
  }
  25%,
  75% {
    opacity: 1;
    transform: rotate(-15deg) scaleX(1);
  }
}

@keyframes birdFly1 {
  from {
    transform: translateX(-50px);
  }
  to {
    transform: translateX(calc(100vw + 50px));
  }
}
@keyframes birdFly2 {
  from {
    transform: translateX(calc(100vw + 50px));
  }
  to {
    transform: translateX(-80px);
  }
}
@keyframes birdFly3 {
  from {
    transform: translateX(-60px);
  }
  to {
    transform: translateX(calc(100vw + 60px));
  }
}

@keyframes birdWing {
  0%,
  100% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(-40deg);
  }
}

/* ==================== 公共动画 ==================== */
@keyframes digitFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  75% {
    transform: translateY(5px);
  }
}

@keyframes glowPulse {
  0%,
  100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

@keyframes cardGlowTop {
  0%,
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

@keyframes cardGlowBottom {
  0%,
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatStar1 {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(20px, -30px) rotate(90deg);
  }
  50% {
    transform: translate(40px, 0) rotate(180deg);
  }
  75% {
    transform: translate(20px, 30px) rotate(270deg);
  }
}

@keyframes floatStar2 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-30px, 20px) scale(1.5);
  }
}

@keyframes floatStar3 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(50px, -40px) scale(1.2);
    opacity: 1;
  }
}

@keyframes floatAsteroid1 {
  0% {
    transform: translateX(-100px) rotate(0deg);
  }
  100% {
    transform: translateX(calc(100vw + 100px)) rotate(360deg);
  }
}

@keyframes floatAsteroid2 {
  0% {
    transform: translateX(calc(100vw + 100px)) rotate(360deg);
  }
  100% {
    transform: translateX(-100px) rotate(0deg);
  }
}

/* ==================== 响应式 ==================== */
@media (max-width: 768px) {
  .not-found-body .container {
    .orbit-container,
    .paper-plane-container {
      width: 300px;
      height: 300px;
    }

    .content-card {
      padding: 35px 25px;
      margin: 0 15px;

      .title {
        font-size: clamp(1.2rem, 5vw, 2rem);
      }
      .description {
        font-size: 0.9rem;
        margin-bottom: 30px;
      }

      .btn-group {
        gap: 15px;
        .btn {
          padding: 12px 25px;
          font-size: 0.8rem;
          .btn-icon {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .not-found-body .container .content-card {
    padding: 25px 20px;
    border-radius: 20px;

    .btn-group {
      flex-direction: column;
      align-items: center;
      .btn {
        width: 100%;
        justify-content: center;
      }
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .not-found-body {
    .stars-bg,
    .clouds-bg,
    .error-code,
    .orbit-ring,
    .orbit-planet,
    .card-glow,
    .floating-star,
    .floating-asteroid,
    .error-glow,
    .cloud,
    .sun,
    .paper-plane,
    .plane-trail,
    .bird {
      animation: none !important;
    }

    .btn,
    .content-card,
    .error-code-container {
      transition: none;
    }
  }
}
</style>
