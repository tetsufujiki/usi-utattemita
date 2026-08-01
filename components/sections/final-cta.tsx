import { ArrowUpRight, MessageCircle } from "lucide-react";

const RESERVE_URL = "https://reserve.united-studio.com";
const LINE_URL = "https://line.me/R/ti/p/@united-studio";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-heading"
      className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-6 md:pb-28"
    >
      <div className="rounded-3xl bg-foreground px-6 py-14 text-center text-background md:px-12 md:py-20">
        <h2
          id="final-heading"
          className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-balance md:text-4xl"
        >
          その一曲を、
          <br className="md:hidden" />
          自分の声で始めてみる。
        </h2>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-transform focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background active:scale-[0.98] sm:w-auto"
          >
            空き状況・料金を見て予約する
            <ArrowUpRight
              className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-background/30 px-7 py-3.5 text-base font-medium text-background transition-colors hover:bg-background/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background sm:w-auto"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            自分の場合をLINEで相談する
          </a>
        </div>

        <p className="mt-5 text-sm text-background/70">
          予約システムへ移動します。その場で予約を確定しなくても、空き状況を確認できます。
        </p>
      </div>
    </section>
  );
}
