<script setup lang="ts">
interface CatalogSlide {
  id: number
  title: string
  subtitle?: string
  description?: string
  bullets: string[]
  image?: string
}

const slides: CatalogSlide[] = [
  {
    id: 1,
    title: 'Инженерное проектирование',
    subtitle: 'Комплексное проектирование систем и сетей',
    description:
        'Комплексное проектирование включает все разделы по видам сетей и их размещению – наружные и внутренние сети. Проекты систем отопления, вентиляции, водоснабжения, канализации, электроснабжения и сетей связи.',
    bullets: [
      'Электроснабжение (раздел ЭОМ)',
      'Водоснабжение и канализация (раздел ВК)',
      'Отопление, вентиляция и кондиционирование (раздел ОВиК)',
      'Сети связи (раздел СС)',
      'Согласование и экспертиза',
    ],
    image: '/images/services/engineering.jpg',
  },
  {
    id: 2,
    title: 'Монтажные работы',
    subtitle: 'Полный цикл строительно-монтажных работ',
    description:
        'Выполняем электромонтажные, теплотехнические и сантехнические работы под ключ.',
    bullets: [
      'Электромонтажные и пуско-наладочные работы',
      'Строительство ТП, БКТП, КТП',
      'Реконструкция ОРУ, строительство ЗРУ, ГРУ',
      'Монтаж систем отопления',
      'Монтаж систем вентиляции и кондиционирования',
      'Монтаж систем водоснабжения и канализации',
      'Монтаж сетей связи',
    ],
    image: '/images/services/installation-works.png',
  },
  {
    id: 3,
    title: 'Техническое обслуживание',
    subtitle: 'Поддержание систем в рабочем состоянии',
    description:
        'Регулярное обслуживание систем учёта и климатического оборудования для стабильной и безопасной работы.',
    bullets: [
      'Обслуживание систем учёта (АСКУЭ, АСКУВ, АСКУТ)',
      'Сервис кондиционеров',
      'Обслуживание вентиляционных установок',
    ],
    image: '/images/services/service.png',
  },
  {
    id: 4,
    title: 'Другие услуги',
    subtitle: 'Дополнительные сервисы для вашего объекта',
    bullets: [
      'Увеличение электрической мощности',
      'Монтаж электрических зарядных устройств',
      'Техническое обслуживание АСКУЭ',
      'Поставка оборудования',
      'Комплексное обслуживание зданий',
    ],
    image: '/images/services/other-services.png',
  },
  {
    id: 5,
    title: 'ДИЗАЙН',
    subtitle: 'Комплексные услуги дизайна — от консультации до полной комплектации',
    description: `
      <b>1. КОНСУЛЬТАЦИЯ ДИЗАЙНЕРА</b><br>
      Разберем вашу ситуацию, найдем лучшие идеи и план действий. Идеально, если вы сомневаетесь в выборе или хотите получить «второе» мнение.<br>
      <a href="https://wa.me/message/Q37JTCCEXJFKN1" target="_blank" rel="noopener">Связаться с нами</a><br><br>

      <b>2. ПЛАНИРОВОЧНОЕ РЕШЕНИЕ И КОНЦЕПЦИЯ</b><br>
      Создадим несколько вариантов перепланировки, зонирования и общую стилистику вашего пространства. Фундамент будущего дизайна.<br>
      <a href="https://t.me/gvozdipixel/173" target="_blank" rel="noopener">Посмотреть пример</a><br><br>

      <b>3. ПОЛНЫЙ ДИЗАЙН-ПРОЕКТ</b><br>
      Комплексное решение. Вы получите полный пакет чертежей для ремонта, визуал, спецификации, включая чертежи столярных изделий.<br>
      <a href="https://t.me/gvozdipixel/172" target="_blank" rel="noopener">Посмотреть пример</a><br><br>

      <b>4. КОМПЛЕКТАЦИЯ ОБЪЕКТОВ</b><br>
      (Бытовой техникой Asko, Kuppersbusch, Smeg, Teka, Barazza, Vard, Pando и др.)<br>
      <a href="https://t.me/gvozdipixel/174" target="_blank" rel="noopener">Посмотреть пример</a>
    `,
    bullets: [],
    image: '/images/services/design.jpg',
  }

]

