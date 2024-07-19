import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import User from '@/app/models/User'
// import Payment from '@/app/models/payment'
import connectDB from '@/app/db/connectDb'

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.Github_ID,
      clientSecret: process.env.Github_SECRET
    }),
  ],
  database: process.env.DATABASE_URL,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

      if (account.provider == "github") {
        await connectDB()
        const currentUser = await User.findOne({ email: user.email })
        if (!currentUser) {
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          })
        }
        return true
      }

    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      const dbUser = await User.findOne({email: session.user.email})
      session.user.name = dbUser.username
      return session
    }
  }
})

export { handler as GET, handler as POST }