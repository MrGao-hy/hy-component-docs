<template>
    <canvas
        ref="canvas"
        style="position: fixed; left: 0; top: 0; pointer-events: none; z-index: 999999"
    ></canvas>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    const canvas = ref(null);
    let animationFrameId = null;
    let particles = [];
    let circles = [];
    const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

    // 设置画布大小
    function setCanvasSize() {
        const canvasEl = canvas.value;
        canvasEl.width = window.innerWidth * 2;
        canvasEl.height = window.innerHeight * 2;
        canvasEl.style.width = window.innerWidth + 'px';
        canvasEl.style.height = window.innerHeight + 'px';
        canvasEl.getContext('2d').scale(2, 2);
    }

    // 创建粒子
    function createParticle(x, y) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 3;
        const radius = 4 + Math.random() * 8;
        const color = colors[Math.floor(Math.random() * colors.length)];

        return {
            x,
            y,
            radius,
            color,
            speedX: Math.cos(angle) * speed,
            speedY: Math.sin(angle) * speed,
            life: 100 + Math.random() * 100, // 生命周期
            currentLife: 0,
            draw(ctx) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            },
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.currentLife++;
                this.radius *= 0.98; // 逐渐缩小

                // 根据生命周期调整透明度
                const progress = this.currentLife / this.life;
                if (progress > 0.5) {
                    this.radius *= 0.95;
                }

                return this.currentLife < this.life;
            },
        };
    }

    // 创建圆形扩散效果
    function createCircle(x, y) {
        const radius = 5 + Math.random() * 10;
        const color = '#FFF';

        return {
            x,
            y,
            radius,
            color,
            maxRadius: 80 + Math.random() * 80,
            lineWidth: 6,
            alpha: 0.5,
            speed: 1 + Math.random(),
            draw(ctx) {
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.lineWidth = this.lineWidth;
                ctx.strokeStyle = this.color;
                ctx.stroke();
                ctx.globalAlpha = 1;
            },
            update() {
                this.radius += this.speed * 2;
                this.alpha *= 0.97;
                this.lineWidth *= 0.98;
                return this.radius < this.maxRadius && this.alpha > 0.01;
            },
        };
    }

    // 创建随机圆形
    function createRandomCircle(x, y) {
        const radius = 1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const maxRadius = 50 + Math.random() * 40;

        return {
            x,
            y,
            radius,
            color,
            maxRadius,
            alpha: 1,
            speed: 1 + Math.random(),
            draw(ctx) {
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.globalAlpha = 1;
            },
            update() {
                this.radius += this.speed * 3;
                this.alpha *= 0.96;
                return this.radius < this.maxRadius && this.alpha > 0.01;
            },
        };
    }

    // 动画循环（按需启动：无活动粒子时自动停止，点击时再启动）
    function animate() {
        const canvasEl = canvas.value;
        if (!canvasEl || document.hidden) {
            animationFrameId = null;
            return;
        }
        const ctx = canvasEl.getContext('2d');
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

        // 更新并绘制粒子
        particles = particles.filter((particle) => {
            particle.update();
            particle.draw(ctx);
            return particle.currentLife < particle.life;
        });

        // 更新并绘制圆形
        circles = circles.filter((circle) => {
            const shouldKeep = circle.update();
            circle.draw(ctx);
            return shouldKeep;
        });

        // 没有活动粒子时停止循环，避免空转浪费 CPU
        if (particles.length === 0 && circles.length === 0) {
            animationFrameId = null;
            return;
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    function startAnimate() {
        if (!animationFrameId) {
            animationFrameId = requestAnimationFrame(animate);
        }
    }

    // 处理点击事件
    function handleClick(e) {
        const x = e.clientX || e.touches[0].clientX;
        const y = e.clientY || e.touches[0].clientY;

        // 创建粒子
        for (let i = 0; i < 20; i++) {
            particles.push(createParticle(x, y));
        }

        // 创建圆形扩散效果
        circles.push(createCircle(x, y));

        // 创建随机圆形
        circles.push(createRandomCircle(x, y));

        startAnimate();
    }

    function handleVisibilityChange() {
        // 页面恢复可见且有活动粒子时重新启动循环
        if (!document.hidden && (particles.length > 0 || circles.length > 0)) {
            startAnimate();
        }
    }

    onMounted(() => {
        setCanvasSize();
        const tapEvent = 'ontouchstart' in window ? 'touchstart' : 'mousedown';
        window.addEventListener(tapEvent, handleClick);
        window.addEventListener('resize', setCanvasSize);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        // 初始无粒子，不启动动画循环
    });

    onUnmounted(() => {
        const tapEvent = 'ontouchstart' in window ? 'touchstart' : 'mousedown';
        window.removeEventListener(tapEvent, handleClick);
        window.removeEventListener('resize', setCanvasSize);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    });
</script>
