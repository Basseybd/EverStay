# EverStay: Your home, your haven.

EverStay is a full-stack marketplace for short- and long-term homestays, inspired by [Airbnb.com](https://www.airbnb.com/). This application is built using:

## Technologies

- **UI**: React, TypeScript, Tailwind CSS
- **Database**: Prisma (type-safe models), MongoDB
- **Authentication**: NextAuth
- **Uploads**: Cloudinary CDN

## Running the Dev Server

1. Install dependencies:

```sh
yarn install
```

2. Start the development server:

```sh
yarn run dev
```

## Viewing the Dev Server

Open [http://localhost:3000](http://localhost:3000) in your browser to view the result.

## Pushing to MongoDB Database

Run the following command to push your Prisma schema to the database:

```sh
npx prisma db push
```

The project is deployed on Vercel and can be viewed [here](https://everstay.vercel.app/).

---
