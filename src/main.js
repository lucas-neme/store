import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import ClienteForm from './components/ClienteForm.vue'
import ClienteView from './components/ClienteView.vue'
import FuncionarioForm from './components/FuncionarioForm.vue'
import FuncionarioView from './components/FuncionarioView.vue'
import InventarioForm from './components/InventarioForm.vue'
import InventarioView from './components/InventarioView.vue'
import Footer from './components/Footer.vue'
import Banner from './components/Banner.vue'
import NavigationMenu from './components/NavigationMenu.vue'
import { createTables } from './create-table';
import { clientesRoutes } from './routes/clientes';
import { funcionariosRoutes } from './routes/funcionarios';
import { inventarioRoutes } from './routes/inventario';

// Chama a função createTables para criar as tabelas no banco de dados
createTables();

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/clientes/cadastro', component: ClienteForm },
  { path: '/clientes', component: ClienteView },
  { path: '/funcionarios/cadastro', component: FuncionarioForm },
  { path: '/funcionarios', component: FuncionarioView },
  { path: '/inventario/cadastro', component: InventarioForm },
  { path: '/inventario', component: InventarioView }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
  components: {
    Banner,
    Footer,
    NavigationMenu
  }
}).$mount('#app')
