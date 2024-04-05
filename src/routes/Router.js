import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

/****Layouts*****/
const FullLayout = lazy(() => import('../layouts/FullLayout.js'));

/***** Pages ****/

const Starter = lazy(() => import('../views/Starter.js'));
const Forms = lazy(() => import('../views/ui/Forms.js'));
const Alerts = lazy(() => import('../views/ui/Alerts'));
const Badges = lazy(() => import('../views/ui/Badges'));
const Cards = lazy(() => import('../views/ui/Cards'));
const Grid = lazy(() => import('../views/ui/Grid'));
const NaverLoginPage = lazy(() => import('../views/ui/NaverLogin.js'));

/*****Routes******/

const ThemeRoutes = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/starter" /> },
      { path: '/starter', exact: true, element: <Starter /> },
      {
        path: '/jazzClubSchedule',
        exact: true,
        element: <Navigate to="/metropolitan" />,
      },
      { path: '/metropolitan', exact: true, element: <Forms /> },
      { path: '/specialCity', exact: true, element: <Alerts /> },
      { path: '/rural', exact: true, element: <Badges /> },
      { path: '/board', exact: true, element: <Navigate to="/freeboard" /> },
      { path: '/freeboard', exact: true, element: <Cards /> },
      { path: '/ask', exact: true, element: <Grid /> },
      { path: '/naverLogin', exact: true, element: <NaverLoginPage /> },
    ],
  },
];

export default ThemeRoutes;
