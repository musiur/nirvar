import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="bg-gradient-to-tr from-gray-900 to-primary text-white py-12">
        <div className="max-w-[1000px] mx-auto space-y-4">
          <h1 className="text-4xl font-bold">The Future of Web Development</h1>
          <div className="flex items-center space-x-4 text-sm">
            <div>John Doe</div>
            <div className="h-4 w-px bg-gray-500" />
            <div>May 23, 2024</div>
            {/* <div className="flex items-center gap-2 pl-8">
              <div className="h-6 w-6 bg-white/80 flex items-center justify-center rounded-full">
                <Check className="w-4 h-4 stroke-primary" />
              </div>
              Reviewed by 12+ Doctors
            </div> */}
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 py-12">
        <article className="[&>img]:my-16 [&>*]:leading-loose [&>p]:pb-8">
          <h2>The Rise of Serverless Computing</h2>
          <p>
            In the ever-evolving landscape of web development, one trend that
            has been gaining significant traction is the rise of serverless
            computing. Serverless architectures, where the underlying
            infrastructure is abstracted away from the developer, have
            revolutionized the way we build and deploy web applications.
          </p>
          <p>
            With serverless, developers can focus solely on writing the
            application logic, without worrying about provisioning, scaling, or
            managing servers. This shift has led to increased efficiency,
            reduced operational overhead, and the ability to rapidly iterate on
            new features.
          </p>
          <Image
            alt="Serverless computing"
            className="rounded-lg"
            height="400"
            src="https://utfs.io/f/d8564265-98ec-4dc4-aad9-dd47dd66f39d-l73gd9.webp"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
          <h2>The Importance of Developer Experience</h2>
          <p>
            As the web development landscape continues to evolve, the importance
            of developer experience (DX) has become increasingly paramount.
            Developers are no longer just concerned with the technical
            capabilities of a platform or framework; they also value the overall
            developer experience, including ease of use, documentation, and
            community support.
          </p>
          <p>
            Leading web development platforms are now placing a strong emphasis
            on DX, ensuring that developers can quickly onboard, efficiently
            build and deploy their applications, and access a wealth of
            resources and support when needed.
          </p>
        </article>
        <div className="space-y-8">
          {/* <div className="space-y-4">
            <h3 className="text-lg font-bold">Table of Contents</h3>
            <nav className="space-y-2">
              <Link
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                The Rise of Serverless Computing
              </Link>
              <Link
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                The Importance of Developer Experience
              </Link>
              <Link
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                The Future of Web Development
              </Link>
            </nav>
          </div> */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Related Articles</h3>
            <div className="space-y-4">
              <Link
                className="grid grid-cols-[100px_1fr] gap-4 items-start"
                href="/articles/the-rise-of-cms"
              >
                <Image
                  alt="Article thumbnail"
                  className="rounded-lg"
                  height="100"
                  src="https://utfs.io/f/d8564265-98ec-4dc4-aad9-dd47dd66f39d-l73gd9.webp"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">
                    The Rise of Headless CMS
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Explore the benefits of decoupling your content from your
                    presentation layer.
                  </p>
                </div>
              </Link>
              <Link
                className="grid grid-cols-[100px_1fr] gap-4 items-start"
                href="#"
              >
                <Image
                  alt="Article thumbnail"
                  className="rounded-lg"
                  height="100"
                  src="https://utfs.io/f/d8564265-98ec-4dc4-aad9-dd47dd66f39d-l73gd9.webp"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">
                    The Evolution of JavaScript Frameworks
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A look at the changing landscape of front-end JavaScript
                    frameworks.
                  </p>
                </div>
              </Link>
              <Link
                className="grid grid-cols-[100px_1fr] gap-4 items-start"
                href="#"
              >
                <Image
                  alt="Article thumbnail"
                  className="rounded-lg"
                  height="100"
                  src="https://utfs.io/f/d8564265-98ec-4dc4-aad9-dd47dd66f39d-l73gd9.webp"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">
                    The Rise of Static Site Generators
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Discover the benefits of static site generation for modern
                    web development.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
