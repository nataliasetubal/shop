import { createStore, createLogger } from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

const enviroment = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    cart,
    products
  },
  strict: enviroment,
  plugins: enviroment ? [createLogger()] : []
})