import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchItem: '',
      items: [{
        id: 1,
        employeeName: 'admin',
        username: 'admin',
        password: 'admin',
        inTime: null, 
        outTime: null,
        salary: 100,
      },
      {
        id: 1,
        employeeName: 'khanh',
        username: 'khanh',
        password: 123,
        inTime: null, 
        outTime: null,
        salary: 100,
      },
      {
        id: 1,
        employeeName: 'khanh',
        username: 'khanh',
        password: 123,
        inTime: null, 
        outTime: null,
        salary: 100,
      }
      ],
      filteredItems: [],
      paginatedItems: [],
      selectedItems: [],
      pagination: {
        range: 5,
        currnetPage: 1,
        itemPerPage: 8,
        items: [],
        filteredItems: [],
      }
  },
  getters: {

  },
  mutations: {
    SELECT_PAGE(state, payload) {
      state.data = payload;
    },
    SET_DATA(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    async getData({ commit }) {
      try {
        const response = await axios.get('url')
        commit('SET_DATA', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async selectPage({ commit }, pageId) {
      try {
        const response = await axios.get(`url?${pageId}`)
        commit('SELECT_PAGE', response.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {

  }
})