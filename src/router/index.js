import { createRouter, createWebHistory } from 'vue-router';

const home = () => import("../views/HomeView.vue");

const routes = [
  { path: "/", component: home},
  { path: "/about", name:'Hvem er vi', component: () => import("../views/AboutView.vue")},
  { path: "/contact", name:'Kontakt os', component: () => import("../views/ContactView.vue")},
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { top: 0 };
    }
  },
  history: createWebHistory(),
  routes,
});

export default router;
