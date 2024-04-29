import Link from "next/link";
import { Bell, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardNav from "../navigation/navbar";
import UpdgradeAccBtn from "../navigation/updgradeAccBtn";
type Props = {};

function SidebarLayout({}: Props) {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Ai Form Generator</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <DashboardNav />
        </div>
        <div className="mt-auto p-4">
          <UpdgradeAccBtn />
        </div>
      </div>
    </div>
  );
}

export default SidebarLayout;
