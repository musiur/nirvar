import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GetProfileData } from "./actions";
import { Separator } from "@/components/ui/separator";
import LogoutButton from "./logout.button";

const NavAvatar = async ({ userdata }: { userdata: any }) => {
  const TOKEN = userdata.value ? JSON.parse(userdata.value)?.access : "";

  const result = await GetProfileData(TOKEN);

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="space-y-4">
        <div>
          <p>{result?.user?.username}</p>
        </div>
        <Separator />
        <LogoutButton />
      </PopoverContent>
    </Popover>
  );
};

export default NavAvatar;
