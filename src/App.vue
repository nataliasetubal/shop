<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <h2>Products</h2>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("store", ["products"]),
  },

  mounted() {
  },
  methods: {},
};
</script>
