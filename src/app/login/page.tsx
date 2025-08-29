'use client'

import { signIn } from "next-auth/react";

export default function LoginPage() {
    return (
        <div style={{marginTop: 50, marginLeft: 50}}>
            <div>
                <h1>Movie Facts</h1>
                <p>This is a web app to store users' favorite movies and give them fun facts using OpenAI.</p>
                <button onClick={() => signIn("google", { callbackUrl: "/" })} style={{marginTop: 20, padding: '10px',borderRadius: 8}}>
                    Login with Google
                </button>
            </div>
        </div>
    )
}
