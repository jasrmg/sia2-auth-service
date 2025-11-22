import type { PasswordStrength } from "../types/auth.types";

export interface PasswordValidationResult {
  strength: PasswordStrength;
  score: number; // 0-100
  feedback: string[];
}

export const validatePassword = (
  password: string
): PasswordValidationResult => {
  let score = 0;
  const feedback: string[] = [];

  // Length check
  if (password.length >= 8) {
    score += 25;
  } else {
    feedback.push("At least 8 characters");
  }

  // Uppercase check
  if (/[A-Z]/.test(password)) {
    score += 25;
  } else {
    feedback.push("One uppercase letter");
  }

  // Lowercase check
  if (/[a-z]/.test(password)) {
    score += 25;
  } else {
    feedback.push("One lowercase letter");
  }

  // Number or special character check
  if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) {
    score += 25;
  } else {
    feedback.push("One number or special character");
  }

  // Determine strength
  let strength: PasswordStrength;
  if (score <= 50) {
    strength = "weak";
  } else if (score <= 75) {
    strength = "medium";
  } else {
    strength = "strong";
  }

  return { strength, score, feedback };
};
