import { useState, useEffect } from "react";

export const useLoginAttempts = (maxAttempts: number = 3) => {
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutTime, setLockoutTime] = useState<number | null>(null);

  useEffect(() => {
    if (attempts >= maxAttempts) {
      setIsLocked(true);
      const lockTime = Date.now() + 15 * 60 * 1000; // 15 minutes lockout
      setLockoutTime(lockTime);

      const timer = setTimeout(() => {
        setAttempts(0);
        setIsLocked(false);
        setLockoutTime(null);
      }, 15 * 60 * 1000);

      return () => clearTimeout(timer);
    }
  }, [attempts, maxAttempts]);

  const incrementAttempts = () => setAttempts((prev) => prev + 1);
  const resetAttempts = () => {
    setAttempts(0);
    setIsLocked(false);
    setLockoutTime(null);
  };

  const remainingAttempts = maxAttempts - attempts;

  return {
    attempts,
    isLocked,
    lockoutTime,
    remainingAttempts,
    incrementAttempts,
    resetAttempts,
  };
};
