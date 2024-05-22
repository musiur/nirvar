import { ReactElement } from "react";

const AuthLayout = ({ children }: { children: ReactElement }) => {
  return <div className="min-h-[70dvh] pt-10">{children}</div>;
};

export default AuthLayout;
