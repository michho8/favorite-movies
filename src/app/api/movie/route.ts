// app/api/movie/route.ts
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { prisma } from "../../../../lib/prisma"

export async function POST(req: Request) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) return NextResponse.redirect(new URL("/login", req.url))

    const form = await req.formData()
    const favoriteMovie = String(form.get("favoriteMovie") || "").trim()
    if (!favoriteMovie) return NextResponse.redirect(new URL("/onboarding", req.url))

    await prisma.user.update({
        where: { email: session.user.email! },
        data: { favoriteMovie }
    })

    return NextResponse.redirect(new URL("/", req.url))
}
