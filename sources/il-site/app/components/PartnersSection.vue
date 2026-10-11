<script setup lang="ts">

</script>

<template>
  <section class="section-padding">
    <div class="section-inner">
      <div class="hero__marketplaces">
         <p class="hero__mp-label">НАШИ ЗАКАЗЧИКИ:</p>
        <div class="hero__mp-logos">
          <a href="https://samolet.ru/" target="_blank">
            <img src="/images/partners/samolet-mono.png" alt="Самолёт">
          </a>

          <a href="https://www.mr-group.ru/" target="_blank">
            <img src="/images/partners/mrgroup.png" alt="MR Group">
          </a>

          <a href="https://www.bork.ru/" target="_blank">
            <img src="/images/partners/bork.png" alt="BORK">
          </a>

          <a href="https://www.fodd.ru/" target="_blank">
            <img src="/images/partners/fodd.png" alt="Фодд">
          </a>

          <a href="https://hutton.ru/" target="_blank">
            <img src="/images/partners/hutton-mono.png" alt="Hutton">
          </a>
        </div>

        <div class="hero__mp-logos" style="margin-top: 1rem;">
          <a href="https://mchs.gov.ru/" target="_blank">
            <img src="/images/partners/mchs.png" alt="МЧС" style="max-height: 64px;">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/shared";

$ipad-width: 1080px;
$phone-width: 760px;

.section-padding {
  padding: 0 16px 0 !important;
}

.hero__marketplaces {
  .hero__mp-label {
    @include shared.Montserrat();

    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: shared.$font-secondary;
  }

  .hero__mp-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;

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
</style>