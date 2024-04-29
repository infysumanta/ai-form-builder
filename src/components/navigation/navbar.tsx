"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarNavItem } from "@/types/types";

import { cn } from "@/lib/utils";
import { Icons } from "../icons";

const sidebarNav: SidebarNavItem[] = [
  {
    title: "My Forms",
    href: "/view-forms",
    icon: "library",
  },
  {
    title: "Results",
    href: "/results",
    icon: "list",
  },

  {
    title: "Settings",
    href: "/settings",
    icon: "settings",
  },
];

const DashboardNav = () => {
  const path = usePathname();

  if (!sidebarNav?.length) return null;

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {sidebarNav.map((item, index) => {
        const Icon = Icons[(item?.icon as keyof typeof Icons) || "list"];
        const isActive = path === item.href;
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                  isActive ? "bg-muted text-primary" : "text-muted-foreground",
                  item.disabled
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer",
                )}
              >
                <Icon className="w-4 h-4 mr-2" />
                {item.title}
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
};

export default DashboardNav;
