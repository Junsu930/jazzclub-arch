import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

/****Layouts*****/
const FullLayout = lazy(() => import('../layouts/FullLayout.js'));

/***** Pages ****/

const Starter = lazy(() => import('../views/Starter.js'));
const Forms = lazy(() => import('../views/ui/Forms.js'));
const Alerts = lazy(() => import('../components/Alerts.js'));
const Badges = lazy(() => import('../components/Badges.js'));
const Cards = lazy(() => import('../components/Cards.js'));
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
      { path: '/metropolitan', exact: true, element: <Cards region="metro" /> },
      {
        path: '/specialCity',
        exact: true,
        element: <Cards region="spCity" />,
      },
      { path: '/rural', exact: true, element: <Cards region="rural" /> },
      { path: '/board', exact: true, element: <Navigate to="/freeboard" /> },
      { path: '/freeboard', exact: true, element: <Alerts /> },
      { path: '/ask', exact: true, element: <Grid /> },
      { path: '/naverLogin', exact: true, element: <NaverLoginPage /> },
    ],
  },
];

export default ThemeRoutes;
