import type { Metadata, Viewport } from "next";
import { Geist, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const display = Noto_Sans_JP({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://utattemita.united-studio.com"),
  title: "歌ってみた録音・うたみた制作｜Utattemita by UNITED STUDIO INC",
  description:
    "好きな曲を、自分の声で。東京・板橋のUnited Studioが、歌ってみたの録音・ミックス・マスタリング・動画収録まで一緒に進めます。",
  openGraph: {
    title: "歌うだけで、一曲になる。｜Utattemita",
    description:
      "好きな曲を、自分の声で。録音もミックスも一緒に進む、United Studioの歌ってみた制作サイト。",
    url: "https://utattemita.united-studio.com/",
    siteName: "Utattemita by UNITED STUDIO INC",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "歌うだけで、一曲になる。Utattemita by UNITED STUDIO INC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "歌うだけで、一曲になる。｜Utattemita",
    description:
      "好きな曲を、自分の声で。録音もミックスも一緒に進む、United Studioの歌ってみた制作サイト。",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`bg-background antialiased ${display.variable} ${body.variable}`}>
      <head>
        <link rel="canonical" href="https://utattemita.united-studio.com/" />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden font-sans">{children}</body>
    </html>
  );
}