const currentIndex = ref(0)
const imageError = ref(false)

const currentSlide = computed(() => slides[currentIndex.value])

const formatIndex = (n: number) => (n < 10 ? `0${n}` : String(n))

const goTo = (index: number) => {
  const len = slides.length
  currentIndex.value = ((index % len) + len) % len
}

const next = () => goTo(currentIndex.value + 1)
const prev = () => goTo(currentIndex.value - 1)

watch(currentIndex, () => {
  imageError.value = false
})

const scrollToContacts = () => {
  if (!process.client) return
  const el = document.getElementById('contacts')
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* свайпы на мобильных */
const touchStartX = ref<number | null>(null)

const onTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.touches[0]?.clientX ?? null
}

const onTouchEnd = (e: TouchEvent) => {
  if (touchStartX.value === null) return
  const endX = e.changedTouches[0]?.clientX ?? touchStartX.value
  const deltaX = endX - touchStartX.value
  const threshold = 40 // px

  if (Math.abs(deltaX) > threshold) {
    if (deltaX < 0) {
      next()
    } else {
      prev()
    }
  }
  touchStartX.value = null
}
</script>

<template>
  <section class="catalog">
    <div class="section-inner">
      <h2 class="section-title">НАШИ УСЛУГИ</h2>

      <div style="display: flex; flex-direction: column; gap: 1rem">
        <div v-for="slide in slides" class="catalog__layout">
          <!-- Левая колонка -->
          <div class="catalog__meta">
            <div class="catalog__index">
            <span class="catalog__index-current">
              {{ formatIndex(slide.id) }}
            </span>
              <span class="catalog__index-divider">/</span>
              <span class="catalog__index-total">
              {{ formatIndex(slides.length) }}
            </span>
            </div>

            <h3 class="catalog__service-title">
              {{ slide.title }}
            </h3>

            <p class="catalog__service-subtitle" v-if="slide.subtitle">
              {{ slide.subtitle }}
            </p>
          </div>

          <!-- Картинка + управление -->
          <div
              class="catalog__image"
              @touchstart="onTouchStart"
              @touchend="onTouchEnd"
          >
            <Transition name="fade-slide" mode="out-in">
              <div :key="slide.id" class="catalog__image-inner">
                <template v-if="slide.image && !imageError">
                  <img
                      :src="slide.image"
                      :alt="slide.title"
                      @error="imageError = true"
                  />
                </template>

                <!-- плейсхолдер, если картинка не загрузилась -->
                <div v-else class="catalog__image-placeholder" />
              </div>
            </Transition>
          </div>

          <!-- Правая колонка с описанием -->
          <div class="catalog__details">
            <Transition name="fade-slide" mode="out-in">
              <div :key="`details-${slide.id}`" class="catalog__details-card">
                <p v-if="slide.description && slide.id != 5" class="catalog__details-description">
                  {{ slide.description }}
                </p>
                <p v-else class="catalog__design-description" v-html="slide.description"></p>

                <ul v-if="slide.id != 5" class="catalog__list">
                  <li v-for="item in slide.bullets" :key="item" class="catalog__list-item">
                    <span class="catalog__list-line"></span>
                    <span class="catalog__list-text">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>

        </div>

        <!-- КНОПКА ТОЛЬКО ДЛЯ МОБИЛЬНЫХ -->
        <button
            type="button"
            class="catalog__cta catalog__cta--mobile"
            @click="scrollToContacts"
        >
          связаться с нами
          <span class="catalog__cta-arrow">→</span>
        </button>
      </div>

