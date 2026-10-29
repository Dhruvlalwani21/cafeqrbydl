import React from "react";
import quotes from "@/lib/review/qoute";
import { getPlace } from "@/lib/review/places";
import { notFound } from "next/navigation";
import { getSeasonalTheme, isThemeName, themes } from "./themes";
import Effects from "./effects";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ theme?: string | string[] }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { theme: themeParam } = await searchParams;
  const place = getPlace(slug);

  if (!place) {
    notFound();
  }

  // ?theme=halloween | winter | christmas | default overrides the date-based theme
  const requested = Array.isArray(themeParam) ? themeParam[0] : themeParam;
  const theme = themes[isThemeName(requested) ? requested : getSeasonalTheme()];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-6 pt-16"
      style={{ background: theme.background }}
    >
      {/* Animated background (snow, bats, lights, ...) */}
      <Effects theme={theme.name} />

      <div
        className={`relative z-10 flex w-full max-w-sm flex-col items-center rounded-3xl border-4 px-5 pb-10 pt-12 shadow-2xl sm:px-7 ${theme.card}`}
      >
        {/* Faint inner frame */}
        {theme.innerBorder && (
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-2 rounded-[1.1rem] border border-dashed ${theme.innerBorder}`}
          />
        )}

        {/* Candy-cane stripe */}
        {theme.candyStripe && (
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-2 rounded-b-[20px]"
            style={{
              background:
                "repeating-linear-gradient(45deg,#c62828 0 10px,#ffffff 10px 20px)",
            }}
          />
        )}

        {/* Theme icon */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <span className={theme.iconAnim}>
            <span className={`block text-[64px] leading-none ${theme.iconGlow}`}>
              {theme.icon}
            </span>
          </span>
        </div>

        <div className="relative mb-4 mt-8 text-center">
          <h1
            className={`text-2xl font-extrabold tracking-wide drop-shadow sm:text-3xl ${theme.titleText}`}
          >
            {theme.title}
          </h1>
          <p className={`mt-3 text-base font-medium sm:text-lg ${theme.quoteText}`}>
            <span className="italic">“{randomQuote ?? theme.fallbackQuote}”</span>
          </p>
        </div>

        {/* Claim instruction */}
        <div className="relative mb-2 mt-8 w-full text-center">
          <span className={`text-base font-bold ${theme.claimText}`}>
            {theme.claimLine}
          </span>
        </div>

        {/* Claim button */}
        <a
          href={place.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative mt-3 flex min-h-12 w-full items-center justify-center rounded-xl px-4 py-3 text-center font-semibold text-white shadow-lg transition-all duration-150 ease-in-out hover:scale-105 focus-visible:outline-none focus-visible:ring-4 active:scale-95 ${theme.button}`}
        >
          {theme.buttonLabel}
        </a>

        <p
          className={`relative mt-8 break-words text-center text-base font-bold italic ${theme.placeText}`}
        >
          {place.name}
        </p>
      </div>
    </div>
  );
}