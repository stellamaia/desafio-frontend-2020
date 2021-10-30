<template>
  <div id="app" @click="getItemOnCar">
    <b-navbar
      class="navbar-content"
      fixed="top"
      coo
      variant="light"
      type="light"
    >
      <b-navbar-brand tag="h1" class="mb-0" @click="navigateToHome()">
        <span class="mkt">Mkt</span>
        <span class="place">Place</span>
      </b-navbar-brand>

      <p class="products" @click="navigateToHome()">Produtos</p>
      <span class="material-icons car products" @click="navigateToCart()">
        shopping_cart
      </span>
      <b-badge
        @click="navigateToCart()"
        v-if="lenghtItemCarSelected"
        class="car products selected-itens-car"
        variant="light"
        >{{ lenghtItemCarSelected }}</b-badge
      >
    </b-navbar>

    <router-view />
    <div
      class="fluid-container footer"
      style="position: fixed; bottom: 0; width: 100%; padding: 12px"
    >
      <p class="text-center">MktPlace</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      lenghtItemCarSelected:
        JSON.parse(localStorage.getItem("selectedProducts"))?.length || 0,
    };
  },
  methods: {
    getItemOnCar() {
      this.lenghtItemCarSelected =
        JSON.parse(localStorage.getItem("selectedProducts"))?.length || 0;
    },
    navigateToHome() {
      this.$router.push("/");
    },
    navigateToCart() {
      this.$router.push("carPage");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navbar-content {
  box-shadow: 0 0 0.5em rgb(207, 206, 207);
}
.mkt {
}
.place {
  color: purple;
  font-weight: bold;
}
.products {
  color: rgb(133, 133, 133);
  left: 76%;
  top: 10px;
  padding: 0 10px 0 20px;
  position: absolute;
  font-size: 20px;
  cursor: pointer;
  z-index: 999999;
}
.car {
  color: rgb(135, 32, 194);
  padding: 0;
  margin-left: 115px;
  margin-top: 5px;
  cursor: pointer;
}
.selected-itens-car {
  border: 1px solid red !important;
  border-radius: 100% !important;
  padding: 3px !important;
  padding-left: 5px !important;
  padding-right: 5px !important;
  font-size: 10px !important;
  background: red !important;
  color: white !important;
  margin-left: 135px !important;
  margin-top: 10px !important;
}

.mb-0 {
  cursor: pointer;
}
</style>