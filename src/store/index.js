import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);
const _ = require("lodash");

export default new Vuex.Store({
  state: {
    optionItems: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    searchItem: "",
    items: [
      {
        id: 1,
        employeeName: "admin",
        username: "admin",
        password: "admin",
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: "khanh",
        username: "khanh",
        password: 123,
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: "khanh",
        username: "khanh",
        password: 123,
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: "khanh",
        username: "khanh",
        password: 123,
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: "khanh",
        username: "khanh",
        password: 123,
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: "khanh",
        username: "khanh",
        password: 123,
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: "khanh",
        username: "khanh",
        password: 123,
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: "khanh",
        username: "khanh",
        password: 123,
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: "khanh",
        username: "khanh",
        password: 123,
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: "khanh",
        username: "khanh",
        password: 123,
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: "khanh",
        username: "khanh",
        password: 123,
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: "khanh",
        username: "khanh",
        password: 123,
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: "khanh",
        username: "khanh",
        password: 123,
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: "khanh",
        username: "khanh",
        password: 123,
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: "khanh",
        username: "khanh",
        password: 123,
        inTime: null,
        outTime: null,
        salary: 100,
        selected: false,
      },
    ],
    filteredItems: [],
    paginatedItems: [],
    selectedItems: [],
    pagination: {
      range: 5,
      currentPage: 2,
      itemPerPage: 3,
      items: [],
      filteredItems: [],
    },
  },
  getters: {
    
  },
  mutations: {
    FILTERED_ITEM(state , searchText) {
      if (_.isUndefined(searchText)) {
        state.filteredItems = _.filter(state.items, function (v) {
          return !v.selected;
        });
      } else {
        state.filteredItems = _.filter(state.items, function (v) {
          return (
            !v.selected &&
            v.employeeName.toLowerCase().indexOf(searchText.toLowerCase()) > -1
          );
        });
      }
      state.filteredItems.forEach(function (v, k) {
        v.key = k + 1;
      });
    },
    BUILD_PAGINATION(state, numberOfPage) {
      state.pagination.items = [];
      for (var i = 0; i < numberOfPage; i++) {
        state.pagination.items.push(i + 1);
      }
    }, 
    SELECT_PAGE(state, start, end) {
      state.pagination.filteredItems = [];
      for (var i = start; i <= end; i++) {
        state.pagination.filteredItems.push(i);
      }
      state.paginatedItems = state.filteredItems.filter((v, k) => {
        return (
          Math.ceil((k + 1) / state.pagination.itemPerPage) ===
          state.pagination.currentPage
        );
      });
    },
    SET_CURRENT_PAGE(state , item) {
      state.pagination.currentPage = item;
    },
    SET_SELECTED_ITEMS_TRUE(state, item) {
      state.selectedItems.push(item)
    },
    SET_SELECTED_ITEMS_FALSE(state, item) {
      state.selectedItems.push(item)
    },
    SET_FILTERED_ITEMS(state) {
      state.filteredItems = state.items;
    }
  },
  actions: {
    clearSearchItem({state, dispatch}) {
      _.isUndefined(state.searchItem);
      // this.searchInTheList("");
      dispatch("searchInTheList");
    },

    searchInTheList({ state, commit, dispatch }, searchText, currentPage) {
      // if (_.isUndefined(searchText)) {
      //   state.filteredItems = _.filter(state.items, function (v) {
      //     return !v.selected;
      //   });
      // } else {
      //   state.filteredItems = _.filter(state.items, function (v) {
      //     return (
      //       !v.selected &&
      //       v.employeeName.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      //     );
      //   });
      // }
      // state.filteredItems.forEach(function (v, k) {
      //   v.key = k + 1;
      // });
      commit("FILTERED_ITEM", searchText)
      // this.buildPagination();
      dispatch("buildPagination");

      if (_.isUndefined(state.currentPage)) {
        // this.selectPage(1);
        dispatch("selectPage", 1)
      } else {
        // this.selectPage(currentPage);
        dispatch("selectPage", currentPage)
      }
    },

    buildPagination({ state, commit }) {
      let numberOfPage = Math.ceil(
        state.filteredItems.length / state.pagination.itemPerPage
      );
      // state.pagination.items = [];
      // for (var i = 0; i < numberOfPage; i++) {
      //   state.pagination.items.push(i + 1);
      // }
      commit("BUILD_PAGINATION", numberOfPage)
    },

    selectPage({ state, commit } , item) {
      commit("SET_CURRENT_PAGE", item)

      let start = 0;
      let end = 0;
      if (state.pagination.currentPage < state.pagination.range - 2) {
        start = 1;
        end = start + state.pagination.range - 1;
      } else if (
        state.pagination.currentPage <= state.pagination.items.length &&
        state.pagination.currentPage > state.pagination.items.length - state.pagination.range + 2
      ) {
        start = state.pagination.items.length - state.pagination.range + 1;
        end = state.pagination.items.length;
      } else {
        start = state.pagination.currentPage - 2;
        end = state.pagination.currentPage + 2;
      }
      if (start < 1) {
        start = 1;
      }
      if (end > state.pagination.items.length) {
        end = state.pagination.filteredItems.length;
      }

      // state.pagination.filteredItems = [];
      // for (var i = start; i <= end; i++) {
      //   state.pagination.filteredItems.push(i);
      // }
      // state.paginatedItems = state.filteredItems.filter((v, k) => {
      //   return (
      //     Math.ceil((k + 1) / state.pagination.itemPerPage) ===
      //     state.pagination.currentPage
      //   );
      // });
      commit("SELECT_PAGE", start, end)
    },

    selectItem( { state, commit, dispatch } , item) {
      item.selected = true;
      // state.selectedItems.push(item);
      commit("SET_SELECTED_ITEMS_TRUE", item)
      // this.searchInTheList(this.searchItem, this.pagination.currentPage);
      dispatch("searchInTheList", state.searchItem, state.pagination.currentPage)
    },

    removeSelectedItem( { state, commit, dispatch } , item) {
      item.selected = false;
      // state.selectedItems.$remove(item);
      commit("SET_SELECTED_ITEMS_FALSE", item)
      // this.searchInTheList(this.searchItem, this.pagination.currentPage);
      dispatch("searchInTheList", state.searchItem, state.pagination.currentPage)
    },
  },
  modules: {

  }
})