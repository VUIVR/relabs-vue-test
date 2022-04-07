<template>
  <div class="pagination">
    <div
      class="page"
      :class="{ active: index * 5 == paramsFetch.offset }"
      v-for="(item, index) in Math.ceil(paramsFetch.total / paramsFetch.limit)"
      :key="index"
      @click="$emit('handlePage', index * 5)"
    >
      {{ index + 1 }}
    </div>
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
 
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
}

.page {
  padding: 10px;
  border: 1px solid #ffbd73;
  border-radius: 5px;
  cursor: pointer;
}

.page:hover {
  box-shadow: 0 0 5px 2px;
  transition: box-shadow 0.2s ease-out;
}

.page.active {
  border: 1px solid #3ba3d0;
  box-shadow: 0 0 5px 2px;
  color: #3ba3d0;
}
</style>
