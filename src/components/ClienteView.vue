<template>
  <div>
    <h1>Clientes</h1>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in clientes" :key="cliente.id">
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.email }}</td>
          <td>{{ cliente.telefone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ClienteView',
  data() {
    return {
      clientes: []
    }
  },
  created() {
    this.carregarClientes()
  },
  methods: {
    carregarClientes() {
      axios.get('/clientes')
        .then(response => {
          this.clientes = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
