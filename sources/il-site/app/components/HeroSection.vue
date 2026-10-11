<script setup lang="ts">
const navItems = [
  { id: 'about', label: 'О нас' },
  { id: 'catalog', label: 'Услуги' },
  { id: 'projects', label: 'Проекты' },
  { id: 'testimonials', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
]

const heroImage = '/images/hero.png'

const imageError = ref(false)

const scrollToSection = (id: string) => {
  if (!process.client) return
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const handleNavClick = (id: string) => {
  scrollToSection(id)
}

const scrollToContacts = () => {
  scrollToSection('contacts')
}

const onImageError = () => {
  imageError.value = true
}
</script>

<template>
  <section class="hero">
    <div class="hero__inner">
      <!-- Верх: логотип + телефоны + соцсети -->
      <header class="hero__header">
        <div class="hero__logo-block">
          <div class="hero__logo">
            <!-- Логотип -->
            <img src="/images/logo-full.svg" alt="IL" />
          </div>

          <!-- Контакты -->
          <div class="hero__contacts">
            <div class="hero__phones">
              <span class="hero__contacts-label">Контакты</span>
              <a href="tel:+79162491988" class="hero__contacts-link">+7 916 249 19 88</a>
              <a href="mailto:info@ooo-il.ru" class="hero__contacts-link">info@ooo-il.ru</a>
            </div>

            <div class="hero__socials">
              <span class="hero__contacts-label">Соц. сети</span>
              <div class="hero__social-icons">
                <a href="https://t.me/ooo_il_online/" target="_blank" rel="noopener">
                  <img src="/images/social/telegram-logo.svg" alt="telegram" />
                </a>
                <a href="https://max.ru/u/f9LHodD0cOIx_hX0la51uwuaVwXxJycAgM5j5ngdRho3ipri5PqVBLoaKRk" target="_blank" rel="noopener">
                  <img src="/images/social/max-logo.png" alt="max" />
                </a>
                <a href="https://wa.me/message/LGRYNBHBUSYVJ1" target="_blank" rel="noopener">
                  <img src="/images/social/whatsapp-logo.png" alt="max" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Левая колонка (текст) -->
      <div class="hero__content">
        <div class="hero__tag">
          работаем с&nbsp;<span>2015</span>
        </div>

        <h1 class="hero__title">
          <span class="hero__title-accent">ИНЖЕНЕРНЫЕ</span>
          РЕШЕНИЯ И ДИЗАЙН
        </h1>

        <p class="section-text">
          Высокое качество, надежность и эстетика в каждой детали. Профессиональный монтаж и гарантия производителя.
        </p>

        <button class="hero__button" type="button" @click="scrollToContacts">
          связаться с нами →
        </button>
      </div>

      <!-- Правая колонка (навигация слева, картинка справа, тянется вверх) -->
      <aside class="hero__right">
        <nav id="hero-nav" class="hero-nav">
          <button
              v-for="item in navItems"
              :key="item.id"
              type="button"
              class="hero-nav__link"
              @click="handleNavClick(item.id)"
          >
            {{ item.label }}
          </button>

          <button
              type="button"
              class="hero-nav__link hero-nav__link--accent"
              @click="handleNavClick('contacts')"
          >
            написать нам
          </button>
        </nav>

        <div class="hero__image">
          <div class="hero__image-inner">
            <img
                v-if="heroImage && !imageError"
                :src="heroImage"
                alt=""
                @error="onImageError"
            />
            <div v-else class="hero__image-placeholder" />
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/shared";

$bg: $bg-color;
$ipad-width: 1080px;
$phone-width: 760px;

.hero {
  padding: 1rem 16px;
  background-color: $bg;
}

/* Общий grid: правая колонка (картинка+навигация) занимает высоту и сверху */
.hero__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "g1 g1 g3"
    "g2 g2 g3"
    "g2 g2 g3";
  column-gap: 40px;
  row-gap: 32px;

  @media (max-width: $ipad-width) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "g1 g1"
      "g2 g3"
      "g2 g3";
  }

  @media (max-width: $phone-width) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto;
    grid-template-areas:
      "g1"
      "g2";
  }
}

