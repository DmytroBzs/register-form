export interface RegistrationState {
  step: number;
  formData: RegistrationFormData;
  isLoading: boolean;
  error?: string;
}
export interface AddressData {
  street: string;
  city: string;
  country: string;
  zip: string;
  state?: string;
}

export interface SurveyData {
  role?: string;
  experience?: string;
}

export interface RegistrationFormData {
  password?: string;
  profile?: ProfileData;
  address?: AddressData;
  survey?: SurveyData;
}

export interface ProfileData {
  firstName: string;
  lastName: string;
  phone: string;
  organization?: string;
}
