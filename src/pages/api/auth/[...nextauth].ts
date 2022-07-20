import NextAuth from "next-auth"
import Providers from "next-auth/providers"

import { NextApiRequest, NextApiResponse } from 'next'

const options = {
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    Providers.Credentials({
      name: 'Sign-in',
      credentials: {},
      async authorize({ email, password }) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`, {
          method: 'POST',
          body: new URLSearchParams({ identifier: email, password }),
        }
        )

        const data = await response.json()

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    session: async (session: any, user: any) => {
      session.jwt = user.jwt
      session.id = user.id

      return Promise.resolve(session);
    },

    /**
     * This callback is called whenever a JSON
     * Web Token is created (i.e. at sign in) or updated
     * (i.e whenever a session is accessed in the client).
     * The returned value will be encrypted, and it is stored in a cookie.
     *
     * See: https://next-auth.js.org/configuration/callbacks#jwt-callback
     */
    jwt: async (token: any, user: any) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.username;
        token.jwt = user.jwt;
      }

      return Promise.resolve(token);
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;
