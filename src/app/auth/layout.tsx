import PublicSSRRoute from "@/components/layout/public.ssr.route";
import { ReactElement } from "react";

const AuthLayout = ({ children }: { children: ReactElement }) => {
  return (
    <PublicSSRRoute>
      <div className="min-h-[100dvh] py-10">{children}</div>
    </PublicSSRRoute>
  );
};

export default AuthLayout;
