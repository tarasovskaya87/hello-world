<script setup lang="ts">
import Carousel from 'primevue/carousel'

interface Project {
  id: string
  name: string
  address: string
  description: string
  images: string[]
}

const projects: Project[] = [
  {
    id: 'teplocentral',
    name: 'МП, Теплоцентраль.',
    address: 'МО, г. Жуковский, ул. Энергетическая д.17',
    description: 'Реконструкция ОРУ 6–10 кВ',
    images: [
      '/images/projects/teplocentral/1.jpg',
      '/images/projects/teplocentral/2.jpg',
      '/images/projects/teplocentral/3.jpg',
      '/images/projects/teplocentral/4.jpg',
    ],
  },
  {
    id: 'rosrezerv',
    name: 'Росрезерв',
    address: 'Москва, Большой Черкасский пер. д.6/7',
    description: 'Монтаж временных сетей',
    images: [
      '/images/projects/rosrezerv/1.jpg',
      '/images/projects/rosrezerv/2.jpg',
      '/images/projects/rosrezerv/3.jpg',
      '/images/projects/rosrezerv/4.jpg',
      '/images/projects/rosrezerv/5.jpg',
    ],
  },
]

const responsiveOptions = [
  {
    breakpoint: '900px',
    numVisible: 1,
    numScroll: 1,
  },
]

// fallback: если картинка не загрузилась — серый прямоугольник
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement | null
  if (target) {
    target.style.display = 'none'
    const parent = target.parentElement
    if (parent) {
      parent.classList.add('project-card__image-item--placeholder')
    }
  }
}

const isDesktop = ref(true)

onMounted(() => {
  const update = () => {
    isDesktop.value = window.innerWidth >= 900
  }

  update()
  window.addEventListener('resize', update)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', update)
  })
})

const scrollToContacts = () => {
  if (!process.client) return
  const el = document.getElementById('contacts')
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section class="projects">
    <div class="section-inner">
      <h2 class="section-title">НАШИ ПРОЕКТЫ</h2>

      <div class="projects__list">
        <article
            v-for="project in projects"
            :key="project.id"
            class="project-card"
        >
          <div class="project-card__top">
            <h3 class="project-card__name">
              {{ project.name }}
            </h3>

            <p class="project-card__address">
              {{ project.address }}
            </p>

            <p class="project-card__description">
              {{ project.description }}
            </p>
          </div>

          <div class="project-card__carousel">
            <Carousel
                :value="project.images"
                :showIndicators="false"
                :num-visible="2"
                :responsive-options="responsiveOptions"
                :show-navigators="isDesktop"
                :show-indicators="!isDesktop"
                circular
                class="project-carousel"
            >
              <template #item="{ data, index }">
                <!-- Обёртка с отступом между картинками -->
                <div
                    class="project-card__image-wrapper"
                    :style="{ paddingRight: index === project.images.length - 1 ? '0' : '12px' }"
                >
                  <div class="project-card__image-item">
                    <img
                        :src="data"
                        :alt="project.name"
                        @error="handleImageError"
                    />
                  </div>
                </div>
              </template>
            </Carousel>

          </div>
        </article>
      </div>

      <button
          type="button"
          class="catalog__cta catalog__cta--mobile"
          @click="scrollToContacts"
      >
        связаться с нами
        <span class="catalog__cta-arrow">→</span>
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/shared";

.projects {
  padding: 80px 16px;

  @media (max-width: 768px) {
    padding: 56px 16px;
  }
}

.projects__list {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    margin-top: 24px;
    gap: 20px;
  }
}

.project-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  padding: 20px 22px 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 600px) {
    padding: 18px 16px 18px;
  }
}

.project-card__top {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.project-card__name {
  @include Montserrat();
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $font-color;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 16px;
  }
}

.project-card__address {
  font-size: 14px;
  color: $font-secondary;
  margin: 0;
}

.project-card__description {
  font-size: 14px;
  color: $font-color;
  margin: 0;
}

/* Карусель снизу */

.project-card__carousel {
  @include Montserrat();
  margin-top: 4px;
}

/* Стилизация карусели PrimeVue под дизайн */

:deep(.project-carousel) {
  .p-carousel-content {
    padding: 0;
  }

  .p-carousel-items-content {
    border-radius: 12px;
    overflow: hidden;
    background: #f3f4f6;
  }

  .p-carousel-indicators {
    display: none;
  }

  .p-carousel-prev,
  .p-carousel-next {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    border: none;
    background-color: #ffffff;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 6px;

    svg {
      width: 16px;
      height: 16px;
      fill: $font-color;
    }

    &:hover {
      background-color: #f3f4f6;
    }
  }

  .p-carousel-container {
    align-items: center;
  }
}

/* отдельный слайд с картинкой */
.project-card__image-item {
  position: relative;
  width: 100%;
  height: 380px;
  background: #e5e7eb;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* отдельный слайд с картинкой */
.project-card__image-wrapper {
  /* именно здесь появляется расстояние между картинками */
  box-sizing: border-box;
}

.project-card__image-item {
  position: relative;
  width: 100%;
  height: 380px;
  border-radius: 16px;   // скругление
  overflow: hidden;      // обрезаем углы по радиусу
  background: #e5e7eb;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* плейсхолдер, если картинка не загрузилась */
.project-card__image-item--placeholder {
  border-radius: 12px;
  background: #d4d7dd;
}


/* плейсхолдер, если картинка не загрузилась */
.project-card__image-item--placeholder {
  background: #d4d7dd;
}

:deep(.p-carousel-indicator-list) {
  li.p-carousel-indicator {
    .p-carousel-indicator-button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgba($accent, 0.25); // inactive
      transition: background-color 0.25s ease;
    }

    &[data-p-active="true"] .p-carousel-indicator-button {
      background-color: $accent !important; // active indicator
    }
  }
}

.catalog__cta--mobile {
  display: none;
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

  @media (max-width: 900px) {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }

  &-arrow {
    font-size: 20px;

  }
}

/* адаптив карусели */
@media (max-width: 900px) {
  :deep(.project-carousel) {
    .p-carousel-prev,
    .p-carousel-next {
      width: 32px;
      height: 32px;
    }
  }

  .catalog__cta--mobile {
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  :deep(.project-carousel) {
    .p-carousel-prev,
    .p-carousel-next {
      display: none; // на мобильных — свайпом
    }
  }
}
</style>
