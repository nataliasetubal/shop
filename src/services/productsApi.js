import api from 'axios'

export default class ProductsApi {
  constructor(httpClient = api) {
    this._httpClient = httpClient
  }


  getAllProduts(){
    this._httpClient.get()
  }


}