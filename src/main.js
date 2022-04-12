import { createApp } from "vue";
import App from "./App.vue";
import components from './Components/UI';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import router from "./Router";
import Store from "./Store";



const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(Store)
    .use(ElementPlus)
    .mount("#app");
