import ProductsApi from '../../services/productsApi'

const state = () => ({
  products: []
})

const getters = {
  getAllProducts() {
    const products = ProductsApi.getAllProducts()
    return products
  }
}

// actions
const actions = {
  setProducts({ commit }, products) {
    commit('setProducts', products)
  }
}

// mutations
const mutations = {
  setProducts(state, products) {
    state.products = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}