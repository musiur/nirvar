import BackToHome from "@/components/layout/back-to-home";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section className="container">
      <h1 className="text-2xl md:text-4xl font-bold pb-10 text-center">
        Articles
      </h1>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <Card key={item}>
                <CardHeader>
                  <Image
                    alt="Article Image"
                    className="aspect-[3/2] w-full rounded-lg object-cover"
                    height={400}
                    src="https://utfs.io/f/d8564265-98ec-4dc4-aad9-dd47dd66f39d-l73gd9.webp"
                    width={600}
                  />
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      Understanding Dysmenorrhea: A Guide for Men
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Learn about the causes, symptoms, and ways to support your
                      partner during painful menstrual cycles.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    href="/articles/partner-during-painful-menstrual-cycles"
                  >
                    Read More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Page;
