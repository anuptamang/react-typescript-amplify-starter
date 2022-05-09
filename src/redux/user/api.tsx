import { API } from "aws-amplify";

// export interface UserDetail {
// 	email: string
// 	gender?: string
// 	dob?: string
// 	name?: string
// 	address?: string
// 	phoneNumber?: string
// 	interests?: Array<string>
// }

export interface GetUserType {
  page: any;
  limit: any;
  name?: string;
  role?: string;
  status?: string;
  date?: any;
}

export const getUserProfileApi = (): Promise<any> => {
  const url = `/get_profile`;
  return API.get("backendApi", url, {});
};

export const getUsersApi = ({
  page,
  limit,
  name,
  role,
  status,
  date,
}: GetUserType): Promise<any> => {
  let url;
  if (name) {
    url = `/admin/user?page=${page}&limit=${limit}&name=${name}`;
  } else if (role) {
    url = `/admin/user?page=${page}&limit=${limit}&role=${role}`;
  } else if (status) {
    url = `/admin/user?page=${page}&limit=${limit}&status=${status}`;
  } else {
    url = `/admin/user?page=${page}&limit=${limit}&date=${date}`;
  }
  return API.get("backendApi", url, {});
};

export const viewUserProfileApi = ({ id }): Promise<any> => {
  const url = `/admin/user/${id}`;
  return API.get("backendApi", url, {});
};

export const updateUserStatusApi = ({ id, status }): Promise<any> => {
  const url = `/admin/user/${id}`;
  return API.put("backendApi", url, { body: { status: status } });
};
