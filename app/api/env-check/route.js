// Test API route to check environment variables
export async function GET() {
  const envCheck = {
    DATABASE_URL: !!process.env.DATABASE_URL,
    DIRECT_URL: !!process.env.DIRECT_URL,
    CLERK_SECRET_KEY: !!process.env.CLERK_SECRET_KEY,
    GEMINI_API_KEY: !!process.env.GEMINI_API_KEY,
    RESEND_API_KEY: !!process.env.RESEND_API_KEY,
    ARCJET_KEY: !!process.env.ARCJET_KEY,
    INNGEST_EVENT_KEY: !!process.env.INNGEST_EVENT_KEY,
    INNGEST_SIGNING_KEY: !!process.env.INNGEST_SIGNING_KEY,
  };

  return Response.json({
    message: "Environment variables check",
    variables: envCheck,
  });
}
