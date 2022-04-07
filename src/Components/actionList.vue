<template>
  <div class="container">
    <h3>Список событий</h3>
    <table>
      <thead>
        <tr>
          <td>Время</td>
          <td>Событие</td>
        </tr>
      </thead>
      <TransitionGroup name="tr">
        <tr v-for="action of actions" :key="action.ctime">
          <td>{{ convertDate(action.ctime) }}</td>
          <td>{{ action.event }}</td>
        </tr>
      </TransitionGroup>
    </table>
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
      this.actions.unshift(JSON.parse(event.data))      
    };
  },
};
</script>

<style>
.tr-enter-active {
  transition: all 0.5s ease;
}
.tr-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

td {
  padding: 5px;
}
</style>
