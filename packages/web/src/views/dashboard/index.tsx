import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/dashboard-sidebar';
import { DashboardLayout } from '@/components/dashboard-layout';
import { useFavicon } from 'ahooks';
import { useGloablStore } from '@/store/global';
import { getImageUrl } from '@/lib/utils';

export const Dashboard = () => {
  const { organization } = useGloablStore();

  useFavicon(getImageUrl(organization.logo.url!));

  return (
    <DashboardLayout
      left={({ isCollapsed }) => <Sidebar isCollapsed={isCollapsed} />}
      right={<Outlet />}
    />
  );
};
