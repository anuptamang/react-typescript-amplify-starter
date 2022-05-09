import { Action } from 'redux'

/** A high-level generic object. */
export type GenericObject<T = unknown> = { [key: string]: T }

/** A high-level error object. */
export interface Error {
  error: string
}

/** Generic type to allow null. */
export type Nullable<T> = T | null

export interface ReducerActionType extends Action {
  payload: GenericObject<any>
}

export enum Language {
  En = 'en',
  NP = 'np',
}