<!-- Попросили сделать скрол -->
<!--      <div class="catalog__layout">
        &lt;!&ndash; Левая колонка &ndash;&gt;
        <div class="catalog__meta">
          <div class="catalog__index">
            <span class="catalog__index-current">
              {{ formatIndex(currentIndex + 1) }}
            </span>
            <span class="catalog__index-divider">/</span>
            <span class="catalog__index-total">
              {{ formatIndex(slides.length) }}
            </span>
          </div>

          <div class="catalog__service-label">услуга</div>

          <h3 class="catalog__service-title">
            {{ currentSlide.title }}
          </h3>

          <p class="catalog__service-subtitle" v-if="currentSlide.subtitle">
            {{ currentSlide.subtitle }}
          </p>
        </div>

        &lt;!&ndash; Картинка + управление &ndash;&gt;
        <div
            class="catalog__image"
            @touchstart="onTouchStart"
            @touchend="onTouchEnd"
        >
          <Transition name="fade-slide" mode="out-in">
            <div :key="currentSlide.id" class="catalog__image-inner">
              <template v-if="currentSlide.image && !imageError">
                <img
                    :src="currentSlide.image"
                    :alt="currentSlide.title"
                    @error="imageError = true"
                />
              </template>

              &lt;!&ndash; плейсхолдер, если картинка не загрузилась &ndash;&gt;
              <div v-else class="catalog__image-placeholder" />
            </div>
          </Transition>

          <div class="catalog__controls">
            <div class="catalog__dots">
              <button
                  v-for="(slide, index) in slides"
                  :key="slide.id"
                  type="button"
                  class="catalog__dot"
                  :class="{ 'catalog__dot&#45;&#45;active': index === currentIndex }"
                  @click="goTo(index)"
              >
                <span class="sr-only">Слайд {{ index + 1 }}</span>
              </button>
            </div>

            <div class="catalog__arrows">
              <button type="button" class="catalog__arrow" @click="prev">
                ‹
              </button>
              <button type="button" class="catalog__arrow" @click="next">
                ›
              </button>
            </div>

            <button
                type="button"
                class="catalog__cta catalog__cta&#45;&#45;desktop"
                @click="scrollToContacts"
            >
              связаться с нами
              <span class="catalog__cta-arrow">→</span>
            </button>
          </div>
        </div>

        &lt;!&ndash; Правая колонка с описанием &ndash;&gt;
        <div class="catalog__details">
          <Transition name="fade-slide" mode="out-in">
            <div :key="`details-${currentSlide.id}`" class="catalog__details-card">
              <h4 v-if="currentSlide?.id === 4" class="catalog__details-title">ПРОЧИЕ УСЛУГИ:</h4>
              <h4 v-else class="catalog__details-title">ОСОБЕННОСТИ УСЛУГИ</h4>

              <p v-if="currentSlide.description" class="catalog__details-description">
                {{ currentSlide.description }}
              </p>

              <ul class="catalog__list">
                <li v-for="item in currentSlide.bullets" :key="item" class="catalog__list-item">
                  <span class="catalog__list-line"></span>
                  <span class="catalog__list-text">{{ item }}</span>
                </li>
              </ul>
            </div>
          </Transition>

          &lt;!&ndash; КНОПКА ТОЛЬКО ДЛЯ МОБИЛЬНЫХ &ndash;&gt;
          <button
              type="button"
              class="catalog__cta catalog__cta&#45;&#45;mobile"
              @click="scrollToContacts"
          >
            связаться с нами
            <span class="catalog__cta-arrow">→</span>
          </button>
        </div>

      </div>-->
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/shared";

$accent: shared.$accent;
$font-color: shared.$font-color;
$muted: #8b8f96;
$bg-light: shared.$bg-color;
$border: #e2e4ea;

.catalog {
  padding: 80px 16px;
  background-color: $bg-light;
}

.catalog__header {
  margin-bottom: 24px;
}

.catalog__heading {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: $font-color;
}

.catalog__layout {
  display: grid;
  grid-template-columns: minmax(0, 240px) minmax(0, 1.4fr) minmax(0, 340px);
  gap: 32px;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: minmax(0, 220px) minmax(0, 1.1fr);
    grid-template-areas:
      'meta meta'
      'details details';
  }

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      'meta'
      'details';
  }
}

.catalog__meta {
  @include shared.Montserrat();
  color: $font-color;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 40px;

  @media (max-width: 1024px) {
    grid-area: meta;
    padding-top: 0;
  }
}

