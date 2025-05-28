import { Icon } from "@iconify/react";
import { NavLink } from "react-router";
import { cn } from "~/lib/utils";

export default function Navbar() {
  const menutItems = [
    {
      key: "/",
      label: "Home",
      icon: "solar:home-2-linear",
      activeIcon: "solar:home-2-bold",
    },
    {
      key: "/work",
      label: "Work",
      icon: "tabler:briefcase",
      activeIcon: "tabler:briefcase-filled",
    },
    {
      key: "/projects",
      label: "Projects",
      icon: "lets-icons:chart",
      activeIcon: "uis:chart",
    },
    {
      key: "/blogs",
      label: "Blogs",
      icon: "meteor-icons:blogger",
      activeIcon: "jam:blogger",
    },
  ];

  return (
    <nav className="fixed bottom-3 left-1/2 border-background border-4 -translate-x-1/2 flex items-center justify-around w-full max-w-[300px] bg-neutral-900/90 py-2 rounded-2xl">
      {menutItems.map((item) => (
        <NavLink key={item.key} to={item.key}>
          {({ isActive, isPending, isTransitioning }) => (
            <div
              className={cn(
                "flex flex-col items-center",
                isActive ? "text-foreground" : "text-foreground-dark"
              )}
            >
              <Icon
                icon={isActive ? item.activeIcon : item.icon}
                className={cn("transition", isActive ? "text-5xl" : "text-4xl")}
              />
              <span className="text-sm">{item.label}</span>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
