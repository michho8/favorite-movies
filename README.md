This is a project to demonstrate the following:
- Google NextAuth for signing in and displaying information tied to their account
- Prisma and Postgres for storing users and their data (I used Docker for local setup)
- OpenAI for creating a new fun fact when refreshed

Tech-stack:
- Next.js as the App Router
- TypeScript
- NextAuth (Google)
- Prisma
- Postgres
- OpenAI

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Set up the `.env` file:
DATABASE_URL=""
NEXTAUTH_URL=""
NEXTAUTH_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
OPENAI_API_KEY=""

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
