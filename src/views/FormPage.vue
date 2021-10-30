<template>
  <div class="container formul">
    <div class="parte1">
      <b-form-group id="input-group-2" label="Name*" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Email*" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="CPF*" label-for="input-2">
        <b-form-input id="input-2" v-model="form.cpf" required></b-form-input>
      </b-form-group>

      <b-row>
        <b-col cols="6">
          <b-form-group
            id="input-group-2"
            label="Data de nascimento*"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.date"
              required
              placeholder="dd/mm/yyyy"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group
            id="input-group-2"
            label="Telefone*"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.tel"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </div>

    <div class="parte2">
      <b-form-group id="input-group-2" label="CEP*" label-for="input-2">
        <b-form-input id="input-2" v-model="form.cep" required></b-form-input>
      </b-form-group>
      <b-row>
        <b-col cols="9">
          <b-form-group
            id="input-group-2"
            label="Endereço*"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.address"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="3">
          <b-form-group id="input-group-2" label="Número*" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.adressNumber"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="6">
          <b-form-group
            id="input-group-2"
            label="Complemento*"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.addressPlus"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="input-group-2" label="Bairro*" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.neighborhood"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="9">
          <b-form-group id="input-group-2" label="Cidade*" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.city"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="3">
          <b-form-group id="input-group-2" label="Estado*" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.state"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form class="botao" @submit="onSubmit" v-if="show">
            <b-button type="submit" variant="primary">Concluir Compra</b-button>
          </b-form>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style>
.formul {
  padding: 200px 0 0 130px;
  height: 100%;
  display: flex;
  grid-gap: 2rem;

  width: 100%;
}
.carpage {
  height: 100%;
  width: 100%;
}
.btn-primary {
  width: 60%;
  border-radius: 0;
  font-weight: bolder;
  background-color: rgb(91, 22, 174);
  left: 37%;
  position: absolute;
}
</style>
<script>
export default {
  data() {
    return {
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
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert("Em construção");
    },
  },
};
</script>