.hero__header {
  grid-area: g1;
}

/* верхний левый блок */
.hero__logo-block {
  display: flex;
  align-items: flex-start;
  gap: 28px;

  img {
    width: 280px;
    height: auto;

  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 16px;
  }
}

.hero__contacts {
  @include Montserrat();

  display: flex;
  gap: 32px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
  }
}

.hero__phones,
.hero__socials {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hero__contacts-label {
  color: $font-secondary;

  font-size: 12px;
  letter-spacing: 0.5px;
}

.hero__contacts-link {
  font-size: 14px;
  color: $font-color;
  letter-spacing: 0.5px;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.hero__social-icons {
  display: flex;
  gap: 8px;

  img {
    width: 24px;
  }
}

/* Левая колонка */

.hero__content {
  @include Montserrat();

  grid-area: g2;
  max-width: 560px;
  align-self: center;
}

.hero__tag {
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 999px;
  background-color: rgba($accent, 0.14);
  color: $font-color;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 16px;

  span {
    color: $accent;
    font-weight: 600;
  }
}

.hero__title {
  @include DrukTextWideTTBold();

  font-size: 72px;
  line-height: 1.08;
  font-weight: 800;
  text-transform: uppercase;
  color: $font-color;
  margin: 0 0 24px;

  @media (max-width: 1200px) {
    font-size: 54px;
  }

  @media (max-width: 640px) {
    font-size: 34px;
  }

  @media (max-width: 400px) {
    font-size: 32px;
  }
}

.hero__title-accent {
  color: $accent;
  background: $bg-color;
}

.hero__marketplaces {
  margin-bottom: 3rem;

  .hero__mp-logos {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;

    img {
      max-height: 32px;

      @media (max-width: $ipad-width) {
        max-height: 24px;
      }

      @media (max-width: $phone-width) {
        max-height: 16px;
      }
    }
  }
}

.hero__mp-label {
  margin: 0 0 4px;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba($font-color, 0.6);
}

.hero__button {
  border: none;
  border-radius: 999px;
  padding: 14px 32px;
  background-color: $accent;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 18px 32px rgba(3, 70, 128, 0.35);
  transition: background-color 0.2s ease, transform 0.12s ease,
  box-shadow 0.12s ease;

  &:hover {
    background-color: darken($accent, 4%);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 10px 20px rgba(3, 70, 128, 0.3);
  }

  @media (max-width: 640px) {
    width: 100%;
  }
}

/* Правая колонка */
.hero__right {
  grid-area: g3;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  gap: 24px;

  @media (max-width: 900px) {
    display: none;
    justify-content: flex-start;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
}

/* навигация слева от картинки */
.hero-nav {
  button {
    @include Montserrat();
    font-size: 18px;
    letter-spacing: 0.5px;
    color: $font-color;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  height: fit-content; // критично для IntersectionObserver

  @media (max-width: 640px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.hero-nav__link {
  border: none;
  background: transparent;
  padding: 4px 0;
  font-size: 13px;
  color: $font-color;
  cursor: pointer;
  text-transform: lowercase;
  letter-spacing: 0.12em;
  position: relative;

  &--accent {
    color: $accent !important;

    margin-top: 6px;
    font-weight: 600;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 1px;
    background-color: $accent;
    transition: width 0.2s ease;
  }

  &:hover:before {
    width: 100%;
  }

  @media (max-width: 640px) {
    display: none;
  }
}

/* картинка тянется от верха секции */
.hero__image {
  flex: 1 1 auto;

  height: 800px;
  width: 420px;

  @media (max-width: $ipad-width) {
    display: none;
  }
}

.hero__image-inner {
  height: 100%;
  border-radius: 8px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
}

.hero__image-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: #d1d5db;
}

/* мобильная адаптация */

@media (max-width: 900px) {
  .hero {
    padding-top: 100px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-bottom: 48px;
  }

  .hero__inner {
    row-gap: 24px;
  }

  .hero__image-inner {
    min-height: 260px;
  }
}
</style>
