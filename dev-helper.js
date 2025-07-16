#!/usr/bin/env node
/**
 * Development Helper Script
 * Quick commands for development workflow
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];

const commands = {
  'check-env': checkEnvironment,
  'setup': setupProject,
  'dev': startDevelopment,
  'db-studio': openDatabaseStudio,
  'help': showHelp
};

async function checkEnvironment() {
  console.log('🔍 Checking environment setup...\n');
  
  const envPath = path.join(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) {
    console.log('❌ .env file not found');
    return;
  }
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  const requiredVars = [
    'DATABASE_URL',
    'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY',
    'CLERK_SECRET_KEY'
  ];
  
  const optionalVars = [
    'GEMINI_API_KEY',
    'RESEND_API_KEY',
    'ARCJET_KEY'
  ];
  
  console.log('📋 Required Environment Variables:');
  requiredVars.forEach(varName => {
    const hasValue = envContent.includes(`${varName}=`) && 
                    !envContent.includes(`${varName}=\n`) && 
                    !envContent.includes(`${varName}=`);
    console.log(`${hasValue ? '✅' : '❌'} ${varName}`);
  });
  
  console.log('\n📋 Optional Environment Variables:');
  optionalVars.forEach(varName => {
    const hasValue = envContent.includes(`${varName}=`) && 
                    !envContent.includes(`${varName}=\n`) && 
                    !envContent.includes(`${varName}=`);
    console.log(`${hasValue ? '✅' : '⚪'} ${varName}`);
  });
  
  console.log('\n💡 Run "npm run dev-helper setup" for setup guidance');
}

async function setupProject() {
  console.log('🚀 AI Finance Platform Setup Helper\n');
  
  console.log('1. Database Setup:');
  console.log('   • Go to https://supabase.com');
  console.log('   • Create project and get connection string');
  console.log('   • Add DATABASE_URL to .env file');
  console.log('   • Run: npm run setup-db\n');
  
  console.log('2. Authentication Setup:');
  console.log('   • Go to https://clerk.com');
  console.log('   • Create app and get API keys');
  console.log('   • Add CLERK keys to .env file\n');
  
  console.log('3. Start Development:');
  console.log('   • Run: npm run dev');
  console.log('   • Visit: http://localhost:3000\n');
  
  console.log('📖 See SETUP_GUIDE_COMPLETE.md for detailed instructions');
}

async function startDevelopment() {
  console.log('🚀 Starting development server...\n');
  execSync('npm run dev', { stdio: 'inherit' });
}

async function openDatabaseStudio() {
  console.log('🗄️ Opening Prisma Studio...\n');
  execSync('npx prisma studio', { stdio: 'inherit' });
}

function showHelp() {
  console.log('🛠️  AI Finance Platform Development Helper\n');
  console.log('Available commands:');
  console.log('  check-env    - Check environment variables');
  console.log('  setup        - Show setup instructions');
  console.log('  dev          - Start development server');
  console.log('  db-studio    - Open database studio');
  console.log('  help         - Show this help\n');
  console.log('Usage: npm run dev-helper <command>');
}

// Run command
if (commands[command]) {
  commands[command]();
} else {
  console.log(`❌ Unknown command: ${command}\n`);
  showHelp();
}
