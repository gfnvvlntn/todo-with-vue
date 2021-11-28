import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import primitives from "./primitives/primitives";

const app = createApp(App);

primitives.forEach((prim) => {
  return app.component(prim.name, prim);
});

app.use(router).mount("#app");
