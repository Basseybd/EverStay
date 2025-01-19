# EverStay

**EverStay** is a full-stack web application for listing, discovering, and booking rental properties—similar to Airbnb. It’s built with the latest **Next.js 13** App Router for fast, modern server-rendered pages and optimized performance.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Getting Started](#getting-started)
5. [Database Setup](#database-setup)
6. [Environment Variables](#environment-variables)
7. [Deployment](#deployment)
8. [License](#license)

---

## Features

- **Property Listings**: Easily list your home or browse available rentals.
- **Booking Workflow**: Search by date, location, and property details.
- **User Authentication**: Secure sign-up/sign-in flows via NextAuth.
- **Image Uploads**: Seamless image hosting with [Cloudinary CDN](https://cloudinary.com/).
- **Responsive UI**: Tailwind CSS ensures a consistent, beautiful design across devices.
- **Scalable Database**: Prisma + MongoDB for robust data handling.

---

## Tech Stack

- **Front End**: [Next.js 13](https://nextjs.org/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [NextAuth](https://next-auth.js.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Prisma](https://www.prisma.io/)
- **File Storage**: [Cloudinary](https://cloudinary.com/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [MongoDB](https://www.mongodb.com/) database instance (local or cloud)
- A [Cloudinary](https://cloudinary.com/) account for image uploads
- Environment variables set up for all relevant keys (see [Environment Variables](#environment-variables))

---

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Basseybd/EverStay.git
   cd EverStay
   ```

2. **Install dependencies**:

   ```bash
   # Using yarn
   yarn install

   # or using npm
   npm install
   ```

3. **Set up environment variables** (see [Environment Variables](#environment-variables)).

4. **Start the development server**:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

   Your app should now be running on [http://localhost:3000](http://localhost:3000).

---

## Database Setup

EverStay uses MongoDB via Prisma for a type-safe schema. After configuring your environment variables:

1. **Push your Prisma schema to the database**:

   ```bash
   npx prisma db push
   ```

2. **(Optional) Generate Prisma Client** if not already generated:

   ```bash
   npx prisma generate
   ```

3. Your MongoDB database is now ready to store listings, user data, and more.

---

## Environment Variables

Create a `.env` (or `.env.local`) file at the root of your project and supply the following variables:

```bash
# MongoDB Connection
DATABASE_URL="mongodb+srv://YOUR_USER:YOUR_PASSWORD@cluster0.mongodb.net/EverStay?retryWrites=true&w=majority"

# NextAuth
NEXTAUTH_SECRET="A_LONG_SECURE_STRING"
NEXTAUTH_URL="http://localhost:3000"  # or your production URL

# Cloudinary
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

**Important**: Never commit your real credentials to version control. Use environment-specific files or a secrets manager in production.

---

## Deployment

EverStay is hosted on [Vercel](https://vercel.com/). To deploy:

1. **Push your code** to a GitHub repository.
2. **Connect** the repository to Vercel.
3. **Add environment variables** in your Vercel dashboard.
4. **Trigger a deployment**—Vercel will handle building and serving your Next.js project.

For custom domains, project settings, or advanced configurations, refer to the [Vercel documentation](https://vercel.com/docs).

---

## License

This project is open-source under the [MIT License](./LICENSE). You’re free to clone, modify, and distribute as per the license terms.

---

### Questions or Feedback?

Feel free to reach out via [GitHub Issues](https://github.com/Basseybd/EverStay/issues) if you encounter any bugs or have feature requests. Happy coding!
```
