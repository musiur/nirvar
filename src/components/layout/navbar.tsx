import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon, MountainIcon } from "lucide-react";
import Navlink from "./navlink";
import Menu from "./menu";

export default function Navbar() {
  const Links = [
    {
      id: 1,
      text: "Articles",
      link: "/articles",
    },
    {
      id: 2,
      text: "QnA",
      link: "/qna",
    },
    {
      id: 3,
      text: "Stories",
      link: "/stories",
    },
    {
      id: 4,
      text: "About",
      link: "/about",
    },
    {
      id: 5,
      text: "Contact",
      link: "/contact",
    },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/80 border-b">
      <nav className="flex h-16 w-full shrink-0 items-center container">
        <Link className="mr-6 flex items-center gap-2" href="/">
          <MountainIcon className="h-6 w-6" />
          <span className="font-semibold">Nirvar</span>
        </Link>
        <div className="ml-auto hidden items-center gap-4 sm:gap-6 md:flex">
          {Links.map((item: { id: number; text: string; link: string }) => {
            return <Navlink key={item.id} data={item} />;
          })}
        </div>
        <div className="ml-auto flex items-center gap-2 md:hidden">
          <Menu Links={Links} />
        </div>
        <div className="ml-auto hidden items-center gap-2 md:flex">
          <Link href="/auth/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/auth/register">
            <Button>Register</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
