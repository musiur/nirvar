import { toast } from "@/components/ui/use-toast";

const FetchResponse = ({
  apiResponse,
  title = "Title",
}: {
  apiResponse: {
    success: boolean;
    messages?: string[];
    message?: string;
  };
  title?: string;
}) => {
  const { success } = apiResponse;
  toast({
    variant: success ? "default" : "destructive",
    title,
    description: `${
      apiResponse?.message ||
      apiResponse?.messages?.toString() ||
      "Toast message description"
    }`,
  });
  return null;
};

export default FetchResponse;
