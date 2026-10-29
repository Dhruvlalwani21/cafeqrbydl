export type ThemeName = "default" | "halloween" | "winter" | "christmas";

export interface Theme {
  name: ThemeName;
  icon: string;
  /** CSS class for the icon animation (defined in effects.tsx) */
  iconAnim: string;
  title: string;
  claimLine: string;
  buttonLabel: string;
  fallbackQuote: string;
  /** Full CSS `background` value for the page */
  background: string;
  // Tailwind classes (full strings so Tailwind can detect them)
  card: string;
  /** Faint dashed frame drawn inside the card (empty = none) */
  innerBorder: string;
  /** Candy-cane stripe along the card's bottom edge */
  candyStripe: boolean;
  titleText: string;
  quoteText: string;
  claimText: string;
  button: string;
  placeText: string;
  iconGlow: string;
}

export const themes: Record<ThemeName, Theme> = {
  default: {
    name: "default",
    icon: "🔮",
    iconAnim: "fx-bob",
    title: "Your Fortune Awaits!",
    claimLine: "Enjoying our vibe, leave us a honest review 🌟",
    buttonLabel: "Leave a Google Review",
    fallbackQuote:
      "In the near future, you will discover that the remote is in your other hand. Again.",
    background: "linear-gradient(135deg, #f6d365 0%, #fda085 50%, #f6d365 100%)",
    card: "bg-white border-yellow-400",
    innerBorder: "",
    candyStripe: false,
    titleText: "text-gray-900",
    quoteText: "text-gray-600",
    claimText: "text-yellow-800",
    button:
      "bg-gradient-to-r from-yellow-400 via-pink-400 to-yellow-400 focus-visible:ring-yellow-500",
    placeText: "text-yellow-800",
    iconGlow: "drop-shadow-lg",
  },

  halloween: {
    name: "halloween",
    icon: "🎃",
    iconAnim: "fx-flicker",
    title: "Your Spooky Fortune Awaits!",
    claimLine: "Enjoying our vibe, leave us a honest review! 🎃",
    buttonLabel: "Leave a Google Review",
    fallbackQuote:
      "A mysterious stranger will soon appear in your life. It is probably the delivery guy.",
    background:
      "radial-gradient(ellipse at 80% 0%, #4a1d7a 0%, #1d0b36 45%, #0a0412 100%)",
    card: "bg-[#1c1030]/95 border-orange-500 shadow-orange-500/30",
    innerBorder: "border-orange-400/30",
    candyStripe: false,
    titleText: "text-orange-400",
    quoteText: "text-purple-200",
    claimText: "text-orange-300",
    button:
      "bg-gradient-to-r from-orange-600 via-purple-700 to-orange-600 focus-visible:ring-orange-400",
    placeText: "text-orange-300",
    iconGlow: "", // glow is animated via .fx-flicker
  },

  winter: {
    name: "winter",
    icon: "⛄",
    iconAnim: "fx-bob",
    title: "Your Winter Fortune Awaits!",
    claimLine: "Enjoying our vibe, leave us a honest review! ❄️",
    buttonLabel: "Leave a Google Review.",
    fallbackQuote:
      "A cozy blanket and a hot drink are in your immediate future. Accept them.",
    background:
      "linear-gradient(180deg, #0b1f3f 0%, #1f4a82 50%, #8ec5ea 100%)",
    card: "bg-white/95 border-sky-300 shadow-sky-300/40",
    innerBorder: "border-sky-300/50",
    candyStripe: false,
    titleText: "text-indigo-900",
    quoteText: "text-slate-600",
    claimText: "text-sky-800",
    button:
      "bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-500 focus-visible:ring-sky-500",
    placeText: "text-sky-800",
    iconGlow: "drop-shadow-[0_0_16px_rgba(125,211,252,0.9)]",
  },

  christmas: {
    name: "christmas",
    icon: "🎄",
    iconAnim: "fx-bob",
    title: "Merry Little Fortune!",
    claimLine: "Enjoying our vibe 🎁, leave us a honest review!",
    buttonLabel: "Leave a Google Review",
    fallbackQuote:
      "You will soon receive a gift you did not ask for, but secretly needed.",
    background:
      "radial-gradient(ellipse at 50% 0%, #1f6b4f 0%, #0d3426 50%, #051a12 100%)",
    card: "bg-[#fffaf0] border-[#d9a93b] shadow-black/50",
    innerBorder: "border-[#d9a93b]/50",
    candyStripe: true,
    titleText: "text-[#9b1c1c]",
    quoteText: "text-[#1f4d3a]",
    claimText: "text-[#7a5a10]",
    button:
      "bg-gradient-to-b from-[#d32f2f] to-[#8e1b1b] border border-[#f1cf75] focus-visible:ring-[#f1cf75]",
    placeText: "text-[#7a5a10]",
    iconGlow: "drop-shadow-[0_0_18px_rgba(250,204,21,0.85)]",
  },
};

export function isThemeName(value: unknown): value is ThemeName {
  return typeof value === "string" && value in themes;
}

/**
 * Picks a theme from the date.
 *  - Oct 1 – Nov 1       -> halloween
 *  - Nov 2 – Dec 17      -> winter
 *  - Dec 18 – Dec 26     -> christmas
 *  - Dec 27 – Feb       -> winter
 *  - otherwise           -> default
 */
export function getSeasonalTheme(date: Date = new Date()): ThemeName {
  const m = date.getMonth(); // 0 = Jan
  const d = date.getDate();

  if (m === 9 || (m === 10 && d === 1)) return "halloween";
  if (m === 11 && d >= 18 && d <= 26) return "christmas";
  if ((m === 10 && d >= 2) || m === 11) return "winter";
  if (m === 0 || m === 1) return "winter";
  return "default";
}