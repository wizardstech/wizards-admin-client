import Login from './modules/Login';
import Dashboard from './modules/Dashboard';

export default [
  {
    path: '/login',
    component: Login,
    slug: 'login',
  },
  {
    path: '/',
    component: Dashboard,
    slug: 'dashboard',
  },
];
