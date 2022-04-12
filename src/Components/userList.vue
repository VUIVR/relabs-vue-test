<template>
  <div class="container">
    <h3>Список пользователей</h3>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Role</td>
          <td>Date</td>
          <td>Action</td>
        </tr>
      </thead>
      
        <tr v-for="user in users" :key="user.ctime" class="row">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.role }}</td>
          <td>{{ convertDate(user.ctime) }}</td>
          <td><button @click="removeUser(user.id)">Удалить</button></td>
        </tr>
      
    </table>
    <!-- <pagination :paramsFetch="paramsFetch" @handlePage="handlePage" /> -->
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
/* import pagination from "./MyPagination"; */

export default {
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
      this.paramsFetch.offset = offs;
      this.fetchPost(this.paramsFetch.limit, this.paramsFetch.offset);
    },
  },
  mounted() {
    this.fetchPost(this.paramsFetch.limit, this.paramsFetch.offset);
  },
};
</script>

<style scoped>
td {
  padding: 5px;
}
.row:hover {
  box-shadow: 0 0 5px 2px;
  transition: box-shadow 0.2s ease-out;
  cursor: pointer;
}
</style>
