<script setup lang="ts">
interface Testimonial {
  id: string
  company: string
  companyExtra?: string
  quote: string
  project?: string
  person: string
  position: string
  date?: string
  documentNumber?: string
  documentLink?: string
}

const testimonials: Testimonial[] = [
  {
    id: 'megastroy-mo',
    company: 'ООО «МЕГАСТРОЙ-МО»',
    companyExtra: 'группа компаний «Самолет»',
    quote:
        'ООО «МЕГАСТРОЙ-МО» выражает благодарность коллективу ООО «Инженерные Люди» за профессионализм, оперативность и ответственность, проявленные при выполнении электромонтажных работ.',
    project:
        'Работы по расключению силового кабеля 0,4 кВ на объекте «Строительный комплекс с нежилыми помещениями» по адресу: г. Москва, СВАО, р-н «Марьина Роща», ул. Октябрьская, вл. 98. Работы выполнены качественно и в установленные договором сроки.',
    person: 'С. Ю. Мешков',
    position: 'Директор по строительству',
    date: '25.09.2025',
    documentNumber: '01-05/68812',
    documentLink: '/documents/samolet-letter.pdf',
  },
  {
    id: 'mchs',
    company: 'ФГКУ «Государственный центральный аэромобильный спасательный отряд» МЧС России',
    companyExtra: 'Отряд «Центроспас»',
    quote:
        'ФГКУ «Государственный центральный аэромобильный спасательный отряд» МЧС России выражает благодарность коллективу ООО «Инженерные Люди» за профессионализм, ответственность и оперативность, проявленные при выполнении работ по контракту.',
    project:
        'Работы по переключению на резервный источник электроснабжения 0,4 кВ, включая отключение фидеров, прокладку и испытание кабельной линии, фазировку и другие мероприятия. Все работы выполнены в полном соответствии с условиями контракта, техническими требованиями и в установленные сроки.',
    person: 'А. Н. Кресан',
    position: 'Начальник отряда Центроспас',
    date: '01.12.2025',
    documentNumber: 'ИВЭ-121-800',
    documentLink: '/documents/mchs-letter.pdf',
  },
  // сюда можно добавить другие отзывы в том же формате
]
</script>

<template>
  <section class="testimonials" id="testimonials">
    <div class="section-inner">
      <h2 class="section-title">Отзывы</h2>
      <p class="section-text">
        Нам доверяют девелоперы, генподрядчики и владельцы объектов. Ниже — часть
        письменных рекомендаций от наших заказчиков.
      </p>

      <div class="testimonials__list">
        <article
            v-for="item in testimonials"
            :key="item.id"
            class="testimonial-card"
        >
          <header class="testimonial-card__header">
            <div class="testimonial-card__company">
              <div class="testimonial-card__company-name">
                {{ item.company }}
              </div>
              <div v-if="item.companyExtra" class="testimonial-card__company-extra">
                {{ item.companyExtra }}
              </div>
            </div>

            <div class="testimonial-card__meta">
              <div v-if="item.documentNumber" class="testimonial-card__meta-row">
                <span class="testimonial-card__meta-label">Исх. №</span>
                <span class="testimonial-card__meta-value">
                  {{ item.documentNumber }}
                </span>
              </div>
              <div v-if="item.date" class="testimonial-card__meta-row">
                <span class="testimonial-card__meta-label">Дата</span>
                <span class="testimonial-card__meta-value">
                  {{ item.date }}
                </span>
              </div>
            </div>
          </header>

          <p class="testimonial-card__badge">
            Благодарственное письмо
          </p>

          <p class="testimonial-card__quote">
            {{ item.quote }}
          </p>

          <p v-if="item.project" class="testimonial-card__project">
            {{ item.project }}
          </p>

          <footer class="testimonial-card__footer">
            <div class="testimonial-card__person">
              <div class="testimonial-card__person-name">
                {{ item.person }}
              </div>
              <div class="testimonial-card__person-position">
                {{ item.position }}
              </div>
            </div>

            <a
                v-if="item.documentLink"
                class="testimonial-card__link"
                :href="item.documentLink"
                target="_blank"
                rel="noopener"
            >
              Смотреть письмо
            </a>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/shared";

$section-bg: $bg-color;

.testimonials {
  padding: 80px 16px;
  background-color: $section-bg;

  @media (max-width: 768px) {
    padding: 56px 16px;
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
    grid-template-columns: minmax(0, 1fr);
  }
}

.testimonial-card {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 24px 24px 20px;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
  display: flex;
  flex-direction: column;
  gap: 12px;

  height: fit-content;

  @media (max-width: 600px) {
    padding: 20px 18px 18px;
    border-radius: 14px;
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

.testimonial-card__company-extra {
  font-size: 12px;
  color: $font-secondary;
  margin-top: 4px;
}

.testimonial-card__meta {
  text-align: right;
  font-size: 11px;
  color: $font-secondary;
}

.testimonial-card__meta-row + .testimonial-card__meta-row {
  margin-top: 2px;
}

.testimonial-card__meta-label {
  text-transform: uppercase;
  letter-spacing: 0.16em;
}

.testimonial-card__meta-value {
  margin-left: 4px;
}

.testimonial-card__badge {
  display: inline-block;
  margin: 4px 0 0;
  padding: 3px 10px;
  border-radius: 999px;
  background-color: rgba($accent, 0.14);
  color: $accent;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.testimonial-card__quote {
  font-size: 14px;
  line-height: 1.7;
  color: $font-color;
  margin: 4px 0 0;
}

.testimonial-card__project {
  font-size: 13px;
  line-height: 1.7;
  color: $font-color;
  margin: 0;
}

.testimonial-card__footer {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba($font-color, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.testimonial-card__person-name {
  font-size: 14px;
  font-weight: 600;
  color: $font-color;
}

.testimonial-card__person-position {
  font-size: 12px;
  color: $font-secondary;
}

.testimonial-card__link {
  font-size: 13px;
  color: $accent;
  text-decoration: none;
  border-bottom: 1px solid rgba($accent, 0.4);
  padding-bottom: 2px;
  white-space: nowrap;

  &:hover {
    border-color: $accent;
  }
}
</style>
