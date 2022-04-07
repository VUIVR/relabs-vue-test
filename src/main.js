import { createApp } from "vue";
import App from "./App.vue";
import components from './Components/UI'
import router from "./Router";
import Store from "./Store";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
.use(router)
.use(Store)
.mount("#app");
