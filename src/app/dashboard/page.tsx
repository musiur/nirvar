import PrivateSSRRoute from "@/components/layout/private.ssr.route";

const Page = () => {
  return (
    <PrivateSSRRoute>
      <div>Dashboard</div>
    </PrivateSSRRoute>
  );
};

export default Page;
