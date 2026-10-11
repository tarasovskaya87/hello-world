<template>
  <section class="section-padding">
    <div class="section-inner">
      <h2 class="section-title">О НАС</h2>

      <div class="section-text">
        <p>
          «Инженерные Люди» — это профессиональное сообщество единомышленников, специализирующихся на реализации сложных инженерных задач в условиях реальных ограничений.
          Мы объединяем опыт реализации сложных проектов, экспертизу и предлагаем клиентам комплексные и эффективные решения.
        </p>
      </div>

      <div class="about__gallery">
        <div class="about__image about__image--large">

          <img src="/images/about.jpg" alt="" />
        </div>

        <div class="about__bottom-row">
          <div class="about__image">
<!--            <img src="/img/about-2.jpg" alt="Гостиная" />-->
          </div>
          <div class="about__image">
<!--            <img src="/img/about-3.jpg" alt="Обеденная зона" />-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// картинки замените на реальные /img/about-*.jpg
</script>

<style scoped lang="scss">
@import "@/assets/values";
@import "@/assets/shared";

.about {
  padding: 40px 16px 72px;
}

.about__inner {
  max-width: 1120px;
  margin: 0 auto;
}

//.about__title {
//  font-family: 'DrukTextWideTT', Arial, sans-serif;
//  font-size: 48px;
//  font-weight: 500;
//  letter-spacing: 0.5px;
//  text-transform: uppercase;
//
//  color: $font-color;
//  margin-bottom: 28px;
//}

.about__info {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: start;

  color: $font-color;
}

.about__gallery {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.about__image {
  border-radius: 24px;
  overflow: hidden;
  background: #d1d5db;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

.about__image--large {
  height: 480px;

  img {
    height: 100%;
  }
}

.about__bottom-row {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .about {
    padding-bottom: 56px;
  }

  //.about__title {
  //  font-size: 24px;
  //  letter-spacing: 0.14em;
  //}

  .about__image--large {
    height: 260px;
  }
}
</style>
