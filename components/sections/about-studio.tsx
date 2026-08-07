import Image from "next/image";
import { ArrowUpRight, LockKeyhole, UserRoundCheck } from "lucide-react";

const STUDIO_URL = "https://rec.united-studio.com/";

export function AboutStudio() {
  return (
    <section
      id="about-studio"
      aria-labelledby="about-studio-heading"
      className="border-b-2 border-foreground bg-background px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-mono text-xs font-bold uppercase tracking-widest">
          05 / About studio
        </p>

        <div className="mt-5 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-12">
          <div>
            <h2
              id="about-studio-heading"
              className="font-heading text-5xl font-black leading-[0.95] tracking-[-0.045em] text-balance md:text-7xl"
            >
              ここで録ります。
            </h2>
            <p className="mt-6 max-w-xl text-base font-semibold leading-relaxed md:text-lg">
              <span className="block">東京・板橋の完全予約制プライベートスタジオ。</span>
              <span className="block">録音からミックスまで、同じエンジニアが担当します。</span>
            </p>

            <ul className="mt-7 flex flex-wrap gap-2 text-sm font-bold">
              <li className="flex items-center gap-2 border-2 border-foreground bg-surprise px-3 py-2">
                <LockKeyhole className="size-4" aria-hidden="true" />
                完全予約制
              </li>
              <li className="flex items-center gap-2 border-2 border-foreground bg-secondary px-3 py-2">
                <UserRoundCheck className="size-4" aria-hidden="true" />
                同じ担当者が対応
              </li>
            </ul>

            <a
              href={STUDIO_URL}
              className="group mt-8 inline-flex items-center gap-2 border-b-2 border-foreground pb-1 text-sm font-bold transition-colors hover:text-primary focus-visible:outline-4 focus-visible:outline-offset-4 md:text-base"
            >
              予約する前に、スタジオについて詳しく見る
              <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr] sm:items-end">
            <figure className="pop-shadow overflow-hidden border-2 border-foreground bg-card">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/DSCF3309.jpg"
                  alt="マイクとソファを備えた明るい録音ブース"
                  fill
                  sizes="(min-width: 1024px) 43vw, (min-width: 640px) 55vw, calc(100vw - 32px)"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t-2 border-foreground px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider">
                Recording room
              </figcaption>
            </figure>

            <figure className="pop-shadow overflow-hidden border-2 border-foreground bg-card sm:mb-6">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/DSCF3209.jpg"
                  alt="モニターと音響機器が並ぶスタジオのコントロールルーム"
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 38vw, calc(100vw - 32px)"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="border-t-2 border-foreground px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider">
                Control room
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
