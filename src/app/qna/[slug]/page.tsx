/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vH278Byi0X6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CheckIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl space-y-10">
          <div className="text-gray-500 p-4 bg-primary/10 border-2 border-primary text-primary rounded-lg shadow-xl sticky top-[70px] z-50 backdrop-blur-2xl font-semibold">
            Question: This is a deep and complex question that has been pondered
            by philosophers, theologians, and thinkers throughout history. There
            is no single, definitive answer, but exploring different
            perspectives can help us gain a deeper understanding of the human
            experience?
          </div>
          <div className="space-y-10">
            <h3 className="md:text-xl font-semibold">Answers</h3>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="font-medium">John Doe</div>
                      <CheckIcon className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="text-sm text-gray-500">Verified</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <ThumbsUpIcon className="h-5 w-5" />
                    <span className="ml-1">12</span>
                  </Button>
                  <Button size="sm" variant="ghost">
                    <ThumbsDownIcon className="h-5 w-5" />
                    <span className="ml-1">3</span>
                  </Button>
                </div>
              </div>
              <p>
                The meaning of life is to find purpose and fulfillment through
                personal growth, relationships, and contributing to something
                greater than ourselves.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      alt="Jane Smith"
                      src="/placeholder-avatar.jpg"
                    />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="font-medium">Jane Smith</div>
                      <CheckIcon className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="text-sm text-gray-500">Verified</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <ThumbsUpIcon className="h-5 w-5" />
                    <span className="ml-1">20</span>
                  </Button>
                  <Button size="sm" variant="ghost">
                    <ThumbsDownIcon className="h-5 w-5" />
                    <span className="ml-1">5</span>
                  </Button>
                </div>
              </div>
              <p>
                The meaning of life is to find happiness and contentment through
                personal fulfillment, strong relationships, and making a
                positive impact on the world.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      alt="Michael Johnson"
                      src="/placeholder-avatar.jpg"
                    />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Michael Johnson</div>
                    <div className="text-sm text-gray-500">Unverified</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <ThumbsUpIcon className="h-5 w-5" />
                    <span className="ml-1">8</span>
                  </Button>
                  <Button size="sm" variant="ghost">
                    <ThumbsDownIcon className="h-5 w-5" />
                    <span className="ml-1">2</span>
                  </Button>
                </div>
              </div>
              <p>
                The meaning of life is to find purpose and meaning through
                personal growth, relationships, and contributing to something
                larger than ourselves.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      alt="Sarah Lee"
                      src="/placeholder-avatar.jpg"
                    />
                    <AvatarFallback>SL</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="font-medium">Sarah Lee</div>
                      <CheckIcon className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="text-sm text-gray-500">Verified</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <ThumbsUpIcon className="h-5 w-5" />
                    <span className="ml-1">15</span>
                  </Button>
                  <Button size="sm" variant="ghost">
                    <ThumbsDownIcon className="h-5 w-5" />
                    <span className="ml-1">4</span>
                  </Button>
                </div>
              </div>
              <p>
                The meaning of life is to find purpose, fulfillment, and
                happiness through personal growth, meaningful relationships, and
                making a positive impact on the world.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      alt="David Kim"
                      src="/placeholder-avatar.jpg"
                    />
                    <AvatarFallback>DK</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">David Kim</div>
                    <div className="text-sm text-gray-500">Unverified</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <ThumbsUpIcon className="h-5 w-5" />
                    <span className="ml-1">10</span>
                  </Button>
                  <Button size="sm" variant="ghost">
                    <ThumbsDownIcon className="h-5 w-5" />
                    <span className="ml-1">3</span>
                  </Button>
                </div>
              </div>
              <p>
                The meaning of life is a deeply personal and complex question,
                and there is no single, definitive answer. It&apos;s about
                finding purpose, fulfillment, and happiness through a
                combination of personal growth, meaningful relationships, and
                contributing to something greater than ourselves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
