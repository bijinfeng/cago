import React from 'react';
import { Toaster, TooltipProvider } from '@pingtou/ui';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { ThemeProvider } from '@/components/theme';

export const ConfigProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TooltipProvider>
        <ThemeProvider>
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </TooltipProvider>
    </DndProvider>
  );
};
