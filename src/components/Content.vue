<template>
  <div class="container__content">
    <Navigation />
    <div class="container__table">
      <HeaderTableContent class="table__header" />
      <table class="table table-bordered table__employee-detail">
        <thead>
          <tr>
            <th scope="col" class="table-item">ID</th>
            <th scope="col" class="table-item">
              Employee Name <i class="fas fa-sort"></i>
            </th>
            <th scope="col" class="table-item">
              Use Name <i class="fas fa-sort"></i>
            </th>
            <th scope="col" class="table-item">
              Password <i class="fas fa-sort"></i>
            </th>
            <th scope="col" class="table-item">
              In Time <i class="fas fa-sort"></i>
            </th>
            <th scope="col" class="table-item">
              Out Time <i class="fas fa-sort"></i>
            </th>
            <th scope="col" class="table-item">
              Salary <i class="fas fa-sort"></i>
            </th>
            <th scope="col" class="table-item"></th>
            <th scope="col" class="table-item"></th>
            <th scope="col" class="table-item">
              Add in Previous Employee <i class="fas fa-sort"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in paginatedItems"
              v-bind:key="index">
            <th scope="row">{{item.id}}</th>
            <td>{{item.employeeName}}</td>
            <td>{{item.username}}</td>
            <td>{{item.password}}</td>
            <td>{{item.inTime}}</td>
            <td>{{item.outTime}}</td>
            <td>{{item.salary}}</td>
            <td><button type="button" class="btn btn-primary">Edit</button></td>
            <td>
              <button type="button" class="btn btn-danger">Delete</button>
            </td>
            <td>
              <button type="button" class="btn btn-warning">Previous</button>
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <button
              type="button"
              class="page-link"
              @click="selectPage(this.pagination.currentPage - 1)"
              v-bind:class="{'is-disabled': this.pagination.currentPage === this.pagination.item[0] || this.pagination.items.length === 0}"
            >
              Previous
            </button>
          </li>
          <li class="page-item" v-for="(item, index) in pagination.filteredItems" v-bind:key="index">
            <button
              type="button"
              class="page-link"
              @click="selectPage(item)"
              v-bind:class="{'is-info': item === pagination.currentPage}"
            >
              {{item}}
            </button>
          </li>
          <li class="page-item">
            <button
              type="button"
              class="page-link"
              @click="selectPage(this.pagination.currentPage + 1)"
              v-bind:class="{'is-disabled': this.pagination.currentPage === this.pagination.items[this.pagination.item.length-1] || this.pagination.items.length === 0}"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import HeaderTableContent from "../components/HeaderTableContent";
// import FooterTableContent from "../components/FooterTableContent";

const _ = require('lodash');

export default {
  name: 'Content',
  components: {
    Navigation,
    HeaderTableContent,
    // FooterTableContent,
  },
  data() {
    return {
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
    }
  },
  created() {
    this.filteredItems = this.items
    this.buildPagination()
    this.selectPage(1) 
  },
  methods: {
    clearSearchItem() {
      _.isUndefined(this.searchItem);
      this.searchInTheList('');
    },

    searchInTheList(searchText, currentPage){
      if(_.isUndefined(searchText)){
        this.filteredItems = _.filter(this.items, function(v){
          return !v.selected
        })
      }
      else{
        this.filteredItems = _.filter(this.items, function(v){
          return !v.selected && v.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        })
      }
      this.filteredItems.forEach(function(v, k){
        v.key = k+1
      })  
      this.buildPagination()
      
      if(_.isUndefined(currentPage)){
        this.selectPage(1) 
      }
      else{
        this.selectPage(currentPage)
      }
    },

    buildPagination() {
      let numberOfPage = Math.ceil(this.filteredItems.length / this.pagination.itemPerPage)
      this.pagination.items = []
      for (var i = 0; i < numberOfPage; i++) {
        this.pagination.items.push(i+1)
      }
    },

    selectPage(item) {
      this.pagination.currnetPage = item 

      let start = 0
      let end = 0
      if(this.pagination.currnetPage < this.pagination.range - 2) {
        start = 1
        end = start + this.pagination.range - 1
      }
      else if
      (this.pagination.currentPage <= this.pagination.items.length && 
       this.pagination.currentPage > this.pagination.items.length - this.pagination.range + 2) {
        start = this.pagination.items.length - this.pagination.range + 1
        end = this.pagination.items.length 
      }
      else {
        start = this.pagination.currentPage - 2
        end = this.pagination.currentPage + 2
      }
      if(start<1) {
        start = 1
      }
      if(end > this.pagination.items.length) {
        end = this.pagination.filteredItems
      }

      this.pagination.filteredItems = []
      for(var i = start; i <= end; i++) {
        this.pagination.filteredItems.push(i)
      }
      this.paginatedItems = this.filteredItems.filter((v, k) => {
        return Math.ceil((k+1) / this.pagination.itemPerPage) === this.pagination.currentPage
      })
    },
    selectItem(item) {
      item.selected = true;
      this.selectedItems.push(item)
      this.searchInTheList(this.searchItem, this.pagination.currentPage)
    },

    removeSelectedItem(item) {
      item.selected = false
      this.selectedItems.$remove(item)
      this.searchInTheList(this.searchItem, this.pagination.currentPage)
    },
  },
};
</script>

<style scoped>
.container__content {
  display: flex;
  overflow-x: auto;
}
.container__table {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.table__employee-detail {
  overflow-x: auto;
}
.table-item i {
  display: inline-block;
  margin-left: 12px;
}
/* .table-item {
  position: relative
}
.table-item i{
  position: absolute;
  right: 6px;
  top: 18px;
} */
</style>