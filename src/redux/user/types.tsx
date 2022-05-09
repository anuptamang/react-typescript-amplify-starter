import { SagaReturnType } from '@redux-saga/core/effects'
import { getUserProfileApi } from './api'
import {
  CLEAR_USER_PROFILE,
  GET_ALL_USERS,
  GET_ALL_USERS_FAILED,
  GET_ALL_USERS_SUCCESS,
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILED,
  GET_USER_PROFILE_SUCCESS,
} from './constant'

export interface RequestGetUserProfileSuccessPayload {
  message: string
  data: UserProfileData
}
export interface RequestGetUserProfileFailedPayload {
  message: string
}

export interface AllUserSuccessPayload {
  message: string
  data: AllUserResponse
}
export interface AllUserFailedPayload {
  message: string
}

export interface error {
  attribute: string
  msg: string
}
// TYPES

export type GetUserProfileAction = {
  type: typeof GET_USER_PROFILE
}
export type GetUserProfileRequestSuccess = {
  type: typeof GET_USER_PROFILE_SUCCESS
  payload: RequestGetUserProfileSuccessPayload
}
export type GetUserProfileRequestFailed = {
  type: typeof GET_USER_PROFILE_FAILED
  payload: RequestGetUserProfileFailedPayload
}

export type AllUserAction = {
  type: typeof GET_ALL_USERS
}
export type AllUserSuccess = {
  type: typeof GET_ALL_USERS_SUCCESS
  payload: AllUserSuccessPayload
}
export type AllUserFailed = {
  type: typeof GET_ALL_USERS_FAILED
  payload: AllUserFailedPayload
}

export type ClearUserProfileData = {
  type: typeof CLEAR_USER_PROFILE
}

export type UserProfileActions =
  | GetUserProfileAction
  | GetUserProfileRequestSuccess
  | GetUserProfileRequestFailed
  | ClearUserProfileData
  | AllUserAction
  | AllUserSuccess
  | AllUserFailed

//? Response type of api for saga

//types for api
export type GetUserProfileResponseSaga = SagaReturnType<
  typeof getUserProfileApi
>

//?TYPES FOR API RESPONSE DATA

//userProfile response

export type UserProfileData = {
  profileDetail: User
  message: string
  status: boolean
}

// export interface ProfileDetail {
//   _cls: string;
//   creation_date: Date;
//   modified_date: Date;
//   is_deleted: boolean;
//   cognito_username: string[];
//   cognito_role: string;
//   signup_email: string;
//   enabled: boolean;
//   fullname: string;
//   profile_picture?: string;
//   cover_image?: string;
//   gender: string;
//   job_title: string;
//   company_name: string;
//   about: string;
//   website: string;
//   card_title: string;
//   country: string;
//   phone_number: Email[];
//   email: Email[];
//   facebook_url: string;
//   twitter_url: string;
//   whatsapp_number: string;
//   viber_number: string;
//   qrcode?: string;
//   id: string;
//   profile_picture_url?: string;
//   cover_image_url?: string;
// }

export interface Email {
  value: string
  type: string
}

export type AllUserResponse = {
  data: User[]
}

export interface User {
  id: string
  _cls: string
  created_at: number
  modified_at: number
  userName: string
  userSub: string
  signUpMethod: string
  role: string
  status: string
  status_modified_at: number
  fullName: string
  thumbnailUrl: string
  accountType: string
  basicInfo: BasicInfo
  workExperience: WorkExperience[]
  otherInfo: OtherInfo
  education: Education[]
}

export interface BasicInfo {
  aboutMe?: string
  gender?: string
  socialLinks?: SocialLinks | {}
  phoneNumber?: string
}

export interface SocialLinks {
  twitter?: string
  facebook?: string
  instagram?: string
  linkedin?: string
  youtube?: string
}

export interface Education {
  institution: string
  startDate: string
  endDate: string
  degree: string
}

export interface OtherInfo {
  areasOfInterest?: string[]
  prefferedSubject?: string[]
  learningPreference?: string[]
  formOfLearning?: string[]
}

export interface WorkExperience {
  designation: string
  company: string
  startDate: string
  endDate: string
}
