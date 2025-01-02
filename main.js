// eslint-disable-next-line
/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import Karon from "./components/valorant/GEN/karon.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");

const karon = createApp(Karon);
karon.use(router);
karon.mount("#karon");
