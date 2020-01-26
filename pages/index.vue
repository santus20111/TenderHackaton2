<template>
  <div>
    <hack-header></hack-header>
    <div class="page">
      <div class="main-banner">
        <div>
          <h1 class="main-banner__h1">Совместные закупки</h1>
          <p class="main-banner__text">Рыба текст</p>
          <div class="button button_white main-banner__button">Подобрать предложение -></div>
        </div>
        <div class="main-banner__placeholder"></div>
      </div>

      <div class="hot-categories">
        <div class="hot-categories__header">
          <div class="hot-categories__title">Категории</div>
          <div class="hot-categories__link_all">См. все</div>
        </div>
        <div class="hot-categories__grid">
          <div class="hot-category">
            <div class="hot-category__image_placeholder"></div>
            <div class="hot-category__name">Электроника</div>
          </div>
          <div class="hot-category">
            <div class="hot-category__image_placeholder"></div>
            <div class="hot-category__name">Электроника</div>
          </div>
          <div class="hot-category">
            <div class="hot-category__image_placeholder"></div>
            <div class="hot-category__name">Электроника</div>
          </div>
          <div class="hot-category">
            <div class="hot-category__image_placeholder"></div>
            <div class="hot-category__name">Электроника</div>
          </div>
          <div class="hot-category">
            <div class="hot-category__image_placeholder"></div>
            <div class="hot-category__name">Электроника</div>
          </div>
          <div class="hot-category">
            <div class="hot-category__image_placeholder"></div>
            <div class="hot-category__name">Электроника</div>
          </div>
          <div class="hot-category">
            <div class="hot-category__image_placeholder"></div>
            <div class="hot-category__name">Электроника</div>
          </div>
        </div>
      </div>


      <div class="hot-offers">
        <div class="hot-offers__header">
          <div class="hot-offers__title">Самые горячие предложения <img src="/hot.svg" style="margin-left: 12px"></div>
          <div class="hot-offers__link_all">См. все</div>
        </div>
        <div class="hot-offers__grid">
          <div :key="key" class="hot-offer" v-for="(hotProduct, key) in hotProducts">
            <nuxt-link to="/product"><div class="hot-offer__image_placeholder"></div></nuxt-link>
            <div class="hot-offer__name">{{hotProduct.name}}</div>
            <div class="hot-offer__price">{{hotProduct.price}}</div>
            <div class="hot-offer__volume">{{hotProduct.volume}}</div>

            <hack-progress :percent=" hotProduct.buyers/hotProduct.total*100">
              {{hotProduct.buyers}} из {{hotProduct.total}}
            </hack-progress>
          </div>
        </div>
      </div>

    </div>
    <hack-footer></hack-footer>
  </div>
</template>

<script>
  import header from "../components/header";
  import footer from "../components/footer";
  import Progress from "../components/progress";

  export default {
    components: {
      'hack-progress': Progress,
      'hack-header': header,
      'hack-footer': footer
    },
    head() {
      return {
        link: [
          {rel: 'stylesheet', href: '/index.css'}
        ]
      }
    },
    data() {
      return {
        hotProducts: [{
          name: 'Бумага',
          price: '12 990 ₽ / шт.',
          volume: 'от 10 шт.',
          buyers: 3500,
          total: 5000
        },
          {
            name: 'Бумага',
            price: '12 990 ₽ / шт.',
            volume: 'от 10 шт.',
            buyers: 3500,
            total: 5000
          },
          {
            name: 'Бумага',
            price: '12 990 ₽ / шт.',
            volume: 'от 10 шт.',
            buyers: 3500,
            total: 5000
          },
          {
            name: 'Бумага',
            price: '12 990 ₽ / шт.',
            volume: 'от 10 шт.',
            buyers: 3500,
            total: 5000
          }
        ]
      }
    }
  }
</script>
