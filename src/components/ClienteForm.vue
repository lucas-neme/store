<template>
  <!-- Formulário Cadastro de Clientes -->
  <h1>Cadastro de Clientes</h1>
  <input v-model="nome" type="text" placeholder="Nome">
  <span v-if="!nomeValido">Inserir um nome válido</span>
  <input v-model="email" type="email" placeholder="Email">
  <span v-if="!emailValido">Inserir um email válido</span>
  <input v-model="endereco" type="text" placeholder="Endereço">
  <input v-model="cpf" type="text" placeholder="CPF">
  <input v-model="telefone" type="text" placeholder="Telefone">
  <button @click="cadastrarCliente">Cadastrar</button>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      email: "",
      endereco: "",
      cpf: "",
      telefone: "",
      nomeValido: true,
      emailValido: true
    };
  },
  methods: {
    cadastrarCliente() {
      // Verifica se o nome e o email são válidos antes de enviar o formulário
      if (this.nome === "") {
        this.nomeValido = false;
      } else {
        this.nomeValido = true;
      }
      if (this.email === "" || !this.email.includes("@")) {
        this.emailValido = false;
      } else {
        this.emailValido = true;
      }
      if (this.nomeValido && this.emailValido) {
        const novoCliente = {
          nome: this.nome,
          email: this.email,
          endereco: this.endereco,
          cpf: this.cpf,
          telefone: this.telefone
        };
        this.$emit("cadastrar-cliente", novoCliente);
        this.nome = "";
        this.email = "";
        this.endereco = "";
        this.cpf = "";
        this.telefone = "";
      }
    }
  }
};
</script>