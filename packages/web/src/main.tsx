import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from '@/components/config-provider';
import '@pingtou/ui/index.css';

import { router } from './router';
import { FormDialog } from '@/components/form-dialog';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <RouterProvider router={router} />
      <FormDialog />
    </ConfigProvider>
  </React.StrictMode>,
);
