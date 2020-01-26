<template>
  <div>
    <hack-header></hack-header>
    <div class="page product_layout">
      <div>
        <div class="primary_image">
          <div class="primary_image__placeholder"></div>
        </div>
        <div class="secondary_images">
          <div class="secondary_image">
            <div class="secondary_image__placeholder"></div>
          </div>
          <div class="secondary_image">
            <div class="secondary_image__placeholder"></div>
          </div>
          <div class="secondary_image">
            <div class="secondary_image__placeholder"></div>
          </div>
        </div>
        <div class="information_tabs">
          <div
            :class="{'information_tabs__tab': true,  'information_tabs__tab_active': activeInformationTab === 'description'}"
            @click="changeInformationTab('description')">Описание
          </div>
          <div
            :class="{'information_tabs__tab': true,  'information_tabs__tab_active': activeInformationTab === 'offers'}"
            @click="changeInformationTab('offers')">Предложения
          </div>
        </div>

        <div class="description" v-show="activeInformationTab === 'description'">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

        <div class="offers" v-show="activeInformationTab === 'offers'">
          <div :key="key" class="offer" v-for="(offer, key) in offers">
            <div class="offer__org_name">{{offer.organisationName}}</div>
            <div class="offer__buy_information">
              <div class="offer__price">{{offer.price}}</div>
              <div class="offer__volume">{{offer.minVolume}}</div>
            </div>
            <div class="offer__volume_filling">{{offer.currentBuyers}} из {{offer.targetBuyers}} шт.</div>
          </div>
        </div>
      </div>
      <div>
        <div class="active_offer">
          <div class="active_offer__product_name">Название товара</div>

          <div class="active_offer__properties" v-show="selectedOffer === null">
            <div class="active_offer__property">
              <div class="active_offer__property_key">Кол-во предложений:</div>
              <div class="active_offer__property_value">{{offers.length}}</div>
            </div>
          </div>


          <div class="active_offer__properties" v-if="selectedOffer !== null">
            <div class="active_offer__property">
              <div class="active_offer__property_key">Организатор:</div>
              <div class="active_offer__property_value">{{selectedOffer.organisationName}}</div>
            </div>
            <div class="active_offer__property">
              <div class="active_offer__property_key">Стоимость:</div>
              <div class="active_offer__property_value">{{selectedOffer.price}}</div>
            </div>
            <div class="active_offer__property">
              <div class="active_offer__property_key">Мин. объем:</div>
              <div class="active_offer__property_value">{{selectedOffer.minVolume}}</div>
            </div>
            <div class="active_offer__property">
              <div class="active_offer__property_key">Готовность:</div>
              <div class="active_offer__property_value">{{selectedOffer.currentBuyers}} из {{selectedOffer.targetBuyers}} шт.</div>
            </div>
            <div class="active_offer__property">
              <div class="active_offer__property_key">Дата поставки:</div>
              <div class="active_offer__property_value">{{selectedOffer.deliveryDate}}</div>
            </div>
          </div>

          <div @click="calculateOffer" class="button button_primary active_offer__button" v-show="selectedOffer === null">Подобрать предложение</div>
          <div @click="openSubmitOfferForm" class="button button_primary active_offer__button" v-show="selectedOffer !== null">Оформить закупку</div>
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
          {rel: 'stylesheet', href: '/product.css'}
        ]
      }
    },
    data() {
      return {
        activeInformationTab: 'description',
        selectedOffer: null,
        offers: [
          {
            organisationName: 'ООО “Поставщик”',
            price: '12 990 ₽ / шт.',
            minVolume: 'от 35 шт.',
            currentBuyers: 12000,
            targetBuyers: 15000,
            deliveryDate: '30 января'
          },
          {
            organisationName: 'ООО “Поставщик”',
            price: '12 990 ₽ / шт.',
            minVolume: 'от 35 шт.',
            currentBuyers: 12000,
            targetBuyers: 15000,
            deliveryDate: '30 января'
          },
          {
            organisationName: 'ООО “Поставщик”',
            price: '12 990 ₽ / шт.',
            minVolume: 'от 35 шт.',
            currentBuyers: 12000,
            targetBuyers: 15000,
            deliveryDate: '30 января'
          }
        ]
      }
    },
    methods: {
      calculateOffer() {
        this.selectedOffer = this.offers[0]
      },
      changeInformationTab(tabName) {
        this.activeInformationTab = tabName
      },
      openSubmitOfferForm() {

      }
    }
  }
</script>
