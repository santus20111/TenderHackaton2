import CategoryApi from "../api/category"
import ProductApi from "../api/product"
import OfferApi from "../api/offer"

export default (ctx, inject) => {
  let categoryApi = new CategoryApi()
  let productApi = new ProductApi(ctx.$axios)
  let offerApi = new OfferApi(ctx.$axios)

  inject('categoryApi', categoryApi)
  inject('offerApi', offerApi)
  inject('productApi', productApi)

}
