import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'
import NotFound from './NotFound'

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
      path: '/movie/:i',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path : '/:notFound(.*)', //이름은 중요하지 않다! 정규식이 중요한거임.
      component: NotFound
    }
  ]
})