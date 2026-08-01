const steps = [
  {
    title: "歌いたい曲と伴奏音源を用意",
    note: "カラオケ音源やオフボーカル音源など。決まっていなくても相談できます。",
  },
  {
    title: "スタジオで希望を確認",
    note: "どんな仕上がりにしたいか、最初に少しだけ話します。",
  },
  {
    title: "録音",
    note: "エンジニアが横についているので、機材のことは考えなくて大丈夫。",
  },
  {
    title: "一緒に仕上がりを確認",
    note: "気になるところがあれば、その場で伝えられます。",
  },
  {
    title: "完成データを受け取る",
    note: "スマホでもPCでも使える形式でお渡しします。",
  },
];

export function FirstSession() {
  return (
    <section
      id="first-session"
      aria-labelledby="first-heading"
      className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24"
    >
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        First session
      </p>
      <h2
        id="first-heading"
        className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance md:text-4xl"
      >
        初めての流れ
      </h2>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
        用意するものは少しだけ。あとは当日、一緒に進めます。
      </p>

      <ol className="mt-10 flex flex-col gap-0">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="w-px flex-1 bg-border"
                />
              )}
            </div>
            <div className={i < steps.length - 1 ? "pb-8" : ""}>
              <h3 className="pt-1.5 font-heading text-lg font-bold">
                {step.title}
              </h3>
              <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground">
                {step.note}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
