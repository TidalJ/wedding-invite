import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jay & Pinky — Wedding",
  description:
    "17 February 2027 · The Manor Basket Range, Adelaide Hills — Jay 与 Pinky 诚挚邀请",
  openGraph: {
    title: "Jay & Pinky — Wedding",
    description: "Save the date — 17 Feb 2027, Basket Range SA",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf9f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh overflow-x-hidden">{children}</body>
    </html>
  );
}
