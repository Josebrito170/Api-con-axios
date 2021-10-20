import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Inicio from '../views/Inicio.vue'
import Editar from '../views/Editar.vue'
import Nuevo from '../views/Nuevo.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: Editar
  },
  {
  path: '/nuevo',
  name: 'Nuevo',
  component: Nuevo
}
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
