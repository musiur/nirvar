import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex gap-1 items-center">
              <MountainIcon className="h-6 w-6" />
              <span className="font-semibold">Nirvar</span>
            </Link>
          </div>
          <div className="space-y-1">
            <p>Bashundhara R/A</p>
            <p>Dhaka 1229, Bangladesh</p>
          </div>
          <div className="flex items-center space-x-2 py-4">
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Company</h3>
          <Link className="hover:underline" href="/about">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Team
          </Link>
          <Link className="hover:underline" href="#">
            Careers
          </Link>
          <Link className="hover:underline" href="#">
            News
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Products</h3>
          <Link className="hover:underline" href="#">
            Men
          </Link>
          <Link className="hover:underline" href="#">
            Women
          </Link>
          <Link className="hover:underline" href="#">
            Kids
          </Link>
          <Link className="hover:underline" href="#">
            Accessories
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Resources</h3>
          <Link className="hover:underline" href="#">
            Blog
          </Link>
          <Link className="hover:underline" href="#">
            Community
          </Link>
          <Link className="hover:underline" href="#">
            Support
          </Link>
          <Link className="hover:underline" href="#">
            FAQs
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
