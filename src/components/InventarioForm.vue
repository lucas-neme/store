<template>
  <!-- Formulário de cadastro de inventário -->
  <h1>Cadastro de Itens</h1>
  <form @submit.prevent="cadastrarItem">
    <input v-model="nome" type="text" placeholder="Nome do Item" required>
    <input v-model.number="quantidade" type="number" placeholder="Quantidade" min="1" required>
    <input v-model.number="preco" type="number" placeholder="Preço" min="0" step="0.01">
    <button type="submit">Cadastrar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      quantidade: null,
      preco: null,
    }
  },
  methods: {
    async cadastrarItem() {
      if (!this.quantidade || this.quantidade < 1) {
        alert('A quantidade precisa ser um número positivo maior do que zero');
        return;
      }
      if (this.preco && this.preco < 0) {
        alert('O preço precisa ser um número positivo');
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/inventario', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: this.nome,
            quantidade: this.quantidade,
            preco: this.preco,
          }),
        });
        if (response.ok) {
          this.nome = '';
          this.quantidade = null;
          this.preco = null;
          alert('Item cadastrado com sucesso!');
        } else {
          alert('Erro ao cadastrar item!');
        }
      } catch (error) {
        console.error(error);
        alert('Erro ao cadastrar item!');
      }
    },
  },
}
</script>
