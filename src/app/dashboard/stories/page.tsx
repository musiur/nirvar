import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { GetUserStories } from "../_utils/actions";
import { Edit, Trash } from "lucide-react";

const Page = async () => {
  const result = await GetUserStories();
  console.log(result);
  return (
    <section className="container space-y-4">
      <Link href="/dashboard/create-story">
        <Button>Create story</Button>
      </Link>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>All stories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-y-4">
              {result.length ? (
                result.map((item: any) => {
                  const { id, title, content, user } = item;
                  return (
                    <div
                      key={id}
                      className="border p-4 rounded-lg grid grid-cols-3"
                    >
                      <h4>{title}</h4>
                      <div dangerouslySetInnerHTML={{ __html: content }} />
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon">
                          <Edit />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="[&>svg]:stroke-destructive"
                        >
                          <Trash />
                        </Button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>No story found!</div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Page;
