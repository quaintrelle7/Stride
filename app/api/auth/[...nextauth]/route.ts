import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import type { AuthOptions } from "next-auth"

export const authOptions: AuthOptions = {
	secret: process.env.AUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
			authorization: {
				params: {
					scope:
						"openid profile email https://www.googleapis.com/auth/fitness.activity.read",
				},
			},
		}),
	],
	callbacks: {
		// Handle the JWT creation and store the tokens
		async jwt({ token, account, user }) {
			if (account) {
				console.log("Account object:", account) // Debugging line to check account object
				// Ensure we store the access token in the JWT token
				token.access_token = account.access_token
				token.id_token = account.id_token
			}
			return token
		},

		// Add the access_token to the session object
		async session({ session, token }) {
			console.log("Session object:", session) // Debugging line to check session object
			// Ensure that the session receives the access_token
			session.access_token = token.access_token
			session.id_token = token.id_token
			return session
		},
	},
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
