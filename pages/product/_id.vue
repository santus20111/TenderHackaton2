<template>
  <div>
    <hack-header></hack-header>
    <div class="page product_layout">
      <div>
        <div class="primary_image">
          <img :src="product.image" class="image">
        </div>
        <!--        <div class="secondary_images">
                  <div class="secondary_image">
                    <div class="secondary_image__placeholder"></div>
                  </div>
                  <div class="secondary_image">
                    <div class="secondary_image__placeholder"></div>
                  </div>
                  <div class="secondary_image">
                    <div class="secondary_image__placeholder"></div>
                  </div>
                </div>-->
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
          {{product.description}}
        </div>

        <div class="offers" v-show="activeInformationTab === 'offers'">
          <div :key="key" class="offer" v-for="(offer, key) in offers">
            <div class="offer__org_name">{{offer.organisationName}}</div>
            <div class="offer__buy_information">
              <div class="offer__price">{{offer.price}}&nbsp;₽ / шт.</div>
              <div class="offer__volume">от&nbsp;{{offer.minVolume}}&nbsp;шт.</div>
            </div>
            <div class="offer__volume_filling">{{offer.currentBuyers}} из {{offer.targetBuyers}} шт.</div>
          </div>
        </div>
      </div>
      <div>
        <div class="active_offer">
          <div class="active_offer__product_name">{{product.name}}</div>

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
              <div class="active_offer__property_value">{{selectedOffer.price}}&nbsp;₽ / шт.</div>
            </div>
            <div class="active_offer__property">
              <div class="active_offer__property_key">Мин. объем:</div>
              <div class="active_offer__property_value">от&nbsp;{{selectedOffer.minVolume}}&nbsp;шт.</div>
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
    <hack-dialog :show.sync="isShowSubmitFormOfferDialog" title="Оформление закупки" v-if="isShowSubmitFormOfferDialog" width="520px">
      <hack-input placeholder="Кол-во" v-model="order.count"/>
      <hack-input placeholder="Email" style="margin-top: 10px" v-model="order.email"/>

      <div slot="footer">
        <div class="submit_form_footer">
          <div class="submit_form_footer_price">
            <div class="submit_form_footer_price__label">К оплате:</div>
            <div class="submit_form_footer_price__price">{{order.count * selectedOffer.price}}&nbsp;₽</div>
          </div>
          <div @click="submitOfferForm" class="button button_primary">Оплатить партию</div>
        </div>
      </div>
    </hack-dialog>


    <hack-dialog :show.sync="isShowSubmittedOfferDialog" title="Заявка успешно оформлена" v-if="isShowSubmittedOfferDialog" width="520px">
      <span class="submitted_form">Когда наберется необходимое количество товаров в закупке, начнется процесс доставки ваших товаров.</span>
    </hack-dialog>
  </div>
</template>

<script>
  import header from "../../components/header";
  import footer from "../../components/footer";
  import Progress from "../../components/progress";
  import Dialog from "../../components/dialog";
  import Input from "../../components/input"

  export default {
    components: {
      'hack-dialog': Dialog,
      'hack-progress': Progress,
      'hack-header': header,
      'hack-footer': footer,
      'hack-input': Input
    },
    head() {
      return {
        link: [
          {rel: 'stylesheet', href: '/product.css'}
        ]
      }
    },
    async asyncData({app, route}) {
      let product = await app.$productApi.getById(+route.params.id)
      let offers = (await app.$offerApi.getByProductId(+route.params.id))
        .filter(offer => offer.targetBuyers > offer.currentBuyers)

      return {
        product: product,
        offers: offers
      }
    },
    data() {
      return {
        order: null,
        activeInformationTab: 'description',
        selectedOffer: null,
        isShowSubmitFormOfferDialog: false,
        isShowSubmittedOfferDialog: false
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
        this.order = {
          count: 0,
          email: null
        }
        this.isShowSubmitFormOfferDialog = true
      },
      async submitOfferForm() {
        await this.$offerApi.submit(this.selectedOffer.id, this.order.count, this.order.email)
        this.$store.commit('addMyOffer', {
          offerId: this.selectedOffer.id,
          count: +this.order.count
        })

        this.isShowSubmitFormOfferDialog = false
        this.isShowSubmittedOfferDialog = true
      }
    }
  }
</script>
