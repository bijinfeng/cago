import { api, type ResponseData } from './api';
import { USER_TOKEN } from '@/lib/constants';

export async function login(data: KB.LoginUserInfo) {
  const res = await api.post<KB.LoginResponse>('/auth/local', data);

  localStorage.setItem(USER_TOKEN, res.data.jwt);
  return res.data.user;
}

// 注册用户
export async function register(data: KB.RegisterUserInfo) {
  const res = await api.post<KB.LoginResponse>('/auth/local/register', data);

  localStorage.setItem(USER_TOKEN, res.data.jwt);
  return res.data.user;
}

// 获取用户信息
export async function getUserInfo() {
  const res = await api.get<KB.UserInfo>('/users/me');
  return res.data;
}

// 上传图片
export async function uploadImage(file: File | Blob) {
  const form = new FormData();
  form.append('files', file);

  const res = await api.post<KB.UploadFile[]>('/upload', form);
  return res.data[0];
}

// 获取常用使用
export const getCommonUsed = async () => {
  const res = await api.get<ResponseData<KB.CommonUsed[]>>('/common-useds');
  return res.data;
};

export const getOrganization = async () => {
  const res = await api.get<ResponseData<KB.Organization[]>>('/organizations', {
    params: { populate: '*' },
  });
  return res.data;
};

export const getGlobalData = async () => {
  const [commonUsed, organization] = await Promise.all([getCommonUsed(), getOrganization()]);

  return { commonUsed, organization };
};

export const addCommonUsed = async (data: Pick<KB.CommonUsed, "type" | "target_id">) => {
  const res = await api.post<ResponseData<KB.CommonUsed>>('/common-useds', { data });
  return res.data;
};

export const getBook = async () => {
  const res = await api.get<ResponseData<KB.BookInfo[]>>('/books');
  return res.data;
}
