import React from 'react';
import { BookSegmented } from '@/components/book-segmented';
import { CommonlyUsed } from '@/components/commonly-used';

const DashboardBooks: React.FC = () => {
  return (
    <div className="px-9 py-7">
      <div className="text-lg font-medium">知识库</div>
      <CommonlyUsed />
      <BookSegmented className="mt-7" widthFilter />
    </div>
  );
};

export default DashboardBooks;
