import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

import "./assets/main.css";

const app = createApp(App);

app.use(mdiVue, {
  icons: mdijs,
});

app.use(router);

app.mount("#app");
