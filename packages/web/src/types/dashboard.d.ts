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
    type: "Book" | "Group";
    order_num: number;
    target_id: number;
    organization_id: number;
    user_id: number;
    createdAt: string;
    updatedAt: string;
  }
}
