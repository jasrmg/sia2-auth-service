import { describe, it, expect } from "vitest";
import { validatePassword } from "./passwordValidation";

describe("Password Validation", () => {
  it("should return weak for password with only letters", () => {
    const result = validatePassword("abcdefgh");
    expect(result.strength).toBe("weak");
  });

  it("should return weak for short password with all requirements", () => {
    // Pass1! has: uppercase, lowercase, number, special char = 4 items
    // But only 6 chars (< 8) so score = 75 (missing length) = medium
    const result = validatePassword("Pass1!");
    expect(result.strength).toBe("weak");
  });

  it("should return strong for password with all requirements", () => {
    const result = validatePassword("Password123!");
    expect(result.strength).toBe("strong");
  });

  it("should require at least 8 characters", () => {
    const result = validatePassword("Pass1!");
    expect(result.feedback).toContain("At least 8 characters");
  });

  it("should require uppercase letter", () => {
    const result = validatePassword("password123!");
    expect(result.feedback).toContain("One uppercase letter");
  });

  it("should require lowercase letter", () => {
    const result = validatePassword("PASSWORD123!");
    expect(result.feedback).toContain("One lowercase letter");
  });

  it("should require number or special character", () => {
    const result = validatePassword("Passwordabc");
    expect(result.feedback).toContain("One number or special character");
  });

  it("should calculate score correctly for weak password", () => {
    const result = validatePassword("abcdefgh");
    expect(result.score).toBeLessThanOrEqual(50);
  });

  it("should calculate score correctly for strong password", () => {
    const result = validatePassword("Password123!");
    expect(result.score).toBeGreaterThan(75);
  });

  it("should return empty feedback for strong password", () => {
    const result = validatePassword("Robust123!");
    expect(result.feedback.length).toBe(0);
  });
});
