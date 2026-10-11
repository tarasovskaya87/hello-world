<script setup lang="ts">

</script>

<template>
<section class="section-padding">
  <div class="section-inner">
    <h2 class="section-title">НАШИ ТЕЛЕГРАМ КАНАЛЫ</h2>
    <div class="testimonial-card">
      <div class="testimonials__list">
        <article>
          <p>
            <component
                is="script"
                async src="https://telegram.org/js/telegram-widget.js?22"
                data-telegram-post="gvozdipixel/106"
                data-width="100%"
                data-color="034680"
            ></component>
          </p>
        </article>

        <article>
          <p>
            <component
                is="script"
                async src="https://telegram.org/js/telegram-widget.js?22"
                data-telegram-post="ooo_il_online/26"
                data-width="100%"
                data-color="034680"
            ></component>
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
@import "@/assets/shared";

.testimonial-card {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);

  padding: 24px 0;

  display: flex;
  flex-direction: column;

  height: fit-content;

  @media (max-width: 600px) {
    padding: 20px 0;

    border-radius: 14px;
  }
}

.testimonials__title {
  @include Montserrat();
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: $font-color;
  margin: 0 0 12px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
}

.testimonials__subtitle {
  font-size: 14px;
  line-height: 1.7;
  color: rgba($font-color, 0.8);
  margin: 0;
}

/* список карточек */
.testimonials__list {
  @include Montserrat();

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 960px) {
    zoom: 0.8;
    gap: 0;
    grid-template-columns: minmax(0, 1fr);
  }
}

.testimonial-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.testimonial-card__company-name {
  font-size: 16px;
  font-weight: 600;
  color: $font-color;
}
</style>