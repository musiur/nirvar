import PrivateSSRRoute from "@/components/layout/private.ssr.route";
import { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <PrivateSSRRoute>
      <>{children}</>
    </PrivateSSRRoute>
  );
};

export default Layout;
