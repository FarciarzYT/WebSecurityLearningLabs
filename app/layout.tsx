import './globals.css';
import { Analytics } from "@vercel/analytics/next"
import {SpeedInsights} from "@vercel/speed-insights/next";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Web Security Learning Labs",
  description: "change it later",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {


  return (
    <html lang="en">
      <body>
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
