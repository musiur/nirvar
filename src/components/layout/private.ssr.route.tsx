import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

const PrivateSSRRoute = ({ children }: { children: ReactElement }) => {
  const COOKIES: any = cookies();
  const TOKEN = COOKIES.get("accessToken");
  if (!TOKEN) {
    redirect("/auth/login");
  }
  return TOKEN ? children : null;
};

export default PrivateSSRRoute;
