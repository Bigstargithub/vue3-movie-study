import axios from 'axios'
import _uniqBy from 'lodash'

export default {
  namespaced: true, // module이 될 수 있다.
  state: () => ({
    movies: [],
    message: '',
    loading: false
  }), // 취급해야하는 데이터들 (상태)
  getters: {}, // = computed 
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
    }
  }, // = methods! , 변이
  // mutations 에서만 data 변경이 가능
  actions: {
    async searchMovies({ state,commit },payload) {

      try{
        const res = await _fetchMovie({
          ...payload,
          page : 1
        })
        const { Search, totalResults } = res.data
        commit('updateState', {
          movies: [..._uniqBy(Search,'imdbID')]
        })
  
        const total = parseInt(totalResults, 10)
        const pageLength = Math.ceil(total / 10)
  
        // 추가 요청!
        if(pageLength > 1) {
          for(let page = 2; page <= pageLength; page++)
          {
            if(page > (payload.number / 10)) break;
           
            const res = await _fetchMovie({
              ...payload,
              page
            })
            const { Search } = res.data
            commit('updateState', {
              movies: [...state.movies,..._uniqBy(Search,'imdbID')]
            })
          }
        }
      } catch (message) {
        commit('updateState', {
          movies: [],
          message
        })
      }
    }
  } // 비동기로 동작을 한다.
  // commit = mutations
  // payload = searchMovies가 호출될 때 특정한 parameter를 처리하는 매개변수
}

function _fetchMovie(payload) {
  const { title, type, page, year } = payload
  const OMDB_API_KEY = '7035c60c'
  const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
  // console.log(url)

  return new Promise((resolve, reject) => {
    axios.get(url)
    .then(res => {
      if(res.data.Error)
      {
        reject(res.data.Error)
      }
      resolve(res)
    })
    .catch((err) => {
      reject(err.message)
    })
  })
}