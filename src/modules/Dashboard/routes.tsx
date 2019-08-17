import React from 'react';
import PeopleIcon from '@material-ui/icons/People';

import Home from '../Home';
import DashboardCategory from 'src/common/interfaces/dashboard-category';

const routes: DashboardCategory[] = [
  {
    id: 'Main',
    children: [
      {
        id: 'Overview',
        icon: <PeopleIcon />,
        active: true,
        slug: 'home',
        path: '/',
        exact: true,
        component: Home,
      },
    ],
  },
];

export default routes;
