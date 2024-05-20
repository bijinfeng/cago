import React from 'react';
import { BookGroup } from './book-group';
import { BookGroupItem } from './book-group-item';

export const BookGrid = () => {
  return (
    <div className="mt-4">
      <BookGroup>
        <BookGroupItem />
      </BookGroup>
    </div>
  );
};
