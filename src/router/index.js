import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login.vue';
import Home from '../components/home.vue';
import NewCustomer from '../components/newCustomer.vue';
import Dish from '../components/dish.vue';

Vue.use(Router);

const routes = [
    { name: 'login', path: '/', component: Login },
    { name: 'newcustomer', path: '/newcustomer', component: NewCustomer },
    { name: 'home', path: '/home', component: Home },
    { name: 'dish', path: '/dish/:dishUrl', component: Dish },
];

const router = new Router({
  routes
});

export default router;
