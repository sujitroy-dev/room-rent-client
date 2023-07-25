import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import DashboardLayout from "@/layouts/Dashboard";

export default function PropertyViewPage() {
  const breadcrumbNavigation = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "View",
      path: "",
    },
    {
      title: "Room",
    },
  ];
  return (
    <DashboardLayout>
      <div className="py-4 px-6">
        <h1 className="text-3xl font-semibold mt-1">View Room</h1>
        <Breadcrumb navigations={breadcrumbNavigation} spacing="small" />
        <div>Property View Page</div>
      </div>
    </DashboardLayout>
  );
}
