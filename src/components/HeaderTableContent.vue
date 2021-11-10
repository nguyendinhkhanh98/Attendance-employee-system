<template>
  <div class="table-content__header">
    <div class="form-group table-content__select">
      <select
        class="form-control table-content__select-page"
        id="table-content__select-id"
        name="action"
        v-model="selected"
        v-on:change="countPerPages(count)"
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
      <label for="table-content__select-id" class="table-content__select-label">Record per page: {{selected}}</label>
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
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTableContent",
  data() {
    return {
      selected:'',
      employeeDatas: this.$store.state.data,
    }
  },
  methods: {
    countPerPages(count) {
      this.$store.dispatch("selectPage", count);
    },
  },
};
</script>

<style scoped>
.table-content__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px;
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
  border-radius: 3px;
  height: 30px;
}
</style>