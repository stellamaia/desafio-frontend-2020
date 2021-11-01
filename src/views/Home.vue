<template>
  <div>
    <div class="home-page">
      <b-carousel
        class="carousel-fade"
        id="mainCarousel"
        :interval="4000"
        indicators="indicators"
      >
        <b-carousel-slide style="height: 300px">
          <div class="titulo">
            <h5 class="titulo1">Notebooks</h5>
            <h6 class="titulo2">As melhores ofertas</h6>
          </div>
        </b-carousel-slide>
        <b-carousel-slide style="height: 300px">
          <div class="titulo">
            <h5 class="titulo1">Notebooks</h5>
            <h6 class="titulo2">Saldão total</h6>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div>
      <b-form-radio-group
        v-model="selected"
        class="mb-3"
        value-field="item"
        text-field="name"
        disabled-field="notEnabled"
      ></b-form-radio-group>
    </div>

    <b-container class="cards-wrapper">
      <div class="principal">
        <b-row>
          <b-col class="text-center" cols="12" lg="6">
            <h5 class="text">Encontre seu produto</h5>
            <br />
          </b-col>

          <b-col cols="12" lg="6">
            <b-row>
              <b-col cols="12">
                <b-form-input
                  id="input-2"
                  v-model="search"
                  placeholder="Pesquisar..."
                  required
                ></b-form-input>
              </b-col>
              <button class="pesquisa__botao">
                <span class="material-icons search"> search </span>
              </button>
            </b-row>
          </b-col>
        </b-row>
      </div>

      <b-row class="justify-content-md-center">
        <b-col
          cols
          lg="4"
          sm="12"
          md="6"
          v-for="dataProduct in filteredProducts"
          :key="dataProduct.id"
          ><b-card
            class="card-content"
            title="Eletrônicos"
            :img-src="dataProduct.imageUrl"
            img-alt="Image"
            img-top
          >
            <h6 class="info">{{ dataProduct.name }}</h6>
            <b-card-text>
              {{ dataProduct.description.slice(0, 93) }}...<a href="#"
                >[veja mais]</a
              >
            </b-card-text>
            <h4 class="valor">
              R${{ dataProduct.price.toLocaleString("pt-BR") }}
            </h4>
          </b-card>
          <div class="adicionar">
            <button class="adicionar__carrinho" @click="setToList(dataProduct)">
              adicionar ao carrinho
            </button>
          </div>
          <br />
          <br />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProducts:
        JSON.parse(localStorage.getItem("selectedProducts")) || [],
      search: "",
      selected: null,
      dataProducts: null,
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      fetch(
        "https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json"
      )
        .then((response) => response.json())
        .then((response) => (this.dataProducts = response));
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },

    setToList(dataProduct) {
      this.selectedProducts.push(dataProduct);
      this.setItemOnCar();
    },

    setItemOnCar() {
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(this.selectedProducts)
      );
    },

    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  computed: {
    filteredProducts() {
      return this.dataProducts?.filter((dataProduct) => {
        return dataProduct.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
};
</script>


<style>
.home-page {
  margin-top: 60px;
}
.cards-wrapper {
  margin-top: 80px;
  margin-bottom: 80px;
}
.titulo1 {
  font-size: 40px;
  font-weight: bolder;
  position: absolute;
  bottom: 120px;
  right: 10px;
}
.titulo2 {
  font-size: 20px;
  font-weight: bolder;
  position: absolute;
  bottom: 100px;
  right: 10px;
}

.img-fluid .w-100 .d-block {
  height: 100% !important;
  width: 80% !important;
}

.input {
  padding: 40px 0 0 0;
}
.principal {
  box-shadow: 0 0 0.5em rgb(207, 206, 207);
  margin-bottom: 20px;
  padding: 40px 20px 30px 20px;
}
.text {
  margin: 5px 0 0 0;
}

.pesquisa__botao {
  border: 0;
  background-color: #7f1ca7;
  width: 40px;
  height: 38px;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
  z-index: 999;
  position: absolute;
  right: 15px;
}
.search {
  color: white;
  padding: 5px 3px 0 4px;
}
.card {
  box-shadow: 0 0 0.5em rgb(207, 206, 207);
}
.card-content {
  border-bottom: 0;
}
.card-content .card-title {
  color: blueviolet !important;
  font-size: 12px;
  font-weight: bolder;
}
.card-content img {
  height: 280px !important;
}
.info {
  font-size: 13px;
  font-weight: bolder;
}
.card-content p.card-text {
  color: rgb(172, 172, 172);
  font-size: 15px;
}
.fluid-container.footer {
  background: rgb(192, 191, 191);
}
.fluid-container.footer > *:last-child {
  margin-bottom: 0px;
  color: rgb(114, 111, 111);
  font-weight: bolder;
  height: 30px;
}
#mainCarousel .carousel-control-prev-icon,
.carousel-control-next-icon {
  background-image: none;
  background-size: 100%, 100%;
  border: 1px solid black;
  border-radius: 50%;
  height: 100px;
  outline: black;
  width: 100px;
}
.carousel-indicators li {
  background-color: transparent;
  border-radius: 50%;
  height: 6px;
  margin: 0 20px;
  opacity: 1;
  padding: 3px;
  position: relative;
  width: 6px;
}
.carousel-indicators li.active::after {
  border: 3px solid rgb(157, 39, 211);
  border-radius: 50%;
  bottom: -7px;
  content: "";
  left: -7px;
  padding: 10px;
  position: absolute;
  right: -7px;
  top: -7px;
}
.carousel-indicators li.active {
  background-color: rgb(157, 39, 211);
}
.carousel-indicators li {
  background-color: transparent;
}
.carousel-indicators li::after {
  border: 3px solid grey;
  border-radius: 50%;
  bottom: -7px;
  content: "";
  left: -7px;
  padding: 10px;
  position: absolute;
  right: -7px;
  top: -7px;
}

.carousel-item {
  background: linear-gradient(
    -300deg,
    rgb(120, 51, 167) 37%,
    rgba(132, 15, 155, 0.496) 100%
  );
}

.carousel-indicators {
  top: 320px;
}
</style>
