import React from "react";

export default function ShowTimesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        About
        <main className="text-red-500">{children}</main>
      </nav>
    </>
  );
}
