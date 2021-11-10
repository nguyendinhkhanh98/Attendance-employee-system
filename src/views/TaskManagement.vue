<template>
  <div class="container__content">
    <Navigation />
    <div class="container__table">
      <HeaderTableContent class="table__header" />
      <table class="table table-bordered table__employee-detail">
        <thead>
          <tr>
            <th scope="col" class="table-item">Task Given To</th>
            <th scope="col" class="table-item">Task <i class="fas fa-sort"></i></th>
            <th scope="col" class="table-item">Out come <i class="fas fa-sort"></i></th>
            <th scope="col" class="table-item"></th>
            <th scope="col" class="table-item"></th>
            <th scope="col" class="table-item"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Anh Hong</th>
            <td>Test Module</td>
            <td></td>
            <td><button type="button" class="btn btn-primary">Edit</button></td>
            <td><button type="button" class="btn btn-danger">Reply for Outcome</button></td>
            <td><button type="button" class="btn btn-warning">Close</button></td>
          </tr>
        </tbody>
      </table>
      <FooterTableContent />
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import HeaderTableContent from "../components/HeaderTableContent";
import FooterTableContent from "../components/FooterTableContent"
export default {
  name: 'TaskManagement',
  components: {
    Navigation,
    HeaderTableContent,
    FooterTableContent,
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