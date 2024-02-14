import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/app/ui/sidenav";
import { AppContextProvider } from "@/app/ui/app-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | StS Dashboard",
    default: "StS Dashboard",
  },
  description: 'Test StS Dashboard app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
          <div className="flex h-screen flex-col md:flex-row md:overflow-y-hidden">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className="flex-none p-6 grid-rows-2 md:overflow-y-auto md:p-12">
              {children}
            </div>
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
}
