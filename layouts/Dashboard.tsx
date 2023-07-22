import { ReactNode } from "react";
import Sidebar from "@/components/Dashboard/Sidebar";
import Header from "@/components/Header/Header";
type Props = {
  children: ReactNode;
};
export default function DashboardLayout({ children }: Props) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <div className="py-4 px-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
