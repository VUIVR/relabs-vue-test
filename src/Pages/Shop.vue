<template>
      <div class="card">
        <img src="@/Assets/Shop/Iph12.jpg" alt="Iphone 12" />
        <div class="discount">14%</div>
        <div class="totalprice">
          85 991 ₽<span class="price"> 99 990 ₽ </span>
        </div>
        <div class="title">Apple / Iphone 12 256Gb / 6.1"</div>

        <div class="rating">
          <el-rate v-model="value" disabled show-score text-color="#ff9900" />
        </div>
        <div class="credit">РАССРОЧКА 0-0-6</div>
        <div class="buy">
          <el-button type="primary">Купить</el-button>
          <span class="heart">♡</span>
        </div>
      </div>

</template>

<script setup>
import { ref } from "vue";

const value = ref(4);
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  width: 150px;
}

.card:hover {
  box-shadow: 0 0 5px 2px;
  transition: box-shadow 0.2s ease-out;
}

img {
  width: 100%;
}

.discount {
  background: #fff;
  border-radius: 25%;
  color: #f35973;
  font-size: 0.8rem;
  padding: 2px;
  position: relative;
  top: -15px;
  width: fit-content;
}

.totalprice {
  color: #000;
  font-weight: 700;
}

.price {
  color: grey;
  font-size: 0.8rem;
  text-decoration: line-through;
}

.title {
  color: grey;
  display: inline;
  font-size: small;
}

.rating {
  color: #fa2068;
  font-size: large;
}

.ratingNum {
  color: grey;
  font-size: small;
}

.credit {
  background: linear-gradient(90deg, #fff, #f8c313);
  border-radius: 30px;
  color: #000;
  font-size: small;
  font-weight: 500;
  padding: 5px 10px 5px 0;
  width: fit-content;
}

.buy {
  display: flex;
  margin-top: 10px;
  width: fit-content;
}

.btn {
  background-color: #fa2068;
  border-radius: 5px;
  color: #fff;
  padding: 5px 15px;
  cursor: pointer;
  display: block;
  outline: none;
  border: none;
}

.heart {
  color: #fa2068;
  font-size: x-large;
  font-weight: 900;
  margin-left: 10px;
}
</style>
