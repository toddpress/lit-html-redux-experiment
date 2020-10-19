import "./styles.css";
import "./views/todo-view.js";
import { Router } from "@vaadin/router";
window.addEventListener("load", () => {
  initRouter();
  registerSW();
});

function initRouter() {
  const router = new Router(document.querySelector("main"));
  router.setRoutes([
    {
      path: "/",
      component: "todo-view",
    },
    {
      path: "/stats",
      component: "stats-view",
      action: () =>
        import(/* webpackChunkName: "stats" */ "./views/stats-view"),
    },
    {
      path: "(.*)",
      component: "not-found-view",
      action: () =>
        import(
          /* webpackChunkName: "not-found-view" */ "./views/not-found-view"
        ),
    },
  ]);
}

async function registerSW() {
  if ("serviceworker" in navigator) {
    try {
      await navigator.serviceWorker.register("./sw.js");
    } catch (e) {
      console.log("Service worker registration failed; sorry about that.");
    }
  } else {
    console.log("Your browser doesn't support service workers");
  }
}
