<template>
  <div>
    <h3 class="center">
      Переход на Главную страницу через
      {{ counter ? counter : this.$router.push("/") }} сек
    </h3>
    <img src="@/Assets/404.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 5,
    };
  },
  methods: {
    cl() {
      this.counter > 0 && setTimeout(() => (this.counter -= 1), 1000);
    },
  },
  mounted() {
    this.cl();
  },
  updated() {
    this.cl();
  },
};
</script>

<style>
.center {
  text-align: center;
  color: #024a68;
}
</style>
