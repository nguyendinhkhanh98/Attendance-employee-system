<template>
  <div class="container__content">
    <Navigation />
    <div class="container__table">
      <HeaderTableContent class="table__header" />
      <table class="table table-bordered table__employee-detail">
        <thead>
          <tr>
            <th scope="col" class="table-item">Date</th>
            <th scope="col" class="table-item">In Time <i class="fas fa-sort"></i></th>
            <th scope="col" class="table-item">Out Time <i class="fas fa-sort"></i></th>
            <th scope="col" class="table-item">Administrator Remarks <i class="fas fa-sort"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">16-10-2021</th>
            <td>8:30</td>
            <td>8:30</td>
            <td></td>
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
  name: 'AttendanceEmployee',
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