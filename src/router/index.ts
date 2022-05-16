import { createRouter, createWebHistory } from 'vue-router'

import Home from '@pages/Home.vue';
import Detail from '@pages/Detail.vue';
import City from '@pages/City.vue';
import List from '@pages/List.vue';
import Search from '@pages/Search.vue';


const routes = [
  { path: '/', name: 'Home' , component: Home },
  { path: '/detail', name: 'Detail', component: Detail },
  { path: '/city', name: 'City', component: City },
  { path: '/list', name: 'List', component: List },
  { path: '/search', name: 'Search', component: Search },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export {
  router
}
