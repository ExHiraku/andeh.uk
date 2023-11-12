import "../styles/globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

import { ModalProvider } from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://andeh.uk"),
  alternates: {
    canonical: "/",
  },
  title: "Andeh",
  description:
    "Blending aesthetics with functionality using a diverse tech stack in crafting seamless user experiences and robust backend architectures.",
  icons: [{ rel: "icon", url: "/assets/avatar2.png" }],
  themeColor: "#fb5f5f",
  openGraph: {
    images: [{ url: "/assets/og_image.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(font.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="andeh-theme"
        >
          <ModalProvider />
          <Toaster position="top-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
