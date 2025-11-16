export interface User {
  id: string;
  email: string;
  name: string;
  isVerified: boolean;
  twoFactorEnabled: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export interface TwoFactorData {
  code: string;
  email: string;
}
