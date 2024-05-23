"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import InputX from "@/app/_utils/components/input-x";
import { Form } from "@/components/ui/form";
import { Register } from "../_utils/actions";
import FetchResponse from "@/app/_utils/components/fetch.response";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(1),
  password: z.string().min(8),
});

type T_FormSchema = z.infer<typeof FormSchema>;

export default function Page() {
  const form = useForm<T_FormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: T_FormSchema) => {
    const result = await Register(data);
    console.log(result);
    FetchResponse({
      apiResponse: { success: true, message: "Registration Successful" },
      title: "Registration",
    });
  };
  return (
    <div className="flex items-center justify-center">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Register
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <InputX form={form} name="username" label="Username" />
              <InputX form={form} name="email" label="Email Address" />
              <InputX form={form} name="password" label="Password" />

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-950"
                    id="terms"
                    name="terms"
                  />
                  <Label
                    className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                    htmlFor="terms"
                  >
                    I agree to the
                    <Link
                      className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                      href="#"
                    >
                      Terms of Service
                    </Link>
                  </Label>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?&nbsp;
            <Link
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              href="/auth/login"
            >
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
