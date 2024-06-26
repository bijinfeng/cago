import EventEmitter from 'eventemitter3';

interface MyEvents {
  'create-book-stack': () => void;
  'create-team': () => void;
}

export const formEvent = new EventEmitter<MyEvents>();
