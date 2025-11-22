import { validatePassword } from "../../utils/passwordValidation";
import type { PasswordStrength as PasswordStrengthType } from "../../types/auth.types";

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  if (!password) return null;

  const { strength, score } = validatePassword(password);

  const getColor = (strengthLevel: PasswordStrengthType) => {
    switch (strengthLevel) {
      case "weak":
        return "#d33738";
      case "medium":
        return "#f59e0b";
      case "strong":
        return "#2ea043";
    }
  };

  const getBarCount = () => {
    if (score <= 25) return 1;
    if (score <= 50) return 2;
    if (score <= 75) return 3;
    return 4;
  };

  const barCount = getBarCount();
  const color = getColor(strength);

  return (
    <div style={{ marginTop: "0.5rem" }}>
      <div style={{ display: "flex", gap: "0.25rem", marginBottom: "0.25rem" }}>
        {[1, 2, 3, 4].map((bar) => (
          <div
            key={bar}
            style={{
              flex: 1,
              height: "4px",
              borderRadius: "2px",
              backgroundColor:
                bar <= barCount ? color : "rgba(240, 246, 252, 0.2)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
      <p
        style={{
          fontSize: "0.75rem",
          color: color,
          textTransform: "capitalize",
          fontWeight: 500,
        }}
      >
        {strength} password
      </p>
    </div>
  );
};

export default PasswordStrength;
