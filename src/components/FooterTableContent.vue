<template>
  <div class="footer-table-content">
    <span class="footer-table-content__label">Showing 41 to 46 entires</span>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item active"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "FooterTableContent",
  
};
</script>

<style>
.footer-table-content {
  display: flex;
  justify-content: space-between;
  margin: 8px 16px;
}
.footer-table-content__label {
  font-size: 16px;
}
</style>