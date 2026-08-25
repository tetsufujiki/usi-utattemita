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
const pageName = "歌ってみた録音・うたみた制作｜Utattemita by UNITED STUDIO INC";
const description = "好きな曲を、自分の声で。東京・板橋のUnited Studioが、歌ってみたの録音・ミックス・マスタリング・動画収録まで一緒に進めます。";
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
