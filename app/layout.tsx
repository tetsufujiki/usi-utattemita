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
  title: {
    default: "Utattemita | 歌うだけで、一曲になる。",
    template: "%s | Utattemita",
  },
  description:
    "好きな曲をスタジオで歌って、自分の一曲に。録音・ミックス・マスタリングまでUnited Studioのエンジニアと一緒に進めます。",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`bg-background antialiased ${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden font-sans">{children}</body>
    </html>
  );
}
