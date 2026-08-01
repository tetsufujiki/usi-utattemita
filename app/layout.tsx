import type { Metadata, Viewport } from "next";
import { M_PLUS_Rounded_1c, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const display = M_PLUS_Rounded_1c({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Utattemita | United Studio — 好きな曲を、自分の声で残す",
    template: "%s | Utattemita",
  },
  description:
    "歌ってみた・カバー音源をスタジオで。録音からミックスまでエンジニアと一緒に、2時間から。初めてでも、一人でも。United Studioの歌ってみた入口サイト。",
};

export const viewport: Viewport = {
  themeColor: "#faf7f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`h-full antialiased bg-background ${display.variable} ${body.variable}`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
