<template>
    <user-list />
    <action-list />
</template>

<script>
import userList from "@/Components/UserList";
import actionList from "@/Components/ActionList";

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
