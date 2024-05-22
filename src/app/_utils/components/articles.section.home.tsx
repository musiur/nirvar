import {
  CardContent,
  CardFooter,
  Card,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function ArticlesSectionHome() {
  return (
    <section className="container space-y-8">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/none">
            Articles
          </h1>
          <p className="mx-auto max-w-[500px] text-gray-500  dark:text-gray-400">
            Educate men about Dysmenorrhea and encourage them to be more
            supportive of their partners.
          </p>
        </div>
      </div>
      <div className="space-y-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <Card>
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
                href="#"
              >
                Read More
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Image
                alt="Article Image"
                className="aspect-[3/2] w-full rounded-lg object-cover"
                height={400}
                src="https://utfs.io/f/882bf65f-ff87-44da-b5f0-833abbef2455-62x3gc.jpg"
                width={600}
              />
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">
                  Menstrual Cramps: What You Need to Know
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Understand the different types of menstrual cramps and how to
                  provide effective support.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                href="#"
              >
                Read More
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Image
                alt="Article Image"
                className="aspect-[3/2] w-full rounded-lg object-cover"
                height={400}
                src="https://utfs.io/f/734e83b4-ebc8-4f10-809e-f3c700d05402-htyljg.jpg"
                width={600}
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">
                  Supporting Your Partner Through Dysmenorrhea
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Discover practical ways to support your partner during their
                  menstrual cycle and help alleviate their pain.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                href="#"
              >
                Read More
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button>Write an Article</Button>
          <Button variant="outline">View All Articles</Button>
        </div>
      </div>
    </section>
  );
}
