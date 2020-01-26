<template>
  <div>
    <hack-header></hack-header>
    <div class="page">
      <div class="hot-offers">
        <div class="hot-offers__header">
          <div class="hot-offers__title">Мои закупки</div>
        </div>
        <div class="hot-offers__grid">
          <div :key="key" class="hot-offer" v-for="(hotProduct, key) in offers">
            <nuxt-link :to="`/product/${hotProduct.product.id}`">
              <div class="hot-offer__image">
                <img class="image" :src="hotProduct.product.image"/>
              </div>
            </nuxt-link>
            <div class="hot-offer__name">{{hotProduct.product.name}}</div>
            <div class="hot-offer__price">{{hotProduct.price}}&nbsp;₽ / шт.</div>
            <div class="hot-offer__volume">от&nbsp;{{hotProduct.minVolume}}&nbsp;шт.</div>

            <hack-progress :percent=" hotProduct.currentBuyers/hotProduct.targetBuyers*100" v-if="hotProduct.currentBuyers < hotProduct.targetBuyers">
              {{hotProduct.currentBuyers}} из {{hotProduct.targetBuyers}}
            </hack-progress>
            <div v-else class="delivery_progress">Доставляется</div>
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
        offers: []
      }
    },
    mounted() {
      let startTimer = () => {
        setTimeout(async () => {
          let offers = []

          for(let savedOffer of this.$store.getters.getMyOffers) {
            offers.push(await this.$offerApi.getById(savedOffer.offerId))
          }

          if (offers.length === 0) {
            startTimer();
          } else {
            this.offers = offers
          }
        }, 500)
      }

      startTimer();
    }
  }
</script>

<style scoped>
  .hot-offers {
    margin-top: 45px;
  }

  .hot-offers__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .hot-offers__title {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #2B333F;
  }

  .hot-offers__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }


  .hot-offer {
    display: flex;
    flex-direction: column;
  }

  .hot-offer__image {
    width: 230px;
    height: 160px;
  }

  .hot-offer__name {
    margin-top: 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #2B333F;
  }

  .hot-offer__price {
    margin-top: 16px;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #2B333F;
  }

  .delivery_progress {
    height: 26px;
    border-radius: 20px;
    padding-top: 6px;
    padding-bottom: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f9eb;
    color: #67c23a;

    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }
</style>
