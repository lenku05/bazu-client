import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/assets/css/bootstrap.css";

import "@/assets/css/all.css";
import "@/assets/css/fontawesome.css";
createApp(App).use(store).use(router).mount("#app");
