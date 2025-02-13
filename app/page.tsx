import { Poppins } from "next/font/google";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/LoginButton";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
const Home = async () => {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-300">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className,
          )}
        >
          Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div className="">
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default Home;
