<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/clientes">Clientes</router-link></li>
      <li><router-link to="/funcionarios">Funcionários</router-link></li>
      <li><router-link to="/inventario">Inventário</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationMenu'
}
</script>

<style>
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #333;
  height: 50px;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-left: 20px;
}

a {
  color: #fff;
  text-decoration: none;
}
</style>
