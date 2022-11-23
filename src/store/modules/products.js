import ProductsApi from '../../services/productsApi'

const state = () => ({
  products: new ProductsApi().getAllProducts()
})

const getters = {
  getAllProducts(state) {
    return state.products
  }
}

// mutations
const mutations = {
  setProducts(state, products) {
    state.products = products
  }
}

// actions
const actions = {
  setProducts({ commit }, products) {
    commit('setProducts', products)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}