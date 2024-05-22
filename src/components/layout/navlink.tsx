"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ data }: { data: { text: string; link: string } }) => {
  const { text, link } = data;
  const pathname = usePathname();
  return (
    <Link
      className={clsx("text-sm font-medium border-b-2 underline-offset-4", {
        "border-b-primary/0 text-black hover:text-primary/50":
          !pathname.includes(link),
        "border-b-primary text-primary hover:text-primary/70":
          pathname.includes(link),
      })}
      href={link}
    >
      {text}
    </Link>
  );
};

export default Navlink;
