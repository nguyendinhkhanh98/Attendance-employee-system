<template>
  <div class="container__content">
    <Navigation />
    <div class="container__table">
      <HeaderTableContent class="table__header" />
      <table class="table table-bordered table__employee-detail">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th class="table-item">
              <span>Employee Name</span> <i class="fas fa-sort"></i>
            </th>
            <th scope="col">User Name</th>
            <th scope="col">Password</th>
            <th scope="col">In Time</th>
            <th scope="col">Out Time</th>
            <th scope="col">Salary</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Add in Previous Employee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Admin</td>
            <td>admin</td>
            <td>admin</td>
            <td></td>
            <td></td>
            <td></td>
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
      <FooterTableContent />
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import HeaderTableContent from "../components/HeaderTableContent";
import FooterTableContent from "../components/FooterTableContent";
export default {
  name: "EmployeeDetail",
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
.table-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>