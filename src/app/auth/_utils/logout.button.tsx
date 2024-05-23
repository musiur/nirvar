"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { LogoutAction } from "./actions";

const LogoutButton = () => {
  const Logout = async () => {
    const result = await LogoutAction();
    if (result.success) {
      if (typeof window !== "undefined") {
        window.location.replace("/auth/login");
      }
    }
  };
  return (
    <Button
      variant="outline"
      className="items-center gap-2 text-pink-500"
      onClick={Logout}
    >
      <LogOut className="w-4 h-4" />
      Logout
    </Button>
  );
};

export default LogoutButton;
