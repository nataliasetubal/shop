import CartApi from '../../services/cartApi'

export const state = () => ({
  cart: {}
})

export default {
  namespaced: true,
  state,
}