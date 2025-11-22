export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
}

export interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signup: (data: SignupFormData) => Promise<void>;
  login: (data: LoginFormData) => Promise<void>;
  logout: () => Promise<void>;
  sendVerificationEmail: () => Promise<void>;
}

export type PasswordStrength = "weak" | "medium" | "strong";

export interface PasswordValidationResult {
  strength: PasswordStrength;
  score: number;
  feedback: string[];
}
