import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  Card,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

export default function Page() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-8">
        <div className="space-y-4 mb-8 flex flex-col items-center justify-center [&>*]:text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Stories from Rural Bangladesh
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Read real stories from women in rural Bangladesh who have
            experienced menstrual cramps and how their families have supported
            them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Stories.map((story) => {
            const { id, title, description, name, image, link } = story;

            return (
              <Card key={id} className="flex flex-col">
                <CardHeader>
                  <h3 className="font-semibold">{title}</h3>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <p className="text-gray-500 dark:text-gray-400 italic">
                      {description}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Menstrual Cramps Survivor
                      </div>
                    </div>
                  </div>
                  <Link href={link} className="inline-block">
                    <Button variant="outline">View Story</Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const Stories = [
  {
    id: 1,
    title: "My Husband Helped Me Through the Pain",
    description:
      "When I was curled up in pain, my husband brought me a heating pad, made me tea, and just sat with me until the cramps passed. I don't know what I'd do without his support.",
    name: "Fatima Begum",
    image: "",
    link: "/stories/my-husband-helped-me-through-the-pain?id=adfasdf34fa23fsd",
  },
  {
    id: 2,
    title: "Finding Relief Through Traditional Remedies",
    description:
      "Living in a rural village, access to modern healthcare is limited. I found relief through traditional herbal remedies passed down through generations. These natural treatments have been a blessing for me.",
    name: "Rahima Khatun",
    image: "",
    link: "/stories/finding-relief-through-traditional-remedies?id=asdf1234asdf5678",
  },
  {
    id: 3,
    title: "A Local Healer's Guidance",
    description:
      "The local healer in our village provided me with invaluable guidance and support. Her knowledge of medicinal plants and natural pain relief techniques has made a significant difference in my life.",
    name: "Jahanara Bibi",
    image: "",
    link: "/stories/a-local-healers-guidance?id=qwerty9876qwerty",
  },
  {
    id: 4,
    title: "Community Support and Awareness",
    description:
      "Forming a small support group with other women in my village has been empowering. We share our experiences, support each other, and raise awareness about dysmenorrhea, helping each other find ways to cope.",
    name: "Nasima Akter",
    image: "",
    link: "/stories/community-support-and-awareness?id=zxcvbnm1234zxcv",
  },
  {
    id: 5,
    title: "Balancing Work and Health",
    description:
      "As a farmer, my work is physically demanding, and dysmenorrhea made it nearly impossible to perform my duties. With the support of my family and using simple home remedies, I have learned to manage the pain while continuing to work.",
    name: "Munni Rani",
    image: "",
    link: "/stories/balancing-work-and-health?id=lkjhgfdsa0987",
  },
  {
    id: 6,
    title: "Accessing Healthcare in Rural Areas",
    description:
      "Living far from the nearest healthcare center, accessing medical care for dysmenorrhea has been a challenge. However, with determination and community support, I have been able to receive the treatment I need and improve my quality of life.",
    name: "Ayesha Sultana",
    image: "",
    link: "/stories/accessing-healthcare-in-rural-areas?id=poiuytrewq1234",
  },
];
