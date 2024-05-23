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
import FetchResponse from "@/app/_utils/components/fetch.response";
import SubmitButton from "@/app/_utils/components/submit.button";
import { useRouter } from "next/navigation";
import { DoctorRegister } from "../../_utils/actions";
import SelectX from "@/app/_utils/components/select-x";

const FormSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  gender: z.string().min(1),
  age: z.number().min(1),
  address: z.string().min(1),
  medical_college: z.string().min(1),
  degree: z.string().min(1),
  linkedIn: z.string().min(1),
  year_of_passing: z.string().min(1),
});

type T_FormSchema = z.infer<typeof FormSchema>;

export default function Page() {
  const router = useRouter();
  const form = useForm<T_FormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
      gender: "",
      age: 24,
      address: "",
      medical_college: "",
      degree: "",
      linkedIn: "",
      year_of_passing: "",
    },
  });

  const onSubmit = async (data: T_FormSchema) => {
    const result: any = await DoctorRegister(data);
    console.log(result);
    FetchResponse({
      apiResponse: result,
      title: "Registration",
    });

    if (result.success) {
      router.push("/auth/login");
    }
  };
  return (
    <div className="flex items-center justify-center">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Register As A Doctor
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <InputX form={form} name="username" label="Username" />
              <InputX
                form={form}
                name="password"
                label="Password"
                type="password"
              />
              <SelectX
                form={form}
                name="gender"
                label="Gender"
                options={[
                  { label: "Male", value: "Male" },
                  { label: "FeMale", value: "FeMale" },
                ]}
              />
              <InputX form={form} name="age" label="Age" type="number" />

              <InputX
                form={form}
                name="address"
                label="Address"
                type="textarea"
              />
              <InputX
                form={form}
                name="medical_college"
                label="Medical College"
              />
              <InputX form={form} name="degree" label="Degree" />
              <InputX
                form={form}
                name="linkedIn"
                label="LinkedIn Profile Link"
              />
              <InputX
                form={form}
                name="year_of_passing"
                label="Year of passing"
              />

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
              <SubmitButton
                pending={form.formState.isSubmitting}
                text="Register"
                className="w-full"
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="grid gap-y-4">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?&nbsp;
            <Link
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              href="/auth/login"
            >
              Login
            </Link>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              <Link
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                href="/auth/register/doctor"
              >
                Retister As Normal User!
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
