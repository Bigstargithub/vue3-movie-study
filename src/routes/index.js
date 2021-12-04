import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'

export default createRouter({
  // Hash, History
  // https://google.com/#/search : Hash,
  // History : 별도 셋팅 가능
  history: createWebHashHistory(),

  // pages
  // ex) https://google.com
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/about',
      component: About
    }
    
  ]
})