import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Utattemita | United Studio",
    template: "%s | Utattemita",
  },
  description:
    "歌ってみたい気持ちを、予約・相談・料金確認へつなげるUnited Studioの入口。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
