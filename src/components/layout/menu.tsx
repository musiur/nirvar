"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import Navlink from "./navlink";

const Menu = ({
  Links,
}: {
  Links: { id: number; text: string; link: string }[];
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="grid gap-6 py-6">
          {Links.map((item: { id: number; text: string; link: string }) => {
            return <Navlink key={item.id} data={item} />;
          })}
          <div className="flex gap-2">
            <Link href="/auth/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
