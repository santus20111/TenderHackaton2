export default class {

  constructor(axios) {
    this.$axios = axios
  }

  async getAll() {
    return (await this.$axios.$get('/offer')).map(offer => {
      offer.productId = offer.product.id
      return offer
    })
  }

  async getById(id) {
    return (await this.getAll()).filter(offer => offer.id === id)[0]
  }

  async getByProductId(id) {
    return (await this.getAll()).filter(offer => offer.productId === id)
  }

  async getTop() {
    let filtered = (await this.getAll()).filter(offer => offer.targetBuyers > offer.currentBuyers)
    if(filtered.length > 4) {
      return filtered.slice(0, 4)
    } else  {
      return filtered
    }
  }

  async submit(offerId, count, email) {
    return await this.$axios.$post(`/offer/${offerId}/submit`, {
      count: count,
      email: email
    })
  }
}
