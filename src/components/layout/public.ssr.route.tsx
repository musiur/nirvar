import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

const PublicSSRRoute = ({ children }: { children: ReactElement }) => {
  const COOKIES: any = cookies();
  const TOKEN = COOKIES.get("accessToken");
  if (TOKEN) {
    redirect("/dashboard");
  }
  return !TOKEN ? children : null;
};

export default PublicSSRRoute;
