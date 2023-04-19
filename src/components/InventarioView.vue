<template>
  <!-- Formulário Cadastro de Funcionários -->
  <h1>Cadastro de Funcionários</h1>
  <form @submit.prevent="cadastrarFuncionario">
    <div>
      <label for="nome">Nome:</label>
      <input id="nome" v-model="nome" type="text" placeholder="Nome" />
    </div>
    <div>
      <label for="dataNascimento">Data de Nascimento:</label>
      <input
        id="dataNascimento"
        v-model="dataNascimento"
        type="date"
        placeholder="Data de Nascimento"
      />
    </div>
    <div>
      <label for="endereco">Endereço:</label>
      <input
        id="endereco"
        v-model="endereco"
        type="text"
        placeholder="Endereço"
      />
    </div>
    <div>
      <label for="foto">Foto:</label>
      <input id="foto" v-on:change="onFotoChange" type="file" />
    </div>
    <div>
      <label for="cpf">CPF:</label>
      <input id="cpf" v-model="cpf" type="text" placeholder="CPF" />
    </div>
    <div>
      <label for="dataContratacao">Data de Contratação:</label>
      <input
        id="dataContratacao"
        v-model="dataContratacao"
        type="date"
        placeholder="Data de Contratação"
      />
    </div>
    <button type="submit">Cadastrar</button>
    <button @click="verFuncionarios">Ver Funcionários</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nome: "",
      dataNascimento: "",
      endereco: "",
      foto: "",
      cpf: "",
      dataContratacao: "",
    };
  },
  methods: {
    cadastrarFuncionario() {
      // Enviar requisição HTTP para cadastrar o funcionário
      axios
        .post("/api/funcionarios", {
          nome: this.nome,
          dataNascimento: this.dataNascimento,
          endereco: this.endereco,
          foto: this.foto,
          cpf: this.cpf,
          dataContratacao: this.dataContratacao,
        })
        .then((response) => {
          console.log("Funcionário cadastrado com sucesso!");
          // Redirecionar para a página de visualização dos funcionários
          this.$router.push("/funcionarios");
        })
        .catch((error) => {
          console.error(error);
        });
    },
    verFuncionarios() {
      this.$router.push("/funcionarios/view");
    },
    onFotoChange(event) {
      // Lógica para lidar com a mudança de arquivo da foto
      // Pode ser implementada aqui
    },
  },
  computed: {
    nomeValido() {
      return this.nome.length > 0;
    },
  },
};
</script>

<style>
</style>
