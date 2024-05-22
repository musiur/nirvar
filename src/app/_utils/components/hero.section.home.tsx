import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSectionHome() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Increase Awareness of Dysmenorrhea
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Dysmenorrhea, or painful menstrual cramps, is a common condition
              that affects many women. This landing page aims to educate men
              about this issue and encourage them to be more supportive of their
              partners.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2 pt-8">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit">Be Enlightened</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Sign up to learn more about dysmenorrhea and how you can support
              your partner.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
