import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <section className="section container space-x-4">
      <Link href="/dashboard/become-a-doctor">
        <Button variant="outline">Become a doctor</Button>
      </Link>
      <Link href="/dashboard/stories">
        <Button variant="outline">Stories</Button>
      </Link>
    </section>
  );
};

export default Page;
