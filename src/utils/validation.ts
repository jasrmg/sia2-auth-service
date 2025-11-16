export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePasswordStrength = (
  password: string
): {
  isValid: boolean;
  strength: "weak" | "medium" | "strong";
  feedback: string[];
} => {
  const feedback: string[] = [];
  let strength: "weak" | "medium" | "strong" = "weak";

  if (password.length < 8) {
    feedback.push("Password must be at least 8 characters");
  }
  if (!/[A-Z]/.test(password)) {
    feedback.push("Include at least one uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    feedback.push("Include at least one lowercase letter");
  }
  if (!/[0-9]/.test(password)) {
    feedback.push("Include at least one number");
  }
  if (!/[!@#$%^&*]/.test(password)) {
    feedback.push("Include at least one special character (!@#$%^&*)");
  }

  const validChecks = 5 - feedback.length;
  if (validChecks >= 4) strength = "strong";
  else if (validChecks >= 3) strength = "medium";

  return {
    isValid: feedback.length === 0,
    strength,
    feedback,
  };
};
