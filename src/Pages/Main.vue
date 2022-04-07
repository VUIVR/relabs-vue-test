<template>
    <user-list />
    <action-list />
</template>

<script>
import userList from "@/Components/userList.vue";
import actionList from "@/Components/actionList.vue";

export default {
  components: {
    userList,
    actionList,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-evenly;
}
</style>
