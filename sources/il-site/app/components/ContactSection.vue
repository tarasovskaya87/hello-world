<script setup lang="ts">
const toast = useToast();

const address = 'г. Москва, ул. Коломенская, д.21, к.3';

const copyAddress = (event: any) => {
  event.preventDefault();
  event.stopPropagation();

  navigator.clipboard.writeText(address);

  toast.add({ severity: "secondary", summary: "Адрес скопирован", group: 'bc' })
}
</script>

<template>
  <section class="contacts">
    <div class="contacts__inner">
      <div class="contacts__top-word">ИНЖЕНЕРНЫЕ ЛЮДИ</div>

      <div class="contacts__columns">
        <div class="contacts__col">
          <h3 class="contacts__heading">Телефон</h3>
          <p class="contacts__value">
            <a href="tel:+79162491988">+7 916 249 19 88</a>
          </p>
        </div>

        <div class="contacts__col">
          <h3 class="contacts__heading">Адрес</h3>
          <p class="contacts__value">
            <a href="" @click="copyAddress">{{ address }}</a>
          </p>
        </div>

        <div class="contacts__col">
          <h3 class="contacts__heading">E-mail</h3>
          <p class="contacts__value">
            <a href="mailto:info@ooo-il.ru">info@ooo-il.ru</a>
          </p>
        </div>

        <div class="contacts__col">
          <h3 class="contacts__heading">Наши социальные сети</h3>
          <div class="contacts__socials">
            <a href="https://t.me/ooo_il_online/" target="_blank" rel="noopener">
              <span>Telegram</span>
            </a>
            <a href="https://t.me/gvozdipixel/" target="_blank" rel="noopener">
              <span>Telegram&nbsp;(Дизайн)</span>
            </a>

            <a href="https://max.ru/u/f9LHodD0cOIx_hX0la51uwuaVwXxJycAgM5j5ngdRho3ipri5PqVBLoaKRk" target="_blank" rel="noopener">
              <span>Max</span>
            </a>
            <a href="https://wa.me/message/LGRYNBHBUSYVJ1" target="_blank" rel="noopener">
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div class="contacts__bottom">
        <p class="contacts__copy">© 2025 ООО «Инженерные Люди»</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/shared";

$border: #dadde3;

.contacts {
  padding: 72px 16px 40px;
  background-color: shared.$bg-color;
}

.contacts__inner {
  max-width: 1120px;
  margin: 0 auto;
}

.contacts__top-word {
  @include shared.DrukTextWideTTBold();
  font-size: 72px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px #3a3a3a;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    font-size: 54px;
  }

  @media (max-width: 600px) {
    font-size: 28px;
    margin-bottom: 28px;
  }
}

.contacts__columns {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

.contacts__heading {
  font-family: Montserrat, Arial, sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.14em;
  text-transform: capitalize;

  margin: 0 0 10px;
}

.contacts__value {
  font-family: "DrukTextWideTT", Arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.6;
  color: #3a3a3a;

  margin: 0;

  a {
    color: #3a3a3a;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.contacts__socials {
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }

  a {
    height: 32px;
    padding: 0 14px;
    border-radius: 999px;
    border: 1px solid $border;
    display: inline-flex;
    align-items: center;
    font-size: 13px;
    color: #4b5563;
    text-decoration: none;

    &:hover {
      background-color: #f3f4f6;
    }
  }
}

.contacts__bottom {
  @include shared.Montserrat();
  font-size: 13px;
  color: shared.$font-secondary;

  border-top: 1px solid $border;
  padding-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;

  .contacts__copy {
    margin: 0;
  }
}

@media (max-width: 768px) {
  .contacts {
    padding-top: 52px;
  }

  .contacts__bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
