<template>
  <div class="container__content">
    <Navigation />
    <div class="container__table">
      <div class="table-content__header">
        <div class="form-group table-content__select">
          <select
            class="form-control table-content__select-page"
            id="table-content__select-id"
            name="action"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <label for="table-content__select-id" class="table-content__select-label">Record per page: 3</label>
        </div>
        <div class="table-content__search">
          <label
            for="table-content__search-input"
            class="table-content__search-label"
            >Search:</label
          >
          <input
            type="text"
            id="table-content__search-input"
            class="table-content__search-input"
            v-model="searchItem"
            v-on:keyup="searchInTheList(searchItem)"
          />
        </div>
      </div>
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
      <div class="footer-table-content">
        <span class="footer-table-content__label">Showing 41 to 46 entires</span>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link"
                @click="selectPage(pagination.currentPage - 1)">
                Previous
              </a>
            </li>
            <li class="page-item"
              v-for="item in pagination.items"
              v-bind:key="item"
            >
              <a class="page-link" 
                  v-on:click="selectPage(item)"
                  v-bind:class="{'is-info': item === pagination.currentPage}"
              >
                {{item}}
              </a>
            </li>
            <li class="page-item">
              <a class="page-link"
                @click="selectPage(pagination.currentPage + 1)">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
// import HeaderTableContent from "../components/HeaderTableContent";
// import FooterTableContent from "../components/FooterTableContent";

const _ = require('lodash');

export default {
  name: 'Content',
  components: {
    Navigation,
    // HeaderTableContent,
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
        selected: false,
      },
      {
        id: 1,
        employeeName: 'khanh',
        username: 'khanh',
        password: 123,
        inTime: null, 
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: 'khanh',
        username: 'khanh',
        password: 123,
        inTime: null, 
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: 'khanh',
        username: 'khanh',
        password: 123,
        inTime: null, 
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: 'khanh',
        username: 'khanh',
        password: 123,
        inTime: null, 
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: 'khanh',
        username: 'khanh',
        password: 123,
        inTime: null, 
        outTime: null,
        salary: 100,
        selected: false,
      },
      {
        id: 1,
        employeeName: 'khanh',
        username: 'khanh',
        password: 123,
        inTime: null, 
        outTime: null,
        salary: 100,
        selected: false,
      }
      ],
      filteredItems: [],
      paginatedItems: [],
      selectedItems: [],
      pagination: {
        range: 5,
        curentPage: 1,
        itemPerPage: 3,
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
          return !v.selected && v.employeeName.toLowerCase().indexOf(searchText.toLowerCase()) > -1
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
      this.pagination.currentPage = item 

      let start = 0
      let end = 0
      if(this.pagination.curentPage < this.pagination.range - 2) {
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
        console.log(i)
        this.pagination.filteredItems.push(i+1)
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
/* Table */
.container__content {
  display: flex;
  overflow-x: auto;
}
.container__table {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 8px 16px 0 16px;
}
.table__employee-detail {
  overflow-x: auto;
}
.table-item i {
  display: inline-block;
  margin-left: 12px;
}
/* Modified */
.is-info {
  background-color: rgb(76, 101, 240);
}

/* Header Table Content */
.table-content__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}

.table-content__select {
  display: flex;
  align-items: center;
}
.table-content__select-label {
  color: #000;
  font-size: 16px;
  margin: 0 0 0 8px;
}
.table-content__select-page {
  width: 80px;
}

select.form-control:not([size]):not([multiple]) {
  height: 32px !important;
}

.table-content__search-label {
  margin-right: 8px;
}
.table-content__search-input {
  text-indent: 10px;
  border: 1px solid #7c7b7b;
  border-radius: 3px;
  height: 30px;
}
.table-content__search-input:focus {
  outline: none;
}

/* Footer Table Content */
.footer-table-content {
  display: flex;
  justify-content: space-between;
  margin: 8px 16px;
}
.footer-table-content__label {
  font-size: 16px;
}
</style>