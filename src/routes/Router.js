import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Contact from '../components/Contact.js';

/****Layouts*****/
const FullLayout = lazy(() => import('../layouts/FullLayout.js'));

/***** Pages ****/

const Starter = lazy(() => import('../views/Starter.js'));
const Alerts = lazy(() => import('../components/Contact.js'));
const Clubs = lazy(() => import('../views/ui/ClubList.js'));
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
      { path: '/metropolitan', exact: true, element: <Clubs region="metro" /> },
      {
        path: '/specialCity',
        exact: true,
        element: <Clubs region="spCity" />,
      },
      { path: '/rural', exact: true, element: <Clubs region="rural" /> },
      { path: '/board', exact: true, element: <Navigate to="/freeboard" /> },
      { path: '/freeboard', exact: true, element: <Contact /> },
      { path: '/ask', exact: true, element: <Contact /> },
      { path: '/naverLogin', exact: true, element: <NaverLoginPage /> },
    ],
  },
];

export default ThemeRoutes;
