<template>
  <!-- Formulário Cadastro de Funcionários -->
  <h1>Cadastro de Funcionários</h1>
  <input v-model="nome" type="text" placeholder="Nome">
  <span v-if="!nomeValido">Inserir um nome válido</span>
  <input v-model="dataNascimento" type="date" placeholder="Data de Nascimento">
  <input v-model="endereco" type="text" placeholder="Endereço">
  <input v-on="foto" type="file" @change="onFotoChange">
  <input v-model="cpf" type="text" placeholder="CPF">
  <input v-model="dataContratacao" type="date" placeholder="Data de Contratação">
  <button @click="verFuncionarios">Ver Funcionários</button>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      nome: '',
      dataNascimento: '',
      endereco: '',
      foto: '',
      cpf: '',
      dataContratacao: ''
    }
  },
  methods: {
    cadastrarFuncionario() {
      // enviar requisição HTTP para cadastrar o funcionário
      // utilizar o objeto `this` para obter os dados do formulário
      axios.post('/api/funcionarios', {
        nome: this.nome,
        dataNascimento: this.dataNascimento,
        endereco: this.endereco,
        foto: this.foto,
        cpf: this.cpf,
        dataContratacao: this.dataContratacao
      })
        .then(response => {
          console.log('Funcionário cadastrado com sucesso!')
          // redirecionar para a página de visualização dos funcionários
          this.$router.push('/funcionarios')
        })
        .catch(error => {
          console.error(error)
        })
    },
    verFuncionarios() {
      this.$router.push('/funcionarios/view');
    },
    onFotoChange(event) {
      // Lógica para lidar com a mudança de arquivo da foto
      // pode ser implementada aqui
    },
  },
  computed: {
    nomeValido () {
      return this.nome.length > 0
    }
  }
}
</script>

<style>

</style>
