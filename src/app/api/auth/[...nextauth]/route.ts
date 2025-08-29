import NextAuth, { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../../../../../lib/prisma";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as any,
    session: { strategy: "jwt" },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: { params: { prompt: "select_account" } }
        })
    ],
    callbacks: {
        async session({ session }) {
            if (session.user?.email) {
                const u = await prisma.user.findUnique({
                    where: { email: session.user.email },
                    select: { id: true, favoriteMovie: true }
                })
                if (u) {
                    ;(session as any).user.id = u.id
                    ;(session as any).user.favoriteMovie = u.favoriteMovie
                }
            }
            return session;
        }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
