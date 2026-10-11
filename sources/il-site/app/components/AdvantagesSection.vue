<template>
  <section class="section-padding">
    <div class="section-inner">
      <h2 class="section-title">ПРЕИМУЩЕСТВА</h2>

      <ul class="advantages__list">

        <li class="advantages__item">
          <div class="advantages__icon">
            <span>✓</span>
          </div>

          <div class="advantages__content">
            <h3 class="advantages__title">Комплексный подход</h3>
            <p class="advantages__text">
              Полный цикл работ — от проектирования, поставки оборудования, монтажных, пуско-наладочных работ до сдачи объекта.
            </p>
          </div>
        </li>

        <li class="advantages__item">
          <div class="advantages__icon">
            <span>✓</span>
          </div>

          <div class="advantages__content">
            <h3 class="advantages__title">Решаем нестандартные задачи</h3>
            <p class="advantages__text">
              Беремся за проекты, где готовые решения не работают и нужно работать «руками с головой».
            </p>
          </div>
        </li>

        <li class="advantages__item">
          <div class="advantages__icon">
            <span>✓</span>
          </div>

          <div class="advantages__content">
            <h3 class="advantages__title">Опыт и практика</h3>
            <p class="advantages__text">
              Наши решения опираются на знания, реальный опыт и проверенных поставщиков.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/assets/values';
@import '@/assets/shared';

.advantages {
  padding: 16px 16px 80px;
}

.advantages__inner {
  max-width: 1120px;
  margin: 0 auto;
}

.advantages__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.advantages__item {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: flex-start;
  gap: 20px;
  padding: 18px 0;

  border-bottom: 1px solid $font-color;

  &:last-child {
    border-bottom: none;
  }
}

.advantages__icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba($accent, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: $accent;
    font-size: 18px;
    font-weight: 700;
  }
}

.advantages__title {
  font-family: 'DrukTextWideTT', Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  color: $font-color;

  margin: 0 0 4px;
}

.advantages__text {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;

  color: $font-color;

  margin: 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .advantages {
    padding-bottom: 60px;
  }

  .advantages__item {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .advantages__icon {
    width: 32px;
    height: 32px;
  }
}
</style>
