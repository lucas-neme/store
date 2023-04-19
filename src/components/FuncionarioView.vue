<template>
  <div>
    <h1>Funcionários Cadastrados</h1>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data de Nascimento</th>
          <th>Endereço</th>
          <th>Foto</th>
          <th>CPF</th>
          <th>Data de Contratação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="funcionario in funcionarios" :key="funcionario.id">
          <td>{{ funcionario.nome }}</td>
          <td>{{ funcionario.dataNascimento }}</td>
          <td>{{ funcionario.endereco }}</td>
          <td><img :src="funcionario.foto" width="50" height="50" /></td>
          <td>{{ funcionario.cpf }}</td>
          <td>{{ funcionario.dataContratacao }}</td>
        </tr>
      </tbody>
    </table>

    <h1>Cadastro de Funcionários</h1>
    <form>
      <label>Nome:</label>
      <input v-model="nome" type="text" placeholder="Nome">
      <span v-if="!nomeValido">Inserir um nome válido</span>
      <br>

      <label>Data de Nascimento:</label>
      <input v-model="dataNascimento" type="date" placeholder="Data de Nascimento">
      <br>

      <label>Endereço:</label>
      <input v-model="endereco" type="text" placeholder="Endereço">
      <br>

      <label>Foto:</label>
      <input v-on:change="onFotoChange" type="file">
      <br>

      <label>CPF:</label>
      <input v-model="cpf" type="text" placeholder="CPF">
      <br>

      <label>Data de Contratação:</label>
      <input v-model="dataContratacao" type="date" placeholder="Data de Contratação">
      <br>

      <button type="button" @click="cadastrarFuncionario">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      funcionarios: [],

      nome: "",
      nomeValido: true,
      dataNascimento: "",
      endereco: "",
      foto: null,
      cpf: "",
      dataContratacao: ""
    };
  },

  methods: {
    cadastrarFuncionario() {
      if (!this.nome) {
        this.nomeValido = false;
      } else {
        this.nomeValido = true;

        const novoFuncionario = {
          nome: this.nome,
          dataNascimento: this.dataNascimento,
          endereco: this.endereco,
          foto: this.foto,
          cpf: this.cpf,
          dataContratacao: this.dataContratacao
        };

        this.funcionarios.push(novoFuncionario);

        this.nome = "";
        this.dataNascimento = "";
        this.endereco = "";
        this.foto = null;
        this.cpf = "";
        this.dataContratacao = "";
      }
    },

    onFotoChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        this.foto = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
};
</script>
