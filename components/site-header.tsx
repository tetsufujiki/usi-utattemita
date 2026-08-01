"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { href: "#first-session", label: "流れ" },
  { href: "#included", label: "料金" },
  { href: "#faq", label: "FAQ" },
];

const RESERVE_URL = "https://reserve.united-studio.com";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex flex-col leading-tight focus-visible:outline-2 focus-visible:outline-offset-4"
          onClick={() => setOpen(false)}
        >
          <span className="font-heading text-lg font-extrabold tracking-tight">
            Utattemita
          </span>
          <span className="text-[11px] font-medium text-muted-foreground">
            by United Studio
          </span>
        </Link>

        <nav aria-label="メイン" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            料金・空き状況
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
          <span className="sr-only">{open ? "メニューを閉じる" : "メニューを開く"}</span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="モバイルメニュー"
          className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-base font-medium hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-between rounded-xl border border-border bg-card px-3 py-3 text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-2"
                onClick={() => setOpen(false)}
              >
                料金・空き状況
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
