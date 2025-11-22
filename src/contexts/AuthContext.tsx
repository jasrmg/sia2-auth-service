import { createContext } from "react";
import type { SignupFormData, LoginFormData, User } from "../types/auth.types";

export interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signup: (data: SignupFormData) => Promise<void>;
  login: (data: LoginFormData) => Promise<void>;
  logout: () => Promise<void>;
  sendVerificationEmail: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
