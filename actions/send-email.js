"use server";

import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
  // Check if API key exists
  if (!process.env.RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY environment variable is not set");
    throw new Error("RESEND_API_KEY environment variable is not set");
  }

  console.log("📧 RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
  console.log("📧 API key starts with:", process.env.RESEND_API_KEY.substring(0, 10));

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "BudgetZilla App <onboarding@resend.dev>",
      to,
      subject,
      react,
    });

    console.log("✅ Email sent successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    return { success: false, error };
  }
}
