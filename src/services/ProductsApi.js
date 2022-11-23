const BASEURL = 'https://fakestoreapi.com/products'

export default class ProductsApi {
  constructor(httpClient = this.$axios) {
    this._httpClient = httpClient
    this._httpClient.setBaseUrl(BASEURL)
  }
  async getAllProducts() {
    try {
      const response = await this._httpClient.get()
      return response
    } catch (error) {
      throw new UnexpectedError();
    }
  }
}