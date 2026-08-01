import { ArrowUpRight } from "lucide-react";

const familyLinks = [
  {
    href: "https://rec.united-studio.com",
    label: "rec",
    description: "レコーディング全般・料金詳細",
  },
  {
    href: "https://studio.united-studio.com",
    label: "studio",
    description: "スタジオ・機材・制作について",
  },
  {
    href: "https://reserve.united-studio.com",
    label: "reserve",
    description: "空き状況の確認・予約",
  },
  {
    href: "https://united-studio.com",
    label: "United Studio",
    description: "会社サイト",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <p className="font-heading text-lg font-extrabold tracking-tight">
              Utattemita
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Utattemitaは、United Studioの「歌ってみた」専用入口です。
              録音・ミックス・予約は、United Studioの各サービスで行われます。
            </p>
          </div>

          <nav aria-label="United Studioの関連サイト">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              United Studio
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {familyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-1 rounded-xl px-2 py-2 transition-colors hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    <span>
                      <span className="flex items-center gap-1 text-sm font-semibold">
                        {link.label}
                        <ArrowUpRight
                          className="size-3.5 text-muted-foreground"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {link.description}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} United Studio Inc.</p>
          <div className="flex gap-4">
            <a
              href="https://united-studio.com/privacy"
              className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              プライバシーポリシー
            </a>
            <a
              href="https://united-studio.com/terms"
              className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
