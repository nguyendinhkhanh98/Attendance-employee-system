<template>
  <div class="navbar__wrap">
    <div class="nav-link">
      <i class="fa fa-fw fa-home"></i>
      <a href="#">Dashboard</a>
    </div>
    <div class="nav-link">
      <i class="fas fa-users"></i>
      <router-link :to="{ name: 'EmployeeDetail'}">Employee</router-link>
    </div>
    <div class="nav-link">
      <i class="fas fa-calendar-alt"></i>
      <a href="#">Holiday</a>
    </div>
    <div class="nav-link">
      <i class="fas fa-check-circle"></i>
      <router-link :to="{name: 'LeaveManagement'}">Leave</router-link>
    </div>
    <div class="nav-link">
      <i class="far fa-list-alt"></i>
      <a href="#">Task</a>
    </div>
    <div class="nav-link">
      <i class="fas fa-file"></i>
      <a href="#">HR Policies</a>
    </div>
    <div class="nav-link">
      <i class="fas fa-money-check-alt"></i>
      <a href="#">Salary</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>
/* Style the navigation bar */
.navbar__wrap {
  width: 20%;
  height: 800px;
  background-color: #000;
}
.navbar__wrap .nav-link {
  display: flex;
  padding: 24px 36px 6px 6px;
  text-decoration: none;
  border-bottom: 1px solid #fff;
  position: relative;
}
.navbar__wrap .nav-link i {
  font-size: 28px;
  margin-right: 8px;
  color: white;
}

.navbar__wrap .nav-link a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  display: inline-block;
  align-self: flex-end;
  position: absolute;
  left: 46px;
  bottom: 2px;
}

/* Navbar links on mouse-over */
.navbar__wrap .nav-link a:hover {
  background-color: #000;
}

/* Current/active navbar link */
.active {
  background-color: #04aa6d;
}

/* Add responsiveness - will automatically display the navbar vertically instead of horizontally on screens less than 500 pixels */
@media screen and (max-width: 500px) {
  .navbar__wrap .nav-link a {
    display: none;
    display: block;
  }
}
</style>