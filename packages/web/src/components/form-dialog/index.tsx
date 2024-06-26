import type { FC } from 'react';

import { BookStackDialog } from './book-stack';
import { TeamDialog } from './team';

export const FormDialog: FC = () => {
  return (
    <>
      <BookStackDialog />
      <TeamDialog />
    </>
  );
};
