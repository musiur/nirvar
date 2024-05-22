import Link from "next/link";
import { Button } from "../ui/button";
import { Home } from "lucide-react";

const BackToHome = () => {
  return (
    <section className="cotainer flex justify-center">
      <Link href="/" className="inline-block">
        <Button className="gap-1 items-center">
          <Home className="w-4 h-4" /> Home
        </Button>
      </Link>
    </section>
  );
};

export default BackToHome;
