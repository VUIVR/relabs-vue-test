<template>
  <div class="container">
    <h3>Авторизация</h3>
    <form @submit.prevent="submitHandler">
      <input
        type="text"
        name="email"
        placeholder="Введите почту"
        v-model.trim="v$.email.$model"
        :class="{
          invalid:
            (v$.email.$dirty && v$.email.required.$invalid) ||
            (v$.email.$dirty && v$.email.$invalid),
        }"
      />

      <small v-if="v$.email.$dirty && v$.email.required.$invalid"
        >Поле не должно быть пустым</small
      >
      <small v-else-if="v$.email.$dirty && v$.email.$invalid"
        >Некорректно введана почта</small
      >

      <input
        type="password"
        name="pass"
        placeholder="Введите пароль"
        v-model.trim="v$.pass.$model"
        :class="{
          invalid:
            (v$.pass.$dirty && v$.pass.required.$invalid) ||
            (v$.pass.$dirty && v$.pass.minLength.$invalid) ||
            (v$.pass.$dirty && v$.pass.maxLength.$invalid),
        }"
      />

      <small v-if="v$.pass.$dirty && v$.pass.required.$invalid"
        >Поле не должно быть пустым</small
      >

      <small v-else-if="v$.pass.$dirty && v$.pass.minLength.$invalid"
        >Минимум 8 символов</small
      >

      <small v-else-if="v$.pass.$dirty && v$.pass.maxLength.$invalid"
        >Максимум 15 символов</small
      >
      
      <my-button type="submit" class="center">Войти</my-button>
    </form>
  </div>

  <div class="wrapper" v-if="showModal">
    <div class="modal">      
      <div class="rotation"></div>
      <h3>Авторизация...</h3>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

export default {
  name: "Auth",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      email: "",
      pass: "",
      showModal: false,
    };
  },
  validations() {
    return {
      email: { required, email },
      pass: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(20),
      },
    };
  },
  methods: {
    submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      } else {
        this.showModal = true;
        setTimeout(() => {
          this.$router.push("/");
        }, 2000);
      }
    },
    
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

form {
  background: inherit;
}

img {
  background: inherit;
  animation: rotate;
}

.wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #5251515c;
  margin: 0;
  display: flex;
  align-items: center;
}

.modal {
  background-color: #024a68;
  border: 1px solid #ffbd73;
  border-radius: 5px;
  margin-bottom: 10px px;
  padding: 15px;
  display: flex;
  align-items: center;
  width: fit-content;
}

input {
  background-color: transparent;
  border: 1px solid #ffbd73;
  border-radius: 5px;
  color: inherit;
  cursor: pointer;
  display: block;
  outline: none;
  padding: 5px;
  margin: 10px auto;
  z-index: 2;
}

input:hover {
  box-shadow: 0 0 5px 2px;
  transition: box-shadow 0.2s ease-out;
}

.invalid {
  border: 1px solid red;
}

.center {
  margin: auto;
}

small {
  background: inherit;
}

.rotation {
  margin-right: 10px;
  border-top: 5px solid #ffbd73;
  border-bottom: 5px solid #ffbd73;
  border-radius: 38px;
  width: 50px;
  height: 50px;
  animation-name: rotation;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background: transparent;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
</style>
