<template>
  <div>
    <div class="banner-row">
      <Banner v-for="banner in bannersRow1" :key="banner.id" :banner="banner" />
    </div>
    <div class="banner-row">
      <Banner v-for="banner in bannersRow2" :key="banner.id" :banner="banner" />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
  data() {
    return {
      bannersRow1: [
        {
          id: 1,
          title: 'Cadastro de Clientes',
          image: '/images/banner-clientes.jpg',
          route: '/clientes'
        },
        {
          id: 2,
          title: 'Cadastro de Funcionários',
          image: '/images/banner-funcionarios.jpg',
          route: '/funcionarios'
        },
        {
          id: 3,
          title: 'Cadastro de Inventário',
          image: '/images/banner-inventario.jpg',
          route: '/inventario'
        }
      ],
      bannersRow2: [
        {
          id: 4,
          title: 'Visualização dos Clientes',
          image: '/images/banner-clientes.jpg',
          route: '/clientes'
        },
        {
          id: 5,
          title: 'Visualização dos Funcionários',
          image: '/images/banner-funcionarios.jpg',
          route: '/funcionarios'
        },
        {
          id: 6,
          title: 'Visualização do Inventário',
          image: '/images/banner-inventario.jpg',
          route: '/inventario'
        }
      ]
    }
  },
  components: {
    Banner
  }
}
</script>

<style scoped>
.banner-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
