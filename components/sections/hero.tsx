import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-16 pt-12 md:grid-cols-2 md:items-center md:px-6 md:pb-24 md:pt-20">
        <div className="flex flex-col items-start gap-6">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            <Sparkles className="size-3.5" aria-hidden="true" />
            歌ってみた、はじめての人へ
          </p>

          <h1
            id="hero-heading"
            className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl"
          >
            好きな曲を、
            <br />
            <span className="relative inline-block">
              自分の声
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-surprise/60"
              />
            </span>
            で残してみる。
          </h1>

          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            録音からミックスまで、スタジオで一緒に。
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#what-you-can-make"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-transform focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-[0.98]"
            >
              歌ってみたい
              <ArrowRight
                className="size-5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#first-session"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-base font-medium transition-colors hover:border-foreground/30 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              初めての流れを見る
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <li>2時間から</li>
            <li aria-hidden="true" className="text-border">
              /
            </li>
            <li>エンジニア付き</li>
            <li aria-hidden="true" className="text-border">
              /
            </li>
            <li>空き状況を見てから決められます</li>
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/hero-singer.png"
              alt="明るいスタジオで、ヘッドホンをつけてマイクに向かって歌う女性"
              width={720}
              height={720}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <p
            aria-hidden="true"
            className="absolute -bottom-3 left-4 rounded-full bg-card px-4 py-2 text-sm font-semibold shadow-sm md:left-6"
          >
            その日の声で、大丈夫。
          </p>
        </div>
      </div>
    </section>
  );
}
