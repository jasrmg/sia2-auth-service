import "@testing-library/jest-dom";
import { vi } from "vitest";

// 1. Mock Firebase Auth
vi.mock("firebase/auth", () => ({
  getAuth: vi.fn(() => ({})),
  signInWithEmailAndPassword: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
  onAuthStateChanged: vi.fn(() => () => {}), // Returns a dummy unsubscribe function
  GoogleAuthProvider: vi.fn(),
}));

// 2. Mock React Router if you use useNavigate in components
const mockedUseNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});
