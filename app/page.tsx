import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { WhatYouCanMake } from "@/components/sections/what-you-can-make";
import { SessionSample } from "@/components/sections/session-sample";
import { FirstSession } from "@/components/sections/first-session";
import { Included } from "@/components/sections/included";
import { AboutStudio } from "@/components/sections/about-studio";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

const siteUrl = "https://utattemita.united-studio.com/";
const siteName = "Utattemita by UNITED STUDIO INC";
const pageName = "歌ってみた録音スタジオ 東京・板橋｜Utattemita by UNITED STUDIO";
const description = "東京・板橋の歌ってみた録音スタジオ。エンジニア付きで、ボーカル録音からミックス・マスタリング、動画収録まで一緒に進めます。初めてのうたみた制作も、2時間のセッションで当日完成を目指せます。料金と空き状況は予約ページで確認できます。好きな曲と伴奏音源があればご相談いただけます。";
const organizationId = `${siteUrl}#organization`;
const websiteId = `${siteUrl}#website`;
const webpageId = `${siteUrl}#webpage`;
const serviceId = `${siteUrl}#service`;

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteName,
    url: siteUrl,
    description,
    publisher: {
      "@type": "Organization",
      "@id": organizationId,
      name: "UNITED STUDIO INC",
      url: "https://united-studio.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": webpageId,
    name: pageName,
    url: siteUrl,
    description,
    isPartOf: {
      "@type": "WebSite",
      "@id": websiteId,
      name: siteName,
      url: siteUrl,
    },
    about: {
      "@type": "Service",
      "@id": serviceId,
      name: "歌ってみた録音・うたみた制作",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId,
    name: "歌ってみた録音・うたみた制作",
    serviceType: "Vocal recording, mixing, mastering and video recording for cover songs",
    url: siteUrl,
    provider: {
      "@type": "Organization",
      "@id": organizationId,
      name: "UNITED STUDIO INC",
      url: "https://united-studio.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Tokyo, Japan",
    },
    offers: {
      "@type": "Offer",
      url: "https://reserve.united-studio.com",
      availability: "https://schema.org/InStock",
    },
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WhatYouCanMake />
        <SessionSample />
        <FirstSession />
        <Included />
        <AboutStudio />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
