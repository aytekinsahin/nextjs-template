import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        console.log(credentials)
        if(credentials.username == "aytekin" && credentials.password=="1234"){
        const user = {id: "1", name: "Aytekin Şahin", email: "aytekin@aytekinsahin.com",test : "test"}
          return user;
        }
        return null
      },
      callbacks: {
        async jwt({ token, account, profile }) {
          // Persist the OAuth access_token and or the user id to the token right after signin

          if (account) {
            token.accessToken = account.access_token
            token.id = profile.id
          }
          return token
        },
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token and user id from a provider.
          console.log("session")
          session.accessToken = token.accessToken
          session.user.id = token.id
          session.user.test = 212121

          return session
        }
      }
    })
  ]
}

export default authOptions;
