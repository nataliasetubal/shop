import api from 'axios'
const BASEURL = 'https://fakestoreapi.com/products'

export default class CartApi {
  constructor(httpClient = api) {
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