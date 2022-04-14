<template>
  <div class="pagination">
    <el-pagination
      layout="prev, pager, next"
      :total="paramsFetch.total"
      :page-size="paramsFetch.limit"
      background
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: {
    paramsFetch: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleCurrentChange(num) {
     this.$emit('handlePage', (num-1) * 5);
      
    },
  },
};
</script>
