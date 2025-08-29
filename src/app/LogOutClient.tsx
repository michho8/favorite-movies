"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button style={{padding: 10, borderRadius: 8, marginTop: 20}}
                onClick={() => signOut({callbackUrl: "/"})}>Logout
        </button>
    );
}
