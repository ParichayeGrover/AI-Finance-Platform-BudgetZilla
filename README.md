# AI Finance Platform - BudgetZilla

A comprehensive AI-powered personal finance management platform built with Next.js 14, featuring intelligent receipt scanning, automated budgeting, and financial insights.


Hosted on : https://ai-finance-platform-budget-zilla.vercel.app/

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation &amp; Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [API Configuration](#api-configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

**BudgetZilla** is a modern, AI-powered finance management platform that helps users track their spending, manage budgets, and gain financial insights through intelligent automation. The platform uses advanced AI to scan receipts, categorize transactions, and provide personalized financial recommendations.

### What We're Serving

- **Personal Finance Management**: Complete solution for tracking income, expenses, and budgets
- **AI-Powered Receipt Scanning**: Automatically extract transaction data from receipt images
- **Intelligent Budgeting**: Smart budget recommendations and spending alerts
- **Financial Analytics**: Advanced charts and insights into spending patterns
- **Multi-Account Support**: Manage multiple bank accounts and credit cards
- **Automated Reporting**: Monthly financial reports and budget alerts via email

## Features

### Core Features

- **Smart Receipt Scanner**: AI-powered receipt scanning using Google Gemini API
- **Transaction Management**: Add, edit, and categorize transactions automatically
- **Budget Planning**: Create budgets with intelligent spending alerts
- **Multi-Account Support**: Manage multiple savings and current accounts
- **Advanced Analytics**: Interactive charts and spending pattern analysis
- **Automated Insights**: AI-generated financial recommendations
- **Email Notifications**: Automated monthly reports and budget alerts
- **Recurring Transactions**: Set up automatic recurring income/expense tracking
- **Real-time Dashboard**: Live financial overview with key metrics

### Security Features

- **Rate Limiting**: Built-in API rate limiting using ArcJet
- **User Authentication**: Secure authentication with Clerk
- **Data Protection**: Encrypted database connections
- **Input Validation**: Comprehensive form validation using Zod

### UI/UX Features

- **Modern Design**: Beautiful, responsive UI with Tailwind CSS
- **Mobile Responsive**: Optimized for all device sizes
- **Interactive Charts**: Dynamic financial visualizations using Recharts
- **Smooth Animations**: Polished user experience with micro-interactions

## 🛠️ Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **React 18** - User interface library
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Recharts** - Data visualization library
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend

- **Next.js API Routes** - Server-side API endpoints
- **Prisma ORM** - Database toolkit
- **PostgreSQL** - Primary database (via Supabase)
- **Clerk** - Authentication and user management
- **Inngest** - Background job processing
- **Resend** - Email delivery service

### AI & External APIs

- **Google Gemini API** - AI-powered receipt scanning
- **ArcJet** - Security and rate limiting

### DevOps & Tools

- **Vercel** - Deployment platform
- **Supabase** - Database hosting
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control
- **PostgreSQL** database (we recommend Supabase)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-finance-platform.git
cd ai-finance-platform
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create two environment files in the root directory:

#### `.env.local` (for local development)

```bash
# Database Configuration
DATABASE_URL="your_postgresql_connection_string"
DIRECT_URL="your_direct_postgresql_connection_string"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/dashboard"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/dashboard"

# AI & External APIs
GEMINI_API_KEY="your_google_gemini_api_key"
RESEND_API_KEY="your_resend_api_key"
ARCJET_KEY="your_arcjet_api_key"

# Inngest (Background Jobs)
INNGEST_EVENT_KEY="your_inngest_event_key"
INNGEST_SIGNING_KEY="your_inngest_signing_key"
```

#### `.env` (for production)

```bash
# Same variables as .env.local but with production values
```

## API Configuration

### Required API Keys and Setup

#### 1. Supabase (Database)

1. Go to [Supabase](https://supabase.com)
2. Create a new project
3. Get your `DATABASE_URL` and `DIRECT_URL` from Settings > Database
4. Use the connection strings in your environment variables

#### 2. Clerk (Authentication)

1. Go to [Clerk](https://clerk.com)
2. Create a new application
3. Get your publishable key and secret key
4. Configure redirect URLs in Clerk dashboard

#### 3. Google Gemini API (AI Receipt Scanning)

1. Go to [Google AI Studio](https://aistudio.google.com)
2. Create a new project
3. Enable the Gemini API
4. Generate an API key
5. Add the key to your environment variables

#### 4. Resend (Email Service)

1. Go to [Resend](https://resend.com)
2. Create an account
3. Generate an API key
4. Add the key to your environment variables

#### 5. ArcJet (Security & Rate Limiting)

1. Go to [ArcJet](https://arcjet.com)
2. Create a new project
3. Get your API key
4. Add the key to your environment variables

#### 6. Inngest (Background Jobs)

1. Go to [Inngest](https://inngest.com)
2. Create a new project
3. Get your event key and signing key
4. Add the keys to your environment variables

## Database Setup

### 1. Generate Prisma Client

```bash
npx prisma generate
```

### 2. Run Database Migrations

```bash
npx prisma db push
```

### 3. (Optional) Seed the Database

```bash
npm run setup-db
```

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

### Other Useful Commands

```bash
# Start Inngest dev server (for background jobs)
npx inngest-cli dev

# Run database migrations
npm run db-push

# Reset database (⚠️ This will delete all data)
npm run db-reset

# Email template development
npm run email
```

The application will be available at `http://localhost:3000`

## Project Structure

```
ai-finance-platform/
├── actions/                 # Server actions
│   ├── account.js          # Account management
│   ├── budget.js           # Budget operations
│   ├── dashboard.js        # Dashboard data
│   ├── send-email.js       # Email functionality
│   └── transaction.js      # Transaction operations
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (main)/            # Main application pages
│   └── api/               # API routes
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   └── [feature-components]
├── data/                 # Static data and configurations
├── emails/               # Email templates
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
├── prisma/               # Database schema and migrations
└── public/               # Static assets
```

## Usage

### Getting Started

1. **Sign Up**: Create a new account using the sign-up page
2. **Create Accounts**: Add your bank accounts (savings/current)
3. **Add Transactions**: Manually add transactions or use receipt scanning
4. **Set Budgets**: Create monthly budgets for different categories
5. **View Analytics**: Check your dashboard for spending insights

### Key Features Usage

#### Receipt Scanning

1. Go to "Add Transaction" page
2. Click "Scan Receipt with AI"
3. Upload or capture a receipt image
4. The AI will automatically extract transaction details
5. Review and save the transaction

#### Budget Management

1. Navigate to Dashboard
2. Set monthly budget amounts
3. Monitor spending against budgets
4. Receive email alerts when approaching limits

#### Financial Analytics

1. View dashboard for overview
2. Check individual account pages for detailed charts
3. Monitor spending patterns and trends
4. Get automated insights and recommendations

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add proper error handling
- Include comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## Features Roadmap

### Upcoming Features

- [ ] Mobile app (React Native)
- [ ] Bank account integration
- [ ] Advanced AI insights
- [ ] Investment tracking
- [ ] Multi-currency support
- [ ] Export to CSV/PDF
- [ ] Social features (family budgets)
- [ ] Advanced security features

## Troubleshooting

### Common Issues

1. **Database Connection Issues**

   - Check your DATABASE_URL and DIRECT_URL
   - Ensure your database is running
   - Verify network connectivity
2. **Authentication Problems**

   - Check Clerk configuration
   - Verify redirect URLs
   - Ensure API keys are correct
3. **Receipt Scanning Not Working**

   - Verify GEMINI_API_KEY is set
   - Check file size limits (5MB max)
   - Ensure proper image format
4. **Email Notifications Not Sending**

   - Check RESEND_API_KEY
   - Verify email templates
   - Check Inngest configuration

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built by Parichaye Grover
- Thanks to the open-source community
- Special thanks to Road Side Coder.

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/ai-finance-platform/issues) page
2. Create a new issue if needed
3. Contact us at gparichaye@gmail.com

---

Hope you liked the project !
