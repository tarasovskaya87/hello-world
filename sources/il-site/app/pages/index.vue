<script setup lang="ts">
import FloatingNavbar from '@/components/FloatingNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import AdvantagesSection from '@/components/AdvantagesSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <div class="page">
    <FloatingNavbar />

    <main class="page__content">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="advantages">
        <AdvantagesSection />
      </section>

      <section id="catalog">
        <CatalogSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="partners">
        <PartnersSection />
      </section>

      <section id="testimonial">
        <TestimonialsSection />
      </section>

      <section>
        <TelegramSection />
      </section>

      <section id="contacts">
        <ContactSection />
      </section>
    </main>

    <Toast position="bottom-center" group="bc" />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/shared";

:global(html) {
  scroll-behavior: smooth;

  background: shared.$bg-color;
  margin: 0;
  padding: 0;
}

:global(body) {
  scroll-behavior: smooth;

  background: shared.$bg-color;
  margin: 0;
  padding: 0;
}

.page {
  background-color: shared.$bg-color;
  min-height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #202532;
}

.stub-section {
  padding: 80px 16px;

  &__inner {
    max-width: 1120px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 32px;
    padding: 40px 32px;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);

    h2 {
      font-size: 28px;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    p {
      margin: 0;
      font-size: 16px;
      color: #6b7280;
    }
  }

  &__socials {
    padding-top: 16px;

    display: flex;
    justify-content: center;
    gap: 8px;

    a {
      height: 32px;
      padding: 0 14px;
      border-radius: 999px;
      border: 1px solid #dadde3;
      display: inline-flex;
      align-items: center;
      font-size: 13px;
      color: #4b5563;
      text-decoration: none;
    }
  }
}

@media (max-width: 768px) {
  .stub-section {
    padding: 48px 12px;

    &__inner {
      border-radius: 20px;
      padding: 28px 20px;

      h2 {
        font-size: 22px;
      }

      p {
        font-size: 14px;
      }
    }
  }

  :global(.p-toast) {
    max-width: 100% !important;
    padding: 0 8px !important;
  }
}
</style>
