import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sun } from "lucide-react";

const SubmitButton = ({
  pending,
  text,
  className,
}: {
  pending: boolean;
  text: string;
  className?: string;
}) => {
  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn(className, "items-center gap-x-2")}
    >
      {pending ? <Sun className="w-4 h-4 animate-spin" /> : null}
      {text}
    </Button>
  );
};

export default SubmitButton;
