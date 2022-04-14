<template>
  <div class="container">
    <el-table :data="users" border>
      <el-table-column prop="id" label="Id"  />
      <el-table-column prop="name" label="Name"  />
      <el-table-column prop="role" label="Role" />
      <el-table-column prop="{convertDate(ctime)}" label="Date" />
      <el-table-column label="Action">
        <template #default="scope">
          <el-button
            type="danger"
            size="small"
            @click.prevent="removeUser(scope.row.id)"
            plain
          >
            Удалить
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination :paramsFetch="paramsFetch" @handlePage="handlePage" />
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import pagination from "./MyPagination";

export default {
  components: {
    pagination,
  },
  name: "userList",
  data() {
    return {
      users: [],
      paramsFetch: {
        limit: 5,
        offset: 0,
        total: 15,
      },
    };
  },
  methods: {
    async fetchPost(limitFetch, offsetFetch) {
      const response = await axios.get(
        "https://test.relabs.ru/api/users/list",
        {
          params: {
            limit: limitFetch,
            offset: offsetFetch,
          },
        }
      );
      this.users = response.data.items;
    },
    convertDate(time) {
      const date = moment(time * 1000).format("DD.MM.YYYY hh:mm");
      return date;
    },

    removeUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
    },

    handlePage(offs) {
      console.log(offs);
      this.paramsFetch.offset = offs;
      this.fetchPost(this.paramsFetch.limit, this.paramsFetch.offset);
    },
  },
  mounted() {
    this.fetchPost(this.paramsFetch.limit, this.paramsFetch.offset);
  },
};
</script>
