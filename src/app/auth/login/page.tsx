"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LoginAction } from "../_utils/actions";
import { Form } from "@/components/ui/form";
import InputX from "@/app/_utils/components/input-x";
import FetchResponse from "@/app/_utils/components/fetch.response";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8),
});

type T_FormSchema = z.infer<typeof FormSchema>;

export default function Page() {
  const form = useForm<T_FormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: T_FormSchema) => {
    const result = await LoginAction(data);
    console.log(result);
  };
  return (
    <div className="flex items-center justify-center">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <InputX form={form} name="username" label="Username" />
              <InputX form={form} name="password" label="Password" />

              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Don&apos;t have an account?&nbsp;
            <Link
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              href="/auth/register"
            >
              Register
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
