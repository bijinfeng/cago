import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_ORGANIZATION } from '@/services/graphql';
import { initUserStore } from '@/store/user';
import { protectedLoader } from './loader';

const ProtectedLayout: React.FC = () => {
  const user = useLoaderData() as KB.UserInfo;
  const { loading, data } = useQuery(GET_ORGANIZATION);

  initUserStore(user);

  console.log(loading, data);

  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
};

export default Object.assign(ProtectedLayout, { loader: protectedLoader });
