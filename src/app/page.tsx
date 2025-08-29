import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route.ts";
import Image from "next/image";
import FunFact from "./FunFactClient";
import LogoutButton from "@/app/LogOutClient";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login"); // There isn't an existing session.

  const user = session.user as any
  if (!user?.favoriteMovie) {
    redirect("/onboarding"); // New user that hasn't stored their favorite movie.
  }

  return (
      <main style={{marginTop: 50, marginLeft: 50}}>
        <header>
          {user.image && (
              <Image src={user.image} alt="Avatar" width={64} height={64} style={{borderRadius: 8}} />
          )}
          <div>
            <div><strong>Name:</strong> {user.name}</div>
            <div><strong>Email:</strong> {user.email}</div>
          </div>
        </header>

        <section style={{marginTop: 20, maxWidth: 1000}}>
          <h2>Your favorite movie: {user.favoriteMovie}</h2>
          <FunFact movie={user.favoriteMovie} />
        </section>

        <LogoutButton />

      </main>
  )
}
