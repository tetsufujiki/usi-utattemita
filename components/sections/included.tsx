import { ArrowUpRight, Check } from "lucide-react";

const included = [
  "2時間から利用可能",
  "エンジニア付き",
  "ボーカル録音",
  "ミックス",
  "マスタリング",
  "必要に応じた動画収録",
];

const RESERVE_URL = "https://reserve.united-studio.com";

export function Included() {
  return (
    <section
      id="included"
      aria-labelledby="included-heading"
      className="bg-secondary"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          What is included
        </p>
        <h2
          id="included-heading"
          className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance md:text-4xl"
        >
          料金内でできること
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="rounded-3xl bg-card p-7 md:p-8 lg:col-span-3">
            <h3 className="font-heading text-lg font-bold">基本セッションに含まれるもの</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Check className="size-3.5 text-accent-foreground" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <dl className="mt-7 divide-y divide-border border-t border-border text-sm">
              <div className="flex items-center justify-between py-3">
                <dt className="text-muted-foreground">平日料金</dt>
                <dd className="font-semibold">
                  2時間 ¥XX,XXX〜{" "}
                  <span className="font-normal text-muted-foreground">（税込）</span>
                </dd>
              </div>
              <div className="flex items-center justify-between py-3">
                <dt className="text-muted-foreground">土日祝料金</dt>
                <dd className="font-semibold">
                  2時間 ¥XX,XXX〜{" "}
                  <span className="font-normal text-muted-foreground">（税込）</span>
                </dd>
              </div>
            </dl>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              延長、複数曲の同時収録、特殊な編集をご希望の場合は、追加料金が発生することがあります。
              当日の作業前に必ず確認しますので、その場で急に増えることはありません。
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-3xl border border-border bg-card p-7 md:p-8 lg:col-span-2">
            <h3 className="font-heading text-lg font-bold text-balance">
              日付と料金を、先に確認できます
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              正確な料金と空き状況は、予約システムでいつでも見られます。
              見るだけで、予約しなくても大丈夫です。
            </p>
            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground transition-transform focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-[0.98]"
            >
              空き状況・料金を見て予約する
              <ArrowUpRight
                className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <p className="text-center text-xs text-muted-foreground">
              予約システム（reserve.united-studio.com）へ移動します
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
