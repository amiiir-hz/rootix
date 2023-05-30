import { ResStatusType } from './graphql.type'

export type ProviderNameType =
  | 'USER'
  | 'DOCTOR'
  | 'CLINIC'
  | 'HOSPITAL'
  | 'LAB'
  | 'PHARMACY'
  | 'DENTIST'
  | 'MEDICAL_BEAUTY_CENTER'
  | 'VETERINARIAN'
  | 'NUTRITION_EXPERT'
  | 'HOME_SERVICE'
  | 'AMBULANCE'

export type UserType = {
  email?: string
  created_at: Date
  userTypes: UserTypes
  userRole: string
  verify_type: number
  is_admin: number
}

export type LoginType = 'GOOGLE' | 'FACE_BOOK'

export type UserTypes = 'ADMIN' | 'CLIENT' 

export type ResponseBaseOfUser = {
  result: UserType
  status: ResStatusType
}
