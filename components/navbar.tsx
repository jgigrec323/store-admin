import { UserButton } from "@clerk/nextjs";
import React from "react";
import { MainNav } from "./main-nav";
import StoreSwicther from "./store-switcher";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { ThemeToggle } from "./theme-toggle";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }
  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwicther items={stores}></StoreSwicther>
        <div>
          <MainNav className="mx-6"></MainNav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle></ThemeToggle>
          <UserButton></UserButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
