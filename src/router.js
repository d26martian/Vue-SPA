import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/comments",
      name: "comments",

      component: () => import("./views/Comments.vue")
    },
    {
      path: "/comment",
      name: "comment",

      component: () => import("./views/PageComment.vue")
    }
  ]
});
