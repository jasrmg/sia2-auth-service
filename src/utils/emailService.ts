import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

interface LockoutEmailParams {
  userEmail: string;
  userName: string;
}

export const sendLockoutEmail = async ({
  userEmail,
  userName,
}: LockoutEmailParams) => {
  try {
    const templateParams = {
      user_email: userEmail,
      user_name: userName || "User",
      lockout_time: new Date().toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      to_email: userEmail, // This sends to the user's email
    };

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log("Lockout email sent successfully:", response);
    return { success: true };
  } catch (error) {
    console.error("Failed to send lockout email:", error);
    return { success: false, error };
  }
};
