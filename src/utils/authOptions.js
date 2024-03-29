import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// authentication as per docs
const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        console.log("running");
        const { email, password } = credentials;
        let user;
        try {
          // fetch user by email
          const url = `${process.env.REST_API_URL}user/bymail`;
          const userDoc = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
            }),
          });

          console.log("user: ", user);
          const doc = await userDoc.json();
          console.log("doc: ", doc);

          const passwordMatch = await bcrypt.compare(password, doc.password);

          if (!passwordMatch) {
            console.log("Passwords don't");
            return null;
          }

          console.log("Passwords March");
          user = doc;
        } catch (error) {
          console.log(error);
        }
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

export default authOptions;
