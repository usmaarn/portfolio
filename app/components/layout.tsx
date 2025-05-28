import React, { type PropsWithChildren } from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <main className="p-2">
        <Outlet />
      </main>
    </div>
  );
}
