import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "何を用意すればよいですか？",
    a: "歌いたい曲と、その伴奏音源（カラオケ音源・オフボーカル音源など）があれば十分です。音源の探し方が分からない場合は、予約後に相談できます。",
  },
  {
    q: "歌に自信がなくても利用できますか？",
    a: "大丈夫です。録音では、その日の声を聴きながら一緒に進めます。もっと声を整えてから録りたい場合は、関連サービスとしてボイストレーニングの相談もできます。",
  },
  {
    q: "一人で行っても大丈夫ですか？",
    a: "はい。利用者の多くはお一人で来られています。エンジニアが最初から最後まで一緒に進めるので、一人でも困ることはありません。",
  },
  {
    q: "ミックスは料金に含まれますか？",
    a: "含まれます。録音・ミックス・マスタリングまでが基本セッションの範囲です。特殊な編集をご希望の場合のみ、事前に追加料金を確認します。",
  },
  {
    q: "何時間予約すればよいですか？",
    a: "1曲であれば、まずは2時間がおすすめです。じっくり録りたい場合や複数曲の場合は、予約時に長めの枠を選べます。",
  },
  {
    q: "動画も撮れますか？",
    a: "撮れます。歌っている様子の簡単な撮影であれば、セッション内で対応できます。本格的な映像制作をご希望の場合は事前にご相談ください。",
  },
  {
    q: "当日までに曲が決まらなかった場合はどうなりますか？",
    a: "当日、候補の中からエンジニアと一緒に決めることもできます。キーが合うか不安な場合も、その場で試しながら調整できます。",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto w-full max-w-3xl px-4 py-16 md:px-6 md:py-24"
    >
      <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary">
        FAQ
      </p>
      <h2
        id="faq-heading"
        className="mt-2 text-center font-heading text-3xl font-extrabold tracking-tight text-balance md:text-4xl"
      >
        予約前の小さな不安に
      </h2>

      <div className="mt-10 flex flex-col gap-3">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-2xl border border-border bg-card open:border-foreground/20"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-heading text-base font-bold focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden">
              {faq.q}
              <ChevronDown
                className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
