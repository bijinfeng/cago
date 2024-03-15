const mockUser: KB.UserInfo = {
  id: 1,
  username: "kebai",
  email: "2804673379@qq.com",
  provider: "local",
  confirmed: true,
  blocked: false,
  createdAt: "2024-03-04T09:37:22.939Z",
  updatedAt: "2024-03-04T09:37:22.939Z",
}

const mockBook: KB.BookInfo = {
  id: 40973277,
  createdAt: "2023-07-05T01:49:02.000Z",
  description: "科大讯飞任职期间所写的文档统一归纳处",
  layout: "Book",
  name: "科大讯飞",
  slug: "xxsdf",
  type: "Book",
  updatedAt: "2024-03-13T10:21:36.000Z",
  user: mockUser,
  userId: 1,
}

export const mockData: KB.RecentDataItem[] = [
  {
    id: 184594869,
    createdAt: "2024-02-22T06:28:27.000Z",
    title: "编辑页搜索以及日志优化方案",
    updatedAt: "2024-02-22T07:18:18.000Z",
    subjectType: "Doc",
    book: mockBook,
    user: mockUser,
  },
]
