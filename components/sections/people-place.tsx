import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const points = [
  {
    title: "実際のレコーディングスタジオ",
    note: "音楽制作に使われている、本物のスタジオで録音します。",
  },
  {
    title: "プロ仕様のマイク",
    note: "声がきれいに録れる、スタジオ用のコンデンサーマイクを使います。",
  },
  {
    title: "エンジニアが一緒に進めます",
    note: "機材の操作も音の調整もエンジニアの仕事。あなたは歌うことだけ。",
  },
  {
    title: "一人でも来やすい場所",
    note: "利用者の多くはお一人です。付き添いの方と一緒でも大丈夫。",
  },
];

export function PeopleAndPlace() {
  return (
    <section
      aria-labelledby="place-heading"
      className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="order-2 overflow-hidden rounded-3xl md:order-1">
          <Image
            src="/images/studio-room.png"
            alt="自然光の入る明るいレコーディングスタジオのコントロールルーム"
            width={720}
            height={540}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            People and place
          </p>
          <h2
            id="place-heading"
            className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance md:text-4xl"
          >
            誰と、どこで録るか
          </h2>

          <ul className="mt-8 flex flex-col gap-5">
            {points.map((point) => (
              <li key={point.title}>
                <h3 className="font-heading text-base font-bold">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {point.note}
                </p>
              </li>
            ))}
          </ul>

          <a
            href="https://studio.united-studio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            機材・設備を詳しく見る
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
