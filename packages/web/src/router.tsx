import { createBrowserRouter } from 'react-router-dom';

import BlogLayout from './layout/blog-layout';
import ProtectedLayout from './layout/protected-layout';

import { Team } from './views/team';

import { Dashboard } from './views/dashboard';
import DashboardBooks from './views/dashboard/books';
import DashboardCollections from './views/dashboard/collections';
import DashboardHome from './views/dashboard/home';
import DashboardNotes from './views/dashboard/notes';
import { DashboardRecycles } from './views/dashboard/recycles';
import { DashboardGroups } from './views/dashboard/groups';
import { DashboardTeam } from './views/dashboard/team';
import { DashboardTeamHome } from './views/dashboard/team/home';

import DocxSettingBasic from './views/docx-setting/basic';
import DocxSetting from './views/docx-setting/index';
import DocxDetail from './views/docx/detail';
import Docx from './views/docx/home';

import Setting from './views/setting';
import AuthorizationsSetting from './views/setting/authorizations';
import NotificationsSetting from './views/setting/notifications';
import ProfileSetting from './views/setting/profile';
import SafetySetting from './views/setting/safety';
import StatsSetting from './views/setting/stats';
import TokensSetting from './views/setting/tokens';

import NewOrganization from '@/views/organization/new';
import Singin from './views/singin';
import ForgetPassword from './views/forget-password';
import { ErrorPage } from './views/404';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedLayout />,
    loader: ProtectedLayout.loader,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: 'collections',
            element: <DashboardCollections />,
          },
          {
            path: 'notes',
            element: <DashboardNotes />,
          },
          {
            path: 'books',
            element: <DashboardBooks />,
          },
          {
            path: 'recycles',
            element: <DashboardRecycles />,
          },
          {
            path: 'groups',
            element: <DashboardGroups />,
          },
          {
            path: 'team',
            element: <DashboardTeam />,
            children: [
              {
                index: true,
                element: <DashboardTeamHome />,
              },
            ],
          },
        ],
      },
      {
        path: '/docx',
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <Docx />,
          },
          {
            path: ':id',
            element: <DocxDetail />,
          },
        ],
      },
      {
        path: '/docx-setting',
        element: <DocxSetting />,
        children: [
          {
            index: true,
            element: <DocxSettingBasic />,
          },
        ],
      },
      {
        path: '/setting',
        Component: Setting,
        children: [
          {
            path: 'profile',
            element: <ProfileSetting />,
          },
          {
            path: 'notifications',
            element: <NotificationsSetting />,
          },
          {
            path: 'authorizations',
            element: <AuthorizationsSetting />,
          },
          {
            path: 'safety',
            element: <SafetySetting />,
          },
          {
            path: 'stats',
            element: <StatsSetting />,
          },
          {
            path: 'tokens',
            element: <TokensSetting />,
          },
        ],
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/organization/new',
        element: <NewOrganization />,
      },
    ],
  },
  {
    path: '/singin',
    element: <Singin />,
  },
  {
    path: '/forget-password',
    element: <ForgetPassword />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
