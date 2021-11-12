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
            v-model="pagination.itemPerPage"
          >
            <option
              v-for="optionItem in optionItems"
              v-bind:key="optionItem"
              v-bind:value="optionItem"
            >
              {{ optionItem }}
            </option>
          </select>
          <label
            for="table-content__select-id"
            class="table-content__select-label"
            >Record per page: {{ pagination.itemPerPage }}</label
          >
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
            <th scope="col" class="table-item">Employee Name <i class="fas fa-sort"></i></th>
            <th scope="col" class="table-item">Attendance <i class="fas fa-sort"></i></th>
            <th scope="col" class="table-item">Report <i class="fas fa-sort"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Employee 1</td>
            <td><button type="button" class="btn btn-info">Attendance</button></td>
            <td><button type="button" class="btn btn-warning">Report</button></td>
          </tr>
        </tbody>
      </table>
      <div class="footer-table-content">
        <span class="footer-table-content__label"
          >Showing 41 to 46 entires</span
        >
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link"
                @click="selectPage(pagination.currentPage - 1)"
                v-bind:class="{
                  disabled:
                    this.pagination.currentPage == this.pagination.items[0] ||
                    this.pagination.items.length === 0,
                }"
              >
                Previous
              </a>
            </li>
            <li
              class="page-item"
              v-for="item in this.pagination.filteredItems"
              v-bind:key="item"
            >
              <a
                class="page-link"
                v-on:click="selectPage(item)"
                v-bind:class="{ 'is-info': item === pagination.currentPage }"
              >
                {{ item }}
              </a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                @click="selectPage(pagination.currentPage + 1)"
              >
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
// import FooterTableContent from "../components/FooterTableContent"
export default {
  name: 'AttendanceAdmin',
  components: {
    Navigation,
    // HeaderTableContent,
    // FooterTableContent,
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