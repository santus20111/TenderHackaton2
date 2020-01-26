export const state = () => ({
  myOffers: []
})

export const getters = {
  getMyOffers: state => {
    return state.myOffers
  }
}

export const mutations = {
  addMyOffer(state, submitForm) {
    let filteredOffers = state.myOffers.filter(offer => offer.offerId === submitForm.offerId)

    let offer = null;
    if (filteredOffers.length > 0) {
      offer = filteredOffers[0]
      offer.count += submitForm.count
    } else {
      state.myOffers.push({
        offerId: submitForm.offerId,
        count: submitForm.count
      })
    }
  }
}
