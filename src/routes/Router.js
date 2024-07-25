import { exact } from 'prop-types';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../views/ui/Login.js';

/****Layouts*****/
const FullLayout = lazy(() => import('../layouts/FullLayout.js'));

/***** Pages ****/

const Starter = lazy(() => import('../views/Starter.js'));
const Clubs = lazy(() => import('../views/ui/ClubList.js'));
const NaverLoginPage = lazy(() => import('../views/ui/Login.js'));
const Contact = lazy(() => import('../views/ui/Contact.js'));
const Freeboard = lazy(() => import('../views/ui/Freeboard.js'));
const BoardDetail = lazy(() => import('../views/ui/BoardDetail.js'));

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
      { path: '/freeboard', exact: true, element: <Freeboard /> },
      { path: '/ask', exact: true, element: <Contact /> },
      { path: '/login', exact: true, element: <Login /> },
      { path: '/post/:id', exact: true, element: <BoardDetail /> },
    ],
  },
];

export default ThemeRoutes;
