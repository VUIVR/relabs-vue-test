import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";
import Store from "./Store";

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

const app = createApp(App)

app
    .use(router)
    .use(Store)
    .use(ElementPlus)
    .mount("#app");
