import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GetProfileData } from "./actions";
import { Separator } from "@/components/ui/separator";
import LogoutButton from "./logout.button";
import Link from "next/link";
import { User } from "lucide-react";

const NavAvatar = async ({ userdata }: { userdata: any }) => {
  const result = await GetProfileData();

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="space-y-4">
        <div className="grid grid-cols-1 gap-2">
          <p className="py-2 px-4 bg-gray-100 rounded-lg font-bold ">
            @{result?.user?.username}
          </p>
          <Link href="/dashboard">
            <p className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center gap-x-2">
              <User className="w-4 h-4" />
              Profile
            </p>
          </Link>
        </div>
        <Separator />
        <LogoutButton />
      </PopoverContent>
    </Popover>
  );
};

export default NavAvatar;
