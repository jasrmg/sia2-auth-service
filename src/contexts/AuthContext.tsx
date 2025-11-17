import { createContext, useEffect, useState, ReactNode } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import type { User as FirebaseUser } from "firebase/auth";
import { auth } from "../config/firebase";
import type { SignupFormData, LoginFormData, User } from "../types/auth.types";

interface AuthContextType {
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

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = async (data: SignupFormData) => {
    const { firstName, lastName, email, password } = data;

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Update profile with display name
    await updateProfile(userCredential.user, {
      displayName: `${firstName} ${lastName}`,
    });

    // Send verification email
    await sendEmailVerification(userCredential.user);
  };

  const login = async (data: LoginFormData) => {
    const { email, password } = data;
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const sendVerificationEmail = async () => {
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
        });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    loading,
    signup,
    login,
    logout,
    sendVerificationEmail,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
