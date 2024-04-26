import React from 'react';
import { CommonBooks } from './common-books';

const DashboardBooks: React.FC = () => {
  return (
    <div className="px-9 py-7">
      <div className="text-lg font-medium">知识库</div>
      <CommonBooks />
    </div>
  );
};

export default DashboardBooks;