.catalog__index {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 16px;
}

.catalog__index-current {
  font-size: 32px;
  font-weight: 700;
  color: $accent;
}

.catalog__index-divider {
  font-size: 24px;
  color: #c4c5c9;
}

.catalog__index-total {
  font-size: 20px;
  color: #c4c5c9;
}

.catalog__service-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: $muted;
  margin-bottom: 8px;
}

.catalog__service-title {
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 8px;
}

.catalog__service-subtitle {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: $muted;
}

.catalog__image {
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 1024px) {
    display: none;
  }
}

.catalog__image-inner {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
}

.catalog__image img {
  display: block;
  width: 100%;
  height: 380px;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: 320px;
  }

  @media (max-width: 768px) {
    height: 260px;
  }
}

.catalog__image-placeholder {
  width: 100%;
  height: 380px;
  border-radius: 12px;
  background: #d4d7dd;

  @media (max-width: 1024px) {
    height: 320px;
  }

  @media (max-width: 768px) {
    height: 260px;
  }
}

.catalog__details {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    grid-area: details;
  }
}

.catalog__details-card {
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid $border;
  padding: 24px 28px;
  color: $font-color;
}

.catalog__details-title {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0 0 12px;
}

.catalog__details-description {
  margin: 0 0 16px;
  font-size: 14px;
  line-height: 1.6;
  color: $muted;
}

.catalog__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.catalog__list-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  color: $font-color;

  & + & {
    margin-top: 8px;
  }
}

.catalog__list-line {
  width: 18px;
  height: 1px;
  margin-top: 12px;
  background-color: $font-color;
  flex-shrink: 0;
}

.catalog__list-text {
  flex: 1;
  line-height: 1.6;
}

/* Управление под картинкой */
.catalog__controls {
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 16px;
  }
}

.catalog__dots {
  display: flex;
  align-items: center;
  gap: 10px;
}

.catalog__dot {
  width: 14px;
  height: 14px;
  border-radius: 999px;
  border: 1px solid $font-color;
  background: transparent;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: transparent;
    transition: background-color 0.2s ease;
  }
}

.catalog__dot--active {
  border-color: $accent;

  &::after {
    background-color: $accent;
  }
}

.catalog__arrows {
  display: flex;
  gap: 8px;
}

.catalog__arrow {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid $font-color;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 1;
  color: $font-color;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: rgba($accent, 0.06);
  }
}

.catalog__cta {
  margin-left: auto;
  border: none;
  background-color: $accent;
  color: #ffffff;
  border-radius: 999px;
  padding: 10px 24px;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s ease, transform 0.1s ease,
  box-shadow 0.1s ease;
  box-shadow: 0 14px 30px rgba(3, 70, 128, 0.25);

  &:hover {
    background-color: darken($accent, 4%);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 8px 18px rgba(3, 70, 128, 0.2);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }
}

.catalog__cta-arrow {
  font-size: 20px;
}

/* анимация карточек и изображений */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.35s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(24px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Две версии кнопок */
.catalog__cta--desktop {
  display: inline-flex;
}

.catalog__cta--mobile {
  display: none;
}

/* На мобильных переставляем кнопку под описание */
@media (max-width: 768px) {
  .catalog__cta--desktop {
    display: none; // скрыть кнопку под картинкой
  }

  .catalog__cta--mobile {
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
  }
}
/* Две версии кнопок */
.catalog__cta--desktop {
  display: inline-flex;
}

.catalog__cta--mobile {
  display: none;
}

/* На мобильных переставляем кнопку под описание */
@media (max-width: 768px) {
  .catalog__cta--desktop {
    display: none; // скрыть кнопку под картинкой
  }

  .catalog__cta--mobile {
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
  }
}

:deep(.catalog__design-description) {
  // базовый стиль, максимально близко к catalog__details-description
  @include shared.Montserrat();
  font-size: 14px;
  line-height: 1.6;

  color: $font-color;

  b {
    display: inline-block;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: $font-color;
    margin-bottom: 4px;
  }

  a {
    color: $accent;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

</style>
