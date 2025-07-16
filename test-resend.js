// Test environment variables
console.log("🔍 Environment Variable Test:");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
console.log("RESEND_API_KEY value:", process.env.RESEND_API_KEY?.substring(0, 10) + "...");
console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);
console.log("CLERK_SECRET_KEY exists:", !!process.env.CLERK_SECRET_KEY);

// Try to create Resend client
try {
  const { Resend } = require("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log("✅ Resend client created successfully");
} catch (error) {
  console.error("❌ Failed to create Resend client:", error.message);
}
