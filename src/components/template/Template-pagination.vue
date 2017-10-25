<template>
<div id="pagination">

  <div class="VuePagination">
    <ul class="pagination VuePagination__pagination"></ul>
      <li class="VuePagination__pagination-item VuePagination__pagination-item-prev-chunk disabled">
        <a href="javascript:void(0)"><<</a>
      </li>
      <li class="VuePagination__pagination-item VuePagination__pagination-item-prev-page disabled">
        <a href="javascript:void(0)"><</a>
      </li>
      <li class="VuePagination__pagination-item active" v-for="(page,i) in perpage" :key="page.i">
        <a href="javascript:void(0)">{{i}}</a>
      </li>
      <li class="VuePagination__pagination-item VuePagination__pagination-item-next-page">
        <a href="javascript:void(0)">></a>
      </li>
      <li class="VuePagination__pagination-item VuePagination__pagination-item-next-chunk disabled">
        <a href="javascript:void(0)">>></a>
      </li>
    </ul>
  </div>

<p class="note">
Check out the <a href="https://jsfiddle.net/matfish2/f5h8xwgn/" target="_blank">vue-tables</a> package, now using this pagination component.</p>
</div>


</template>
<script>
export default {
  name: "TempaltePagination",
  extends: {},
  props: {
    records: {
      type: Number
    },
    perpage: {
      type: Number
    }
  },
  data() {
    return {
      table1Page: 1,
      table2Page: 1,
      code: "table1"
    };
  },
  computed: {
    PerPage: function() {
      return this.perpage ? parseInt(this.perpage) : 25;
    },
    Records: function() {
      return this.records ? parseInt(this.records) : 0;
    },
    totalPages: function() {
      return this.$refs.table.totalPages;
    }
  },
  components: {},
  methods: {
    refresh: function() {
      this.$refs.table.setPage(1);
    },
    prev: function() {
      return this.$refs.table.prev();
    },
    next: function() {
      return this.$refs.table.next();
    },
    prevChunk: function() {
      return this.$refs.table.prevChunk();
    },
    nextChunk: function() {
      return this.$refs.table.nextChunk();
    }
  }
};
</script>
<style lang='scss' scoped>
#pagination {
  margin-top: 10px;
  text-align: center;
}

h3 {
  margin-top: 10px;
  text-align: center;
}

div {
  margin-top: 10px;
}

small {
  font-size: 14px;
}
#people {
  text-align: center;
  width: 95%;
  margin: 0 auto;
}

h2 {
  margin-bottom: 30px;
}

th,
td {
  text-align: left;
}

th:nth-child(n + 2),
td:nth-child(n + 2) {
  text-align: center;
}

thead tr:nth-child(2) th {
  font-weight: normal;
}

.VueTables__sort-icon {
  margin-left: 10px;
}

.VueTables__dropdown-pagination {
  margin-left: 10px;
}

.VueTables__highlight {
  background: yellow;
  font-weight: normal;
}

.VueTables__sortable {
  cursor: pointer;
}

.VueTables__date-filter {
  border: 1px solid #ccc;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
}

.VueTables__filter-placeholder {
  color: #aaa;
}

.VueTables__list-filter {
  width: 120px;
}
</style>
