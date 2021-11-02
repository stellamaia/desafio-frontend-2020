<template>
  <div>
    <div
      style="padding-bottom: 100px"
      v-if="selectedItemCars && selectedItemCars.length > 0"
    >
      <div class="container container-header">
        <b-row>
          <b-col cols="3">
            <h6 class="header">PRODUTO</h6>
          </b-col>
          <b-col cols="3">
            <h6 class="header">QUANTIDADE</h6>
          </b-col>
          <b-col cols="3">
            <h6 class="header">VALOR UNITÁRIO</h6>
          </b-col>
          <b-col cols="3">
            <h6 class="header">TOTAL</h6>
          </b-col>
        </b-row>
      </div>
      <div class="container container-content">
        <b-row
          class="container-content-row"
          v-for="(selectedItemCar, index) in selectedItemCars"
          :key="index"
        >
          <b-col cols="3">
            <div class="delete-item" @click="deleteItemCar(selectedItemCar)">
              <span class="material-icons" @click="navigateToCart()">
                delete
              </span>
            </div>
            <div>
              <h6 class="eletronico">{{ selectedItemCar.category }}</h6>
            </div>
            <div>
              <h5 class="info">{{ selectedItemCar.name }}</h5>
            </div>
          </b-col>

          <b-col cols="3">
            <label for="sb-input"></label>
            N/A
          </b-col>

          <b-col>
            <h6>
              R${{ selectedItemCar.price.toLocaleString("pt-BR") }} à vista
            </h6>
            <p>
              ou 10x R${{
                (selectedItemCar.price / 10).toLocaleString("pt-BR")
              }}
            </p>
          </b-col>

          <b-col>
            <h6>N/A</h6>
            <p>N/A</p>
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col lg="6" md="6"> <b-col lg="3"> </b-col></b-col>
          <b-col lg="6" md="6">
            <b-row>
              <b-col>
                <h6 class="ml-5">TOTAL À VISTA</h6>
              </b-col>

              <b-col>
                <h4>R${{ sumTotal().toLocaleString("pt-BR") }}</h4>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h6 class="ml-5">TOTAL PARCELADO</h6>
              </b-col>

              <b-col>
                <h5>
                  em atė 10x R$ R${{
                    (sumTotal() / 10).toLocaleString("pt-BR")
                  }}
                </h5>
                <small
                  >(Total R${{ sumTotal().toLocaleString("pt-BR") }})</small
                >
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="item-car mt-5 text-center">
          <b-col lg="6" md="6">
            <b-col lg="6" @click="clearCar">
              <span class="material-icons clear-car" @click="navigateToCart()">
                delete </span
              >Limpar carrinho
            </b-col>
            <b-col cols="6"> </b-col>
          </b-col>

          <b-col lg="3" md="3">
            <b-button class="continue-paying mt-2" @click="navigateToHome()"
              >Continuar comprando</b-button
            >
          </b-col>

          <b-col lg="3" md="3">
            <b-button
              class="payed mt-2"
              type="submit"
              variant="primary"
              @click="navigateToCheckout()"
              >Concluir compra</b-button
            >
          </b-col>
        </b-row>
      </div>
    </div>
    <div
      class="container-fluid"
      v-else
      style="padding-top: 80px; padding-left: 40px; font-size: 30px"
    >
      <h1>Carrinho de compras vazio!</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: null,
      selectedItemCars: [],
    };
  },
  created() {
    this.getSelectedItemCars();
  },
  methods: {
    getSelectedItemCars() {
      this.selectedItemCars = JSON.parse(
        localStorage.getItem("selectedProducts")
      );
    },
    deleteItemCar(selectedItemCar) {
      this.selectedItemCars.splice(
        this.selectedItemCars.indexOf(selectedItemCar),
        1
      );
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(this.selectedItemCars)
      );
    },
    clearCar() {
      this.selectedItemCars = [];
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(this.selectedItemCars)
      );
    },
    sumTotal() {
      let valueSumed = 0;
      this.selectedItemCars.forEach((selectedItemCar) => {
        valueSumed = selectedItemCar.price + valueSumed;
      });
      return valueSumed;
    },
    navigateToHome() {
      this.$router.push("/");
    },
    navigateToCheckout() {
      this.$router.push("/formPage");
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 100px;
  width: 100%;
  height: 100%;
  font-family:'Palanquin';
}
.container-content {
  margin-top: 40px;
}
.container-content-row {
  border-bottom: solid 2px rgb(187, 185, 185);
  padding-top: 30px;
  padding-bottom: 30px;
}
.header {
  font-weight: bolder;
  word-break: break-all;
}
.eletronico {
  font-weight: bolder;
  font-size: 15px;
  color: blueviolet;
}
.info {
  color: rgb(158, 157, 159);
  font-size: 17px;
}
.contador {
}

.item-car {
  border-top: solid 2px rgb(187, 185, 185);
  padding-top: 30px;
}
.delete-item {
  position: absolute;
  margin-left: -40px;
  margin-top: 20px;
  cursor: pointer;
}
.clear-car {
  position: absolute;
  margin-left: -30px;
  margin-top: -1px;
  cursor: pointer;
}
.text-center{
  cursor: pointer;
}
.continue-paying {
  padding: 15px;
  padding-left: 16px;
  padding-right: 16px;
  background: grey;
  border: 0;
  border-radius: 2px;
  width: 100%;
}
.payed {
  width: 100%;
  padding: 15px;
  padding-left: 16px;
  padding-right: 16px;
  background: #a716a7;
  border: 0;
  border-radius: 2px;
}
.container-header{
  font-family:'Palanquin';
}
</style>