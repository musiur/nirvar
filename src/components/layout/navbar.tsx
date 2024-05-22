import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { MenuIcon, MountainIcon } from "lucide-react";

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
    <header className="flex h-16 w-full shrink-0 items-center container border-b">
      <Link className="mr-6 flex items-center gap-2" href="/">
        <MountainIcon className="h-6 w-6" />
        <span className="font-semibold">Nirvar</span>
      </Link>
      <div className="ml-auto hidden items-center gap-4 sm:gap-6 md:flex">
        {Links.map((item: { id: number; text: string; link: string }) => {
          const { id, text, link } = item;
          return (
            <Link
              key={id}
              className="text-sm font-medium hover:underline underline-offset-4"
              href={link}
            >
              {text}
            </Link>
          );
        })}
      </div>
      <div className="ml-auto flex items-center gap-2 md:hidden">
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
                const { id, text, link } = item;
                return (
                  <Link
                    key={id}
                    className="flex w-full items-center py-2 text-lg"
                    href={link}
                  >
                    {text}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-2">
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
      </div>
      <div className="ml-auto hidden items-center gap-2 md:flex">
        <Link href="/auth/login">
          <Button variant="outline">Login</Button>
        </Link>
        <Link href="/auth/register">
          <Button>Register</Button>
        </Link>
      </div>
    </header>
  );
}
