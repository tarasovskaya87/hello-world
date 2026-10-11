<script setup lang="ts">
const isMenuOpen = ref(false)
const showNavbar = ref(false)

const navItems = [
  { id: 'about', label: 'О нас' },
  { id: 'catalog', label: 'Услуги' },
  { id: 'projects', label: 'Проекты' },
  { id: 'testimonials', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
]

const scrollToSection = (id: string) => {
  if (!process.client) return
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleNavClick = (id: string) => {
  scrollToSection(id)
  isMenuOpen.value = false
}

const scrollToTop = () => {
  if (!process.client) return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

let observer: IntersectionObserver | null = null
let scrollHandler: (() => void) | null = null

onMounted(() => {
  if (!process.client) return

  const heroNav = document.getElementById('hero-nav')

  if ('IntersectionObserver' in window && heroNav) {
    observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          if (entry) {
            showNavbar.value = !entry.isIntersecting
          }
        },
        {
          root: null,
          threshold: 0,
        },
    )

    observer.observe(heroNav)
  } else {
    scrollHandler = () => {
      const target = document.getElementById('hero-nav')
      if (!target) {
        showNavbar.value = true
        return
      }
      const rect = target.getBoundingClientRect()
      const completelyBelow = rect.top >= window.innerHeight
      const completelyAbove = rect.bottom <= 0
      showNavbar.value = completelyBelow || completelyAbove
    }

    window.addEventListener('scroll', scrollHandler, { passive: true })
    scrollHandler()
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
    scrollHandler = null
  }
})
</script>

<template>
  <header class="navbar" :class="{ 'navbar--visible': showNavbar }">
    <!-- 👇 добавили класс по состоянию меню, чтобы управлять layout только в CSS -->
    <div class="navbar__inner" :class="{ 'navbar__inner--open': isMenuOpen }">
      <div class="navbar__left">
        <div class="navbar__logo" @click="scrollToTop">
          <img class="mobile" src="/images/logo.svg" alt="IL">
          <img class="desktop" src="/images/logo-full.svg" alt="IL">
        </div>
      </div>

      <button
          class="navbar__burger"
          type="button"
          aria-label="Открыть меню"
          @click="toggleMenu"
      >
        <span />
        <span />
      </button>

      <nav class="navbar__nav" :class="{ 'navbar__nav--open': isMenuOpen }">
        <a
            v-for="item in navItems"
            :key="item.id"
            href="#"
            class="navbar__link"
            @click.prevent="handleNavClick(item.id)"
        >
          {{ item.label }}
        </a>

        <button class="navbar__cta mobile" type="button" @click="handleNavClick('contacts')">
          Написать нам
          <span class="navbar__cta-arrow">→</span>
        </button>
      </nav>

      <button class="navbar__cta desktop" type="button" @click="handleNavClick('contacts')">
        Написать нам
        <span class="navbar__cta-arrow">→</span>
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/shared";

$bg: #f1f3f6;

.mobile {
  display: none;
}

.navbar {
  position: fixed;
  top: 18px;
  left: 50%;
  transform: translate(-50%, -120%);
  width: calc(100% - 32px);
  max-width: 1160px;
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.navbar--visible {
  transform: translate(-50%, 0);
  opacity: 1;
  pointer-events: auto;
}

.navbar__inner {
  background-color: $bg;
  border-radius: 999px;
  padding: 10px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

.navbar__left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.navbar__logo {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}

.navbar__nav {
  @include Montserrat();
  font-size: 18px;

  display: flex;
  align-items: center;
  gap: 24px;
}

.navbar__link {
  text-decoration: none;
  color: rgba($font-color, 0.7);
  transition: color 0.2s ease;

  &:hover {
    color: $font-color;
  }
}

.navbar__cta {
  @include Montserrat();
  font-size: 18px;

  padding: 10px 24px;

  border: none;
  border-radius: 999px;
  background-color: $accent;
  color: #ffffff;
  white-space: nowrap;

  cursor: pointer;

  align-items: center;
  gap: 6px;

  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: darken($accent, 4%);
  }

  &:active {
    transform: translateY(1px);
  }
}

.navbar__cta-arrow {
  font-size: 18px;
  line-height: 1;
}

.navbar__burger {
  display: none;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: none;
  background: transparent;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  span {
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 999px;
    background-color: #4b5563;
  }
}

@media (max-width: 1080px) {
  .navbar__link,.navbar__cta {
    font-size: 16px;
  }

}

/* ---------- Мобильная версия: layout раскрытого меню ---------- */
@media (max-width: 900px) {
  .navbar {
    width: calc(100% - 20px);

    transform: translate(-50%, 0);
    opacity: 1;
    pointer-events: auto;
  }

  .navbar__link,.navbar__cta {
    font-size: 18px;
  }

  .navbar__logo {
    max-height: 44px;
    max-width: 44px;

    width: 44px;
    height: 44px;

    img {
      max-height: 44px;
      max-width: 44px;

      width: 44px;
      height: 44px;
    }

    .desktop {
      display: none;
    }

    .mobile {
      display: inherit;
    }
  }

  /* на очень маленьких оставляем то же правило:
     кнопка только в раскрытом состоянии */
  .navbar__cta {
    display: none;
  }

  .navbar__inner--open .navbar__cta {
    display: flex;
  }

  .navbar__inner {
    padding: 10px 16px;
  }

  .navbar__burger {
    display: flex;
  }

  /* базовое состояние (меню закрыто) — как раньше */
  .navbar__nav {
    position: absolute;
    left: 0;
    right: 0;
    top: 62px;
    padding: 10px 16px 14px;
    background: $bg;
    border-radius: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.06);

    /* новое: анимация и вертикальный layout в раскрытом виде */
    flex-direction: column;
    align-items: flex-start;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    transition: max-height 0.3s ease, opacity 0.3s ease;
  }

  .navbar__nav--open {
    /* карточка как на референсе */
    max-height: 500px;
    opacity: 1;
    pointer-events: auto;
    padding: 16px 20px 18px;
    gap: 0;
  }

  .navbar__nav--open .navbar__link {
    width: 100%;
    padding: 12px 0;
    border-bottom: 1px solid rgba($font-color, 0.2);

    &:last-child {
      border-bottom: none;
    }
  }

  /* когда меню открыто — вся обёртка больше похожа на «карточку» */
  .navbar__inner--open {
    border-radius: 24px;
  }

  /* большая синяя кнопка внутри раскрытого меню */
  .navbar__cta {
    margin-top: 20px;
  }

  .desktop {
    display: none !important;
  }

  .navbar__inner--open .navbar__cta {
    font-size: 18px;

    padding: 16px;

    width: 100%;
    display: flex;
    justify-content: center;

    border-radius: 999px;

    background-color: $accent;
  }


}

@media (max-width: 640px) {

}
</style>
