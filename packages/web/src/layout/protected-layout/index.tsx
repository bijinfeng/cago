import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { useRequest } from 'ahooks';

import { initUserStore } from '@/store/user';
import { initGloablStore } from '@/store/global';
import { protectedLoader } from './loader';
import { getGlobalData } from '@/services';

const ProtectedLayout: React.FC = () => {
  const user = useLoaderData() as KB.UserInfo;
  const { data, loading } = useRequest(getGlobalData);

  if (loading || !data) return null;

  initUserStore(user);
  initGloablStore(data);

  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
};

export default Object.assign(ProtectedLayout, { loader: protectedLoader });
