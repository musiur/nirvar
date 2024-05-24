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
  toast({
    variant: apiResponse?.success ? "default" : "destructive",
    title,
    description: `${
      apiResponse?.message ||
      apiResponse?.messages?.toString() ||
      "Request Fetched!"
    }`,
  });
  return null;
};

export default FetchResponse;
