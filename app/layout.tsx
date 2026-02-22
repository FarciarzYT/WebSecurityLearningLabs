import './globals.css';

import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Web Security Learning Labs",
  description: "change it later",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
