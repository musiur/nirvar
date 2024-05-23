import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default function Component() {
  return (
    <div>
      <section className="w-full ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Enlighting Men, Ending Menstrual Pain
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our mission is to raise awareness and provide support for men
                  about Dysmenorrhea, a common yet often overlooked condition
                  affecting women, in the grassroots communities of Bangladesh.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Learn More
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get Involved
                </Link>
              </div>
            </div>
            <Image
              alt="About Us"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height="550"
              src="https://utfs.io/f/d8564265-98ec-4dc4-aad9-dd47dd66f39d-l73gd9.webp"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full  bg-gray-100 dark:bg-gray-800" id="about">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                The Problem
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Addressing the Burden of Dysmenorrhea
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dysmenorrhea, or severe menstrual pain, is a common condition
                that affects millions of women worldwide, yet it is often
                overlooked and underdiagnosed, especially in developing
                countries like Bangladesh. This debilitating condition can have
                a significant impact on a woman&apos;s quality of life,
                affecting her ability to work, study, and participate in daily
                activities. However, many men in Bangladesh are unaware of this
                condition and its impact on the women in their lives.
              </p>
            </div>
          </div>
          <div className="grid items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              alt="The Problem"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="https://utfs.io/f/882bf65f-ff87-44da-b5f0-833abbef2455-62x3gc.jpg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Lack of Awareness</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Many men in Bangladesh are unaware of Dysmenorrhea and the
                      impact it has on the women in their lives, leading to a
                      lack of understanding and support.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Limited Access to Care
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Women in rural and underserved communities often face
                      barriers to accessing quality healthcare, including
                      affordable and effective treatments for Dysmenorrhea,
                      which can be further exacerbated by a lack of support from
                      their male counterparts.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Societal Stigma</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Menstruation is still a taboo topic in many parts of
                      Bangladesh, making it difficult for women to openly
                      discuss and seek help for their menstrual health issues,
                      and contributing to a lack of understanding and support
                      from the men in their lives.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full " id="our-approach">
        <div className="container grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Our Approach
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Empowering Men, Transforming Lives
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our organization takes a comprehensive approach to addressing the
              issue of Dysmenorrhea in Bangladesh. We focus on raising awareness
              among men, providing access to affordable and effective treatments
              for women, and empowering both men and women to take control of
              menstrual health.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full  bg-gray-100 dark:bg-gray-800" id="our-impact">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Our Impact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Transforming Lives, One Man and Woman at a Time
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Through our comprehensive approach, we have been able to make a
                significant impact on the lives of both men and women in
                Bangladesh who are affected by Dysmenorrhea. By increasing
                awareness among men, improving access to care for women, and
                empowering everyone to take control of menstrual health, we are
                working towards a future where no one has to endure the
                debilitating effects of this condition.
              </p>
            </div>
          </div>
          <div className="grid items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              alt="Our Impact"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="https://utfs.io/f/734e83b4-ebc8-4f10-809e-f3c700d05402-htyljg.jpg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Increased Awareness</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our educational campaigns and community outreach programs
                      have reached thousands of men and women, empowering them
                      with knowledge about Dysmenorrhea and available treatment
                      options.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Improved Access to Care
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We have partnered with local healthcare providers to
                      establish affordable and accessible clinics, ensuring that
                      women in rural and underserved areas can receive the care
                      they need, with the support and understanding of the men
                      in their lives.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Empowered Men and Women
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      By breaking the silence around menstrual health and
                      supporting both men and women to take control of their
                      well-being, we are helping to destigmatize Dysmenorrhea
                      and empower everyone to lead healthier, more fulfilling
                      lives.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full " id="testimonials">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Hear from Our Beneficiaries
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our work has transformed the lives of many men and women in
              Bangladesh. Here are a few testimonials from those we&apos;ve had
              the privilege of supporting.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <blockquote className="space-y-2">
                <p className="text-lg font-medium leading-snug italic">
                  Before I learned about this organization, I had no idea how
                  much my wife was suffering from menstrual pain. Now, I
                  understand the importance of supporting her and ensuring she
                  has access to the care she needs
                </p>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage alt="Testimonial 1" src="/avatars/01.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Javed Dewan</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Beneficiary, Dhaka
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <blockquote className="space-y-2">
                <p className="text-lg font-medium leading-snug italic">
                  This organization has been a lifeline for my wife and me. They
                  not only provided the medical care she needed, but also the
                  emotional support to help us overcome the stigma and shame we
                  felt around her menstrual health issues
                </p>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage alt="Testimonial 2" src="/avatars/02.png" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Rashed Sultana</div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
