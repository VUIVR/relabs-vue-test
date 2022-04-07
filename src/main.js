import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import components from './Components/UI'
import Store from "./Store";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
.use(router)
.use(Store)
.mount("#app");
