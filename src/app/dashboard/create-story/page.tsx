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
import { Form } from "@/components/ui/form";
import InputX from "@/app/_utils/components/input-x";
import SubmitButton from "@/app/_utils/components/submit.button";
import FetchResponse from "@/app/_utils/components/fetch.response";
import EditorX from "@/app/_utils/components/editor-x";
import { CreateStory } from "../_utils/actions";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  title: z.string().min(1),
  raw_content: z.string().min(1),
});

type T_FormSchema = z.infer<typeof FormSchema>;

export default function Page() {
  const router = useRouter();
  const form = useForm<T_FormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      raw_content: "",
    },
  });

  const onSubmit = async (data: T_FormSchema) => {
    const result = await CreateStory(data);
    console.log(result);
    FetchResponse({
      apiResponse: result,
      title: "Story create",
    });
    if (result.success) {
      router.push("/dashboard/stories");
    }
  };
  return (
    <section className="container flex items-center justify-center">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Create Story
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <InputX form={form} name="title" label="Title" />
              <EditorX form={form} name="raw_content" label="Your story" />

              <SubmitButton
                pending={form.formState.isSubmitting}
                text="Create story"
                className="w-full"
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Don&apos;t want to create story?&nbsp;
            <Link
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              href="/dashboard"
            >
              Get back to dashboard
            </Link>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
