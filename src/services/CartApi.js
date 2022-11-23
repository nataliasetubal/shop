const BASEURL = 'https://fakestoreapi.com/carts'

export default class CartApi {
  constructor(httpClient = this.$axios) {
    this._httpClient = httpClient
    this._httpClient.setBaseUrl(BASEURL)
  }


  async getCart(id) {
    try {
      const response = await this._httpClient.get(id)
      return response
    } catch (error) {
      throw new UnexpectedError();
    }
  }

}