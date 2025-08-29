import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function OnboardingPage() {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/login");
    const user = session.user as any;
    if (user.favoriteMovie) redirect("/");

    return (
        <form action="/api/movie" method="post" style={{marginTop: 50, marginLeft: 50, maxWidth: 420}}>
            <h1>Welcome {user.name}!</h1>
            <label>
                Enter your favorite movie:
                <input name="favoriteMovie" required placeholder="e.g., The Matrix" style={{marginLeft: 10, padding: 8}}/>
            </label>
            <button type="submit" style={{marginTop: 10, padding: '10px', borderRadius: 8}}>Save</button>
        </form>
    )
}
