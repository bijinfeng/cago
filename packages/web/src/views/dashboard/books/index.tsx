import React from 'react';
import { useRequest } from 'ahooks';

import { BookSegmented } from '@/components/book-segmented';
import { CommonlyUsed } from '@/components/commonly-used';
import { getBook } from '@/services';

const DashboardBooks: React.FC = () => {
  const { data, loading } = useRequest(getBook);

  return (
    <div className="px-9 py-7">
      <div className="text-lg font-medium">知识库</div>
      <CommonlyUsed />
      <BookSegmented className="mt-7" widthFilter loading={loading} />
    </div>
  );
};

export default DashboardBooks;
