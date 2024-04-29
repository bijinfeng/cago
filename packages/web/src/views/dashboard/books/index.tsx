import React from 'react';
import { CommonBooks } from './common-books';
import { BookSegmented } from '@/components/book-segmented';

const DashboardBooks: React.FC = () => {
  return (
    <div className="px-9 py-7">
      <div className="text-lg font-medium">知识库</div>
      <CommonBooks />
      <BookSegmented className="mt-7" />
    </div>
  );
};

export default DashboardBooks;
