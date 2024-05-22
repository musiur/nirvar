import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Change Password
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action="#" className="space-y-6" method="POST">
            <div>
              <Label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="old-password"
              >
                Old Password
              </Label>
              <div className="mt-1">
                <Input
                  autoComplete="current-password"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
                  id="old-password"
                  name="old-password"
                  required
                  type="password"
                />
              </div>
            </div>
            <div>
              <Label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="new-password"
              >
                New Password
              </Label>
              <div className="mt-1">
                <Input
                  autoComplete="new-password"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
                  id="new-password"
                  name="new-password"
                  required
                  type="password"
                />
              </div>
            </div>
            <Button
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-indigo-400 dark:focus:ring-offset-gray-950"
              type="submit"
            >
              Change Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
