"use client";
import {Button} from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";

export function LoginButton() {
  const { data: session } = useSession();

  const handleLogin = () => {
    session ? signOut() : signIn();
  };

  const displayTokens = () => {
    if (session) {
      console.log(session); // Get tokens from session
    //   console.log("Access Token:", accessToken);
    //   console.log("ID Token:", idToken);
      // You can now use the access token for API calls (e.g., Google Fit)
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
     {session && (
        <div style={{ marginRight: "10px" }}>
          <p>Welcome, {session?.user?.name}</p>
        </div>
      )}
      <button
        className={`border border-transparent rounded px-4 py-2 transition-colors ${
          session
            ? "text-red-500 hover:bg-red-500 hover:text-white"
            : "text-white"
        }`}
        onClick={handleLogin}
      >
        {session ? "Log Out" : "Log In"}
      </button>

     
    </div>
  );
}
