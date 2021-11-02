<template>
  <div id="app" @click="getItemOnCar">
    <div class="fake-navbar"></div>
    <b-navbar class="container navbar-content" fixed="top" coo>
      <b-navbar-brand tag="h1" class="mb-0" @click="navigateToHome()">
        <span class="mkt">Mkt</span>
        <span class="place">Place</span>
      </b-navbar-brand>

      <p class="products" @click="navigateToHome()">Produtos</p>
      <span class="material-icons car" @click="navigateToCart()">
        shopping_cart
      </span>
      <b-badge
        @click="navigateToCart()"
        v-if="lenghtItemCarSelected"
        class="car selected-itens-car"
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
font-family:'Palanquin';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navbar-content {
  background-color: #fff !important;
}
.fake-navbar {
  height: 64px;
  width: 100%;
  position: fixed;
  z-index: 9;
  background: white;
  top: 0;
}
.mkt{
  color: rgb(170, 170, 170);
   font-weight: bold;
  font-family:'Palanquin';
}
.place {
  color: purple;
  font-weight: bold;
  font-family:'Palanquin';
}
.products {
  font-family:'Palanquin';
  font-weight: bold;
  color: rgb(133, 133, 133);
  top: 10px;
  font-size: 20px;
  cursor: pointer;
  z-index: 999999;
  position: absolute;
  right: 80px;
}
.car {
  color: rgb(135, 32, 194);
  padding: 0;
  margin-left: 115px;
  cursor: pointer;
  position: absolute;
  right: 30px;
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
  position: absolute;
  right: 10px;
}

.mb-0 {
  cursor: pointer;
  
}
.footer{
font-family:'Palanquin';
}
</style>