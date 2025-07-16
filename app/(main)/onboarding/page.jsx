import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { checkUser } from "@/lib/checkUser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { Button } from "@/components/ui/button";
import { PlusCircle, Wallet, TrendingUp, Shield } from "lucide-react";

export default async function OnboardingPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }

  const user = await checkUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Welth! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Let's get your financial journey started
          </p>
          <p className="text-gray-500">
            Create your first account to begin tracking your finances
          </p>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Wallet className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Track Accounts</h3>
              <p className="text-sm text-gray-600">
                Monitor all your bank accounts in one place
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">AI Insights</h3>
              <p className="text-sm text-gray-600">
                Get smart recommendations for your spending
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secure & Private</h3>
              <p className="text-sm text-gray-600">
                Your financial data is protected with enterprise security
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Create First Account */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Create Your First Account</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-gray-600">
              Start by adding your first bank account or financial account to begin tracking your finances.
            </p>
            
            <CreateAccountDrawer>
              <Button size="lg" className="w-full max-w-md">
                <PlusCircle className="mr-2 h-5 w-5" />
                Create First Account
              </Button>
            </CreateAccountDrawer>
            
            <div className="pt-4">
              <Button variant="link" asChild>
                <a href="/dashboard">
                  Skip for now - Take me to dashboard
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
