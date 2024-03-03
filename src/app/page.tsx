"use client";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <p>welcome {session.user?.name}</p>
        <Image
          src={`${session.user?.image}`}
          alt="pic"
          width={100}
          height={100}
          className="rounded-full border"
        />
        <button onClick={() => signOut()}>SignOUt</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn("google")}>SignIn with Google</button>
      <button onClick={() => signIn("github")}>SignIn with GitHub</button>
    </div>
  );
}
