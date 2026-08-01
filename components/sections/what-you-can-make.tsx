import { Mic, Music, Share2, Video } from "lucide-react";

const subItems = [
  {
    icon: Music,
    title: "カバー音源",
    description: "好きな曲のカバーを、きちんとした音で。",
  },
  {
    icon: Share2,
    title: "SNS投稿用の音声",
    description: "TikTokやInstagramにそのまま使える形で。",
  },
  {
    icon: Video,
    title: "歌唱動画",
    description: "必要に応じて、歌っている姿も簡単に撮影できます。",
  },
];

export function WhatYouCanMake() {
  return (
    <section
      id="what-you-can-make"
      aria-labelledby="make-heading"
      className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24"
    >
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        What you can make
      </p>
      <h2
        id="make-heading"
        className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance md:text-4xl"
      >
        できあがるもの
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {/* Main: utattemita audio */}
        <div className="flex flex-col justify-between gap-6 rounded-3xl bg-foreground p-7 text-background md:col-span-2 md:row-span-2 md:p-10">
          <div>
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Mic className="size-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-heading text-2xl font-extrabold md:text-3xl">
              歌ってみた音源
            </h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-background/80">
              あなたの歌を録音して、ミックス・マスタリングまで仕上げた完成データ。
              投稿にも、自分用にも使えます。
            </p>
          </div>
          <ul className="flex flex-wrap gap-2 text-sm">
            {["録音", "ミックス", "マスタリング"].map((step) => (
              <li
                key={step}
                className="rounded-full border border-background/25 px-3.5 py-1.5 font-medium"
              >
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Supporting items */}
        {subItems.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6"
          >
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground">
              <item.icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-heading text-base font-bold">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
