import type { Metadata } from "next";
import "./globals.css";
import SideNav from "@/app/ui/sidenav";
import { AppContextProvider } from "@/app/ui/app-context";
import { kreon } from "@/app/ui/fonts";

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
      <body className={kreon.className}>
        <AppContextProvider>
          <div className="flex h-screen flex-col md:flex-row md:overflow-y-hidden">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            {children}
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
}
