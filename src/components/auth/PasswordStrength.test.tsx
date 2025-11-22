import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import PasswordStrength from "./PasswordStrength";

describe("PasswordStrength Component", () => {
  it("should not render when password is empty", () => {
    const { container } = render(<PasswordStrength password="" />);
    expect(container.firstChild).toBeNull();
  });

  it("should render strength indicator for weak password", () => {
    const { container } = render(<PasswordStrength password="weak" />);
    const text = container.textContent;
    expect(text).toContain("weak password");
  });

  it("should render strength indicator for medium password", () => {
    const { container } = render(<PasswordStrength password="Medium123" />);
    const text = container.textContent;
    expect(text).toContain("medium password");
  });

  it("should render strength indicator for strong password", () => {
    const { container } = render(<PasswordStrength password="Strong123!" />);
    const text = container.textContent;
    expect(text).toContain("strong password");
  });

  it("should display strength bars", () => {
    const { container } = render(<PasswordStrength password="password123" />);
    const bars = container.querySelectorAll("div > div");
    expect(bars.length).toBeGreaterThan(0);
  });
});
