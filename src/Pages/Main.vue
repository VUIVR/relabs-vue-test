<template>
  <el-space wrap :size="30">
    <user-list />
    <action-list />
  </el-space>
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
