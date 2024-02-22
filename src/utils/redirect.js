import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./../app/api/auth/[...nextauth]/route";

// if session, redirect
export const toRedirectOrNot = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }
};

// if no session, redirect
export const toStayOrNot = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  } else if (session.user.email) {
    return session.user.email;
  }

  return ""
};
