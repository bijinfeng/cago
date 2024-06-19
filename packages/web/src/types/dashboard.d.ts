declare namespace KB {
  interface RecentDataItem {
    id: number;
    createdAt: string;
    title: string;
    updatedAt: string;
    subjectType: string;
    book: KB.BookInfo;
    user: KB.UserInfo;
  }

  interface CommonUsed {
    id: number;
    createdAt: string;
    updatedAt: string;
  }
}
