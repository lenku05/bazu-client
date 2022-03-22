import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () =>
      import(/* webpackChunkName: "Blogs" */ "../views/Blogs.vue"),
  },

  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
  },
  {
    path: "/blog/:id",
    name: "Blog",
    props: true,
    component: () => import(/* webpackChunkName: "Blog" */ "../views/Blog.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      // console.log("moving to top of the page");
      window.scrollTo(0, 0);
    }
  },
});

export default router;
