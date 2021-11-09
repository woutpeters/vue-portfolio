import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import SingleProject from '../views/SingleProject';
import Contact from '../views/Contact.vue';
import NotFoundComponent from '../views/NotFoundComponent.vue';

const routes = [
  {
    path: '/:catchAll(.*)',
    component: NotFoundComponent,
    name: 'NotFound',
    meta: {
			title: () => '404 | Wout Peters',
		},
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
			title: () => 'Front-End Developer | Wout Peters',
		},
  },
  {
    path: '/about',
    name: 'about',
    component: About,
		meta: {
			title: () => 'Over mij | Wout Peters',
		},
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
		meta: {
			title: () => 'Projecten | Wout Peters',
		},
  },
  {
    path: '/projects/:slug',
    name: 'details',
    component: SingleProject,
    props: true,
		meta: {
      title: (route) => {
        let title = route.params.slug.replace('-', ' ');
        title = title.replace(/(^\w{1})|(\s+\w{1})/g, title => title.toUpperCase());
        return title + ' | Wout Peters'
      }
		},
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
		meta: {
			title: () => 'Contact | Wout Peters',
		},
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title(to);
  next();
});

export default router
