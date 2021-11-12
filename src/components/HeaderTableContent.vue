<template>
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