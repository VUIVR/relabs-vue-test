<template>
  <div class="container">
    <h3>Список событий</h3>
    <el-table :data="actions" style="width: 100%" border>
      <el-table-column prop="ctime" label="Date" width="180" sortable>
        
      </el-table-column>
      <el-table-column prop="event" label="Action" width="180" />
    </el-table>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "actionList",
  data() {
    return {
      actions: [],
    };
  },
  methods: {
    convertDate(time) {
      const date = moment(time * 1000).format("DD.MM.YYYY hh:mm");
      return date;
    },
  },

  mounted() {
    let socket = new WebSocket("wss://test.relabs.ru/event");
    socket.onopen = () => {
      console.log("Соединение Открыто");
    };
    socket.onclose = () => {
      console.log("Соединение закрыто");
    };

    socket.onmessage = (event) => {
      this.actions = this.actions.slice(0, 7);
      this.actions.unshift(JSON.parse(event.data));
    };
  },
};
</script>
