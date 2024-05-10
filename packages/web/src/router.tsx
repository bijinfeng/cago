import { createBrowserRouter } from 'react-router-dom';

import BlogLayout from './layout/blog-layout';
import ProtectedLayout from './layout/protected-layout';

import { ErrorPage } from './views/404';

import NewOrganization from '@/views/organization/new';

import Dashboard from './views/dashboard';
import DashboardBooks from './views/dashboard/books';
import DashboardCollections from './views/dashboard/collections';
import DashboardHome from './views/dashboard/home';
import DashboardNotes from './views/dashboard/notes';

import DocxSettingBasic from './views/docx-setting/basic';
import DocxSetting from './views/docx-setting/index';
import DocxDetail from './views/docx/detail';
import Docx from './views/docx/home';

import ForgetPassword from './views/forget-password';

import Setting from './views/setting';
import AuthorizationsSetting from './views/setting/authorizations';
import NotificationsSetting from './views/setting/notifications';
import ProfileSetting from './views/setting/profile';
import SafetySetting from './views/setting/safety';
import StatsSetting from './views/setting/stats';
import TokensSetting from './views/setting/tokens';

import Singin from './views/singin';

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
