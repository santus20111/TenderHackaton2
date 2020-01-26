<template>
  <div>
    <hack-header></hack-header>
    <div class="page">
      <div class="main-banner">
        <div>
          <h1 class="main-banner__h1">Совместные закупки</h1>
          <p class="main-banner__text">Подберите самый выгодный вариант по стоимости, срокам и объемам</p>
          <div class="button button_white main-banner__button">Подобрать предложение <img src="/arrow-right.svg" style="margin-left: 10px"></div>
        </div>
        <div class="main-banner__image">
          <img class="image" src="/main-banner-image.svg">
        </div>
      </div>

      <div class="hot-categories">
        <div class="hot-categories__header">
          <div class="hot-categories__title">Категории</div>
          <div class="hot-categories__link_all">См. все</div>
        </div>
        <div class="hot-categories__grid">
          <div :key="key" class="hot-category" v-for="(category, key) in hotCategories">
            <div class="hot-category__image_placeholder"></div>
            <div class="hot-category__name">{{category.name}}</div>
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
            <nuxt-link :to="`/product/${hotProduct.product.id}`">
              <div class="hot-offer__image">
                <img class="image" :src="hotProduct.product.image">
              </div>
            </nuxt-link>
            <div class="hot-offer__name">{{hotProduct.product.name}}</div>
            <div class="hot-offer__price">{{hotProduct.price}}&nbsp;₽ / шт.</div>
            <div class="hot-offer__volume">от&nbsp;{{hotProduct.minVolume}}&nbsp;шт.</div>

            <hack-progress :percent=" hotProduct.currentBuyers/hotProduct.targetBuyers*100">
              {{hotProduct.currentBuyers}} из {{hotProduct.targetBuyers}}
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
    async asyncData({app}) {
      let hotOffers = await app.$offerApi.getTop()

      return {
        hotCategories: app.$categoryApi.getTop(),
        hotProducts: hotOffers
      }
    }
  }
</script>
