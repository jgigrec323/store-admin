import { UserButton } from "@clerk/nextjs";
import React from "react";
import { MainNav } from "./main-nav";
import StoreSwicther from "./store-switcher";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwicther></StoreSwicther>
        <div>
          <MainNav className="mx-6"></MainNav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <UserButton></UserButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
