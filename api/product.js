export default class {
  constructor(axios) {
    this.$axios = axios
  }

  async getAll() {
    return await this.$axios.$get('/products')
  }

  async getById(id) {
    return (await this.getAll()).filter(product => product.id === id)[0]
  }
}
