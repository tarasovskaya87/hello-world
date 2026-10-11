<template>
  <section class="hero">
    <div class="section-inner">
      <div class="hero__content">
        <div class="hero__tag">РАБОТАЕМ С 2025</div>

        <h1 class="hero__title">
          <span class="hero__title-accent">ИНЖЕНЕРНЫЕ</span>
          РЕШЕНИЯ И ДИЗАЙН
        </h1>

        <p class="hero__text">
          Высокое качество, надежность и эстетика в каждой детали. Профессиональный монтаж и гарантия производителя.
        </p>

        <button class="hero__button" type="button" @click="scrollToCalculator">
          СВЯЗАТЬСЯ С НАМИ
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToCalculator = () => {
  if (!process.client) return
  const el = document.getElementById('calculator')
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped lang="scss">
@import "@/assets/shared";

$dark: #141b2b;

.hero {
  padding: 80px 16px 60px;

  @media (min-width: 1024px) {
    padding: 120px 16px 80px;
  }
}

.hero__inner {
  max-width: 1120px;
  margin: 0 auto;
}

.hero__content {
  max-width: 540px;
}

.hero__tag {
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 999px;
  background-color: rgba($accent, 0.14);
  color: $accent;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.hero__title {
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: 52px;
  line-height: 1.06;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: $dark;
  margin: 0 0 24px;

  @media (min-width: 1200px) {
    font-size: 64px;
  }

  @media (max-width: 640px) {
    font-size: 40px;
  }
}

.hero__title-accent {
  color: $accent;
}

.hero__text {
  max-width: 480px;
  font-size: 15px;
  line-height: 1.6;
  color: #6b7280;
  margin-bottom: 16px;
}

.hero__location {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #4b5563;
  margin-bottom: 28px;
}

.hero__location-icon {
  font-size: 16px;
}

.hero__button {
  border: none;
  border-radius: 999px;
  padding: 14px 32px;
  background-color: $accent;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 16px 30px rgba(25, 179, 165, 0.35);
  transition: background-color 0.2s ease, transform 0.12s ease,
  box-shadow 0.12s ease;

  &:hover {
    background-color: darken($accent, 5%);
    transform: translateY(-1px);
    box-shadow: 0 20px 38px rgba(25, 179, 165, 0.4);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 8px 16px rgba(25, 179, 165, 0.3);
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 72px;
    padding-bottom: 48px;
  }

  .hero__content {
    max-width: 100%;
  }

  .hero__text {
    font-size: 14px;
  }

  .hero__button {
    width: 100%;
    justify-content: center;
    display: inline-flex;
    text-align: center;
  }
}
</style>
