import { Button } from "@/components/ui/button";
import {SignedIn, SignedOut, SignedOutButton, SignedUpButton} from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <SignedOut>
        <SignedUpButton mode="modal">Sign Up</SignedUpButton>
      </SignedOut>
      <SignedIn>
        <SignedOutButton mode="modal">Logout</SignedOutButton>
      </SignedIn>
    </div>
  )
}