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

  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  // Length check
  if (password.length >= 8) {
    score += 25;
  } else {
    feedback.push("At least 8 characters");
  }

  // Uppercase check
  if (hasUpper) {
    score += 20;
  } else {
    feedback.push("One uppercase letter");
  }

  // Lowercase check
  if (hasLower) {
    score += 20;
  } else {
    feedback.push("One lowercase letter");
  }

  // Number or special character check
  if (hasSpecial) {
    score += 15;
  } else {
    feedback.push("One number or special character");
  }

  // Determine strength
  let strength: PasswordStrength;

  if (password.length >= 8 && hasUpper && hasLower && hasNumber && hasSpecial) {
    strength = "strong";
  } else if (password.length >= 8 && hasUpper && hasLower && hasNumber) {
    strength = "medium";
  } else {
    strength = "weak";
  }

  return { strength, score, feedback };
};
