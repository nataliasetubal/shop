import api from 'axios'

export default class CartApi {
  constructor(httpClient = api) {
    this._httpClient = httpClient
  }


  createCart(){
    this._httpClient.create()
  }

}