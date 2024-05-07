import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_ORGANIZATION } from '@/services/graphql';
import { initUserStore } from '@/store/user';
import { initGloablStore } from '@/store/global';
import { protectedLoader } from './loader';

const ProtectedLayout: React.FC = () => {
  const user = useLoaderData() as KB.UserInfo;
  const { loading, data } = useQuery(GET_ORGANIZATION);

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